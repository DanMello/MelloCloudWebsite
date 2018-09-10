import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

//Reducers
import { fetchUser } from './actions/userActions'

import { isMobile } from './api/frontend/isMobile'

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

    this.props.dispatch(fetchUser())
  }

  render() {

    let background

    if (/account/.test(window.location.pathname)) {
      background = {
        position: 'fixed',
        height: '100%',
        width: '100%'
      }
    } else {
      background = {
        minHeight: '600px'
      }
    }

    return (
      <div style={ Object.assign({}, background, { backgroundColor: '#F0F3F4', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0,0,0,.2)'}) }>
        {!/account/.test(window.location.pathname) && <Route component={Header} />}
        <Route path="/" exact strict render={(props) => <Home {...props} user={this.props.state.user} isMobile={isMobile} /> }/>
        <Route path="/about" exact strict component={About}/>
        <Route path='/account/login' exact strict render={(props) => <Login {...props} isMobile={isMobile} /> } />
        <Route path='/account/signup' exact strict component={Signup} />
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(AppRoutes))