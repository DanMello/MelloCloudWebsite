import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import { checkHostName } from './api/config'

import reducer from './reducers'

let initialState = {}

let middleware = applyMiddleware(promise(), thunk, createLogger())
let config = checkHostName(window.location.hostname)
let user = JSON.parse(localStorage.getItem('user'))

if (user !== null) initialState.user = {...user, loggedIn: true}

initialState.config = config

export default createStore(reducer, initialState, middleware)