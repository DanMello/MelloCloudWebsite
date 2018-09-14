import { combineReducers } from 'redux'

import config from './configReducer'
import user from './userReducer'

export default combineReducers({
  config,
  user
})