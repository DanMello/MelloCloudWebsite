import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'

import AppRouter from './routes'
import store from './store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'))
  registerServiceWorker()
