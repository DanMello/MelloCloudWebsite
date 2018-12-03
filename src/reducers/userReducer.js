export default function reducer(state={
  profile: {},
  loggedIn: false,
  loading: false,
  error: false,
  message: null
}, action) {

  switch (action.type) {
    case "USER_VERIFIED": {
      return {...state, loggedIn: true, profile: action.payload}
    }
    case "USER_RESET": {
      return {...state, profile: {}, loggedIn: false}
    }
    case "USER_UPDATE": {
      return {...state, profile: action.payload, loading: false}
    }
    case "USER_LOADING": {
      return {...state, loading: true}
    }
    case "USER_ERROR": {
      return {...state, loading: false, error: action.payload}
    }
    case "USER_EMAIL_RESENT": {
      return {...state, message: action.payload, loading: false}
    }
    default :
      return state
  }
}