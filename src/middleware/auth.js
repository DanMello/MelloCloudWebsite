import history from '../history.js'

const auth = ({ dispatch, getState}) => next => action => {

  if (action.type === 'USER_LOGOUT') {

    try {

      localStorage.removeItem('user')

    } catch(e) {

      console.log(e)
    }

    history.push(action.redirect)
  }

  if (action.type === 'LOGIN_SUCCESS') {

    try {

      localStorage.setItem('user', JSON.stringify(action.payload))

    } catch(e) {

      console.log(e)
    }

    history.push(action.redirect)
  }

  return next(action)
}

export default auth