import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import auth from './middleware/auth'
import api from './middleware/api'
import events from './middleware/events'

import { checkHostName } from './api/config'

import reducer from './reducers'

let initialState = {}

let middleware = applyMiddleware(promise(), thunk, api, auth, events)
let config = checkHostName(window.location.hostname)
let profile = JSON.parse(localStorage.getItem('user'))

if (profile !== null) {
  initialState.user = {}
  initialState.user.loggedIn = true
  initialState.user.profile = {...profile}
}

initialState.config = config

export default createStore(reducer, initialState, middleware)