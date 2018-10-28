import { combineReducers } from 'redux'

import config from './configReducer'
import user from './userReducer'
import form from './formReducer'

export default combineReducers({
  config,
  user,
  form
})