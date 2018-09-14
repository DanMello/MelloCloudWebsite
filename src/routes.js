import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

//Reducers
import { fetchUser } from './actions/userActions'
import { developmentDesktop, developmentMobile, productionMobile, ProductionDesktop } from './actions/configActions'

import { getCookie } from './api/cookies'

//partials
import Header from './components/partials/header'

//Routes
import Home from './components/public/home'
import About from './components/public/about'

//authentication
import Login from './components/authentication/login'
import Signup from './components/authentication/signup'

class AppRoutes extends Component {

  componentWillMount() {

    let action
    let device = getCookie('device')
    let enviroment = getCookie('enviroment')

    if (device === 'mobile' && enviroment === 'development') action = developmentMobile
    if (device === 'desktop' && enviroment === 'development') action = developmentDesktop

    this.props.dispatch(developmentMobile())
  }

  render() {

    let background

    if (/account/.test(window.location.pathname)) {
      background = {
        position: 'fixed',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
      }
    } else {
      background = {
        minHeight: '600px'
      }
    }

    if (this.props.state.config.device === null) {

      return (
        <img src='/assets/loader.gif' alt='loader' />
      )

    } else {

      return (
        <div style={ Object.assign({}, background, { backgroundColor: '#F0F3F4', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0,0,0,.2)'}) }>
          {!/account/.test(window.location.pathname) && <Route component={Header} />}
          <Route path="/" exact strict render={(props) => <Home {...props} state={this.props.state} dispatch={this.props.dispatch}/> }/>
          <Route path="/about" exact strict component={About}/>
          <Route path='/account/login' exact strict render={(props) => <Login {...props} /> } />
          <Route path='/account/signup' exact strict component={Signup} />
        </div>
      )
    }

  }
}

function mapStateToProps(state) {

  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(AppRoutes))