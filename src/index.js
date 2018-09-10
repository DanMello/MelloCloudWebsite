import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './routes'
import store from './store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
  registerServiceWorker()
