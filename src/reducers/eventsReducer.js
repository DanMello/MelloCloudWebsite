export default function reducer(state={}, action) {

  switch (action.type) {
    case "FILTERED_EVENTS": {
      return {...state, ...action.payload}
    }
    default :
      return state
  }
}