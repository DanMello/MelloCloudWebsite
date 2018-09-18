import { combineReducers } from 'redux'

import config from './configReducer'
import user from './userReducer'
import events from './eventsReducer'

export default combineReducers({
  config,
  user,
  events
})