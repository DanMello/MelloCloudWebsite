import history from '../history.js'

const auth = ({ dispatch, getState }) => next => action => {

  if (action.type === 'USER_LOGOUT_MESSAGE') {

    try {

      localStorage.removeItem('user')

    } catch(e) {

      console.log(e)
    }

    dispatch(action.success())

    history.push({
      pathname: action.redirect,
      state: {
        redirectMessage: action.payload
      }
    })
  }

  if (action.type === 'USER_LOGOUT') {

    try {

      localStorage.removeItem('user')

    } catch(e) {

      console.log(e)
    }

    dispatch(action.success())

    history.push(action.redirect)
  }

  if (action.type === 'USER_VERIFIED') {

    try {

      localStorage.setItem('user', JSON.stringify(action.payload))

    } catch(e) {

      console.log(e)
    }

    history.push(action.redirect)
  }

  if (action.type === 'USER_UPDATE') {

    try {

      localStorage.setItem('user', JSON.stringify(action.payload))

    } catch(e) {

      console.log(e)
    }
  }

  return next(action)
}

export default auth