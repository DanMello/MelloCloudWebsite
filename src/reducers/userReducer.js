export default function reducer(state={
  profile: {},
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_USER_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: true, error: action.payload}
    }
    case "FETCH_USER_FULFILLED": {
      return {...state, fetching: false, fetched: true, profile: action.payload.data}
    }
    default :
      return state
  }
}