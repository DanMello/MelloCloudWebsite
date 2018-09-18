export default function reducer(state={
  profile: {},
  loggedIn: false,
  loading: false,
  error: null
}, action) {  

  switch (action.type) {
    case "LOGIN": {
      return {...state, loading: true}
    }
    case "LOGIN_SUCCESS": {
      return {...state, loading: false, loggedIn: true, profile: action.payload}
    }
    case "LOGIN_ERROR": {
      return {...state, loading: false, error: action.payload.message}
    }
    case "USER_LOGOUT": {
      return {...state, ...action.payload}
    }
    default :
      return state
  }
}