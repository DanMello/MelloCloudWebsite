export default function reducer(state={
  step: 0,
  data: {},
  typingDelays: {},
  queryInputs: {},
  loading: false,
  error: false,
  response: null
}, action) {

  switch (action.type) {
    case 'FORM_INPUT_CHANGE': {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.property] : {
            ...state.data[action.payload.property],
            ...action.payload.data
          }
        },
        typingDelays: {
          ...state.typingDelays,
          ...action.payload.typingDelays
        },
        queryInputs: {
          ...state.queryInputs,
          ...action.payload.queryInputs
        }
      }
    }
    case 'FORM_RESET_FIELDS': {    
      return {
        ...state, 
        data: Object.keys(state.data)
          .filter(x => !action.payload.includes(x))
          .reduce((acc, current) => ({...acc, [current]: state.data[current] }), {})
      }
    }
    case 'FORM_RESET': {
      return { step: 0, data: {}, loading: false, error: false, typingDelays: {}, queryInputs: {}, response: null}
    }
    case 'FORM_SUBMIT_ERROR': {
      return {...state, error: action.payload, loading: false}
    }
    case 'FORM_QUERY_ERROR': {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.payload.property] : {
            ...state.data[action.payload.property],
            error: false,
            queryError: action.payload.error,
            successMessage: false,
            queryVerified: false
          }
        }
      }
    }
    case 'FORM_QUERY_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.payload.property] : {
            ...state.data[action.payload.property],
            error: false,
            queryError: false,
            successMessage: action.payload.success,
            queryVerified: true
          }
        }
      }
    }
    case 'FORM_MESSAGE_SENT': {
      return {
        ...state,
        loading: false,
        response: action.payload,
        data: {}
      }
    }
    case 'FORM_INCREMENT_STEP': {
      return {...state, step: state.step + 1}
    }
    case 'FORM_DECREMENT_STEP': {
      return {...state, step: state.step - 1}
    }
    case 'FORM_LOADING': {
      return {...state, loading: true}
    }
    case 'FORM_SET_STEP': {
      return {...state, step: action.payload}
    }
    default :
      return state
  }
}