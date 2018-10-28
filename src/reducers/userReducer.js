export default function reducer(state={
  profile: {},
  loggedIn: false
}, action) {

  switch (action.type) {
    case "USER_VERIFIED": {
      return {...state, loggedIn: true, profile: action.payload}
    }
    case "USER_RESET": {
      return {...state, profile: {}, loggedIn: false}
    }
    default :
      return state
  }
}