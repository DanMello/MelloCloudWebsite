import { combineReducers } from 'redux'

import config from './configReducer'
import user from './userReducer'
import form from './formReducer'
import video from './videoReducer'

export default combineReducers({
  config,
  user,
  form,
  video
})