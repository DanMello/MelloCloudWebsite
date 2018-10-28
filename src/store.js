import { createStore, applyMiddleware } from 'redux'
import auth from './middleware/auth'
import api from './middleware/api'
import { createLogger } from 'redux-logger'
import { checkHostName } from './api/config'

import reducer from './reducers'

let initialState = {}
let middleware = applyMiddleware(api, auth)
let config = checkHostName(window.location.hostname)
let profile = JSON.parse(localStorage.getItem('user'))

if (profile !== null) {
  initialState.user = {}
  initialState.user.loggedIn = true
  initialState.user.profile = {...profile}
}

initialState.config = config

export default createStore(reducer, initialState, middleware)