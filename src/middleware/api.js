import axios from 'axios'

let source = undefined

const api = ({ dispatch, getState }) => next => action => {

  let { type, payload, success, error, loader } = action

  let property = null

  if (type === 'FETCH') {

    if (action.meta) {

      property = action.meta.property

      if (action.meta.cancelable && source !== undefined) {

        source.cancel()
      }
    }

    const CancelToken = axios.CancelToken

    source = CancelToken.source()

    dispatch(action.loader())

    axios({
      ...payload,
      ...{ cancelToken: source.token }
    }).then(response => {

      dispatch(success(!!property ? {success: response.data, property} : response.data))

    }).catch(err => {

      console.log(err.message)

      if (axios.isCancel(err)) {

        console.log('canceled')

      } else {

        dispatch(error(!!property ? {error: err.response.data, property} : err.response.data))
      }
    })
  }

  if (type === 'CANCEL_FETCH') {

    if (source !== undefined) {

      source.cancel('Request canceled by user.')
    }
  }

  return next(action)
}

export default api