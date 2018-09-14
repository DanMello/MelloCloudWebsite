export default function reducer(state={
  enviroment: null,
  device: null,
  url: null
}, action) {

  switch (action.type) {
    case "DEVELOPMENT_DESKTOP": {
      return {...state, ...action.payload}
    }
    case "DEVELOPMENT_MOBILE": {
      return {...state, ...action.payload}
    }
    default :
      return state
  }
}