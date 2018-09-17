export default function reducer(state={
  loggedIn: false,
  first_name: null,
  last_name: null,
  email: null,
  token: null
}, action) {  

  switch (action.type) {
    case "USER_LOGIN": {
      return {...state, ...action.payload, loggedIn: true}
    }
    case "USER_LOGOUT": {
      return {...state, ...action.payload}
    }
    default :
      return state
  }
}