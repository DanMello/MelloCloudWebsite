const api = ({ dispatch, getState}) => next => action => {

  if (action.type === 'FETCH') {

    let { url, method, headers, body} = action.payload

    fetch(url, {
      method,
      headers,
      body: JSON.stringify(body)
    }).then(res => {

      return res.json()

    }).then(payload => {

      dispatch(action.success(payload))

    }).catch(err => {

      dispatch(action.error(err))
    })
  }

  return next(action)
}

export default api