import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import AppRouter from './routes'
import history from './history'
import { checkHostName } from './helpers/config'
import './index.css'

let config = checkHostName(window.location.hostname)

ReactDOM.render(
  <Router history={history}>
    <AppRouter config={config}/>
  </Router>,
  document.getElementById('root'))
