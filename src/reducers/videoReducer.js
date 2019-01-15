export default function reducer(state={
  loading: false,
  projects: [],
  videos: [],
  error: false
}, action) {

  switch (action.type) {
    case "VIDEO_LOADING": {
      return {...state, loading: true, error: false}
    }
    case "VIDEO_ERROR": {
      return {...state, loading: false, error: action.payload, success: null}
    }
    case "VIDEO_SUCCESS": {
      return {...state, loading: false, [action.meta]: action.payload, error: false}
    }
    default :
      return state
  }
}