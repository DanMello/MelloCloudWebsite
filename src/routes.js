import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'

import Header from './components/header/Header'

import Home from './components/public/home'
import About from './components/about/About'

import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'

import MobileNavandHeader from './components/navigation/MobileNavandHeader'

import { login, checkEmail } from './actions/formActions'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
  )
}

class AppRoutes extends Component {

  constructor() {

    super()

    this.state = {
      mobileNavOpen: false
    }

    this.openMobileNav = this.openMobileNav.bind(this)
    this.closeMobileNavWhenClickedAway = this.closeMobileNavWhenClickedAway.bind(this)
    this.closeWhenLinkClicked = this.closeWhenLinkClicked.bind(this)

    this._mobileNavRef = React.createRef()
    this._mobileStickyHeaderRef = React.createRef()
  }

  openMobileNav() {

    document.body.classList.add('nav-open')
    
    this.setState({
      mobileNavOpen: true
    })
  }

  closeMobileNavWhenClickedAway(e) {

    e.preventDefault()

    let condition1 = e.target !== this._mobileNavRef.current && !this._mobileNavRef.current.contains(e.target)
    let condition2 = e.target !== this._mobileStickyHeaderRef.current && !this._mobileStickyHeaderRef.current.contains(e.target)

    if ((condition1 && condition2) && this.state.mobileNavOpen) {

      document.body.classList.remove('nav-open')

      this.setState({
        mobileNavOpen: false
      })
    } 
  }

  closeWhenLinkClicked(e) {

    e.preventDefault()

    document.body.classList.remove('nav-open')

    this.setState({
      mobileNavOpen: false
    })
  }

  render() {

    let { config, user, form }  =   this.props.state,
    dispatch                    =   this.props.dispatch
    
    return (

      <div className={!!config.isMobile ? 'routeWrapper-mobile' : 'routeWrapper'} onClick={config.isMobile ? this.closeMobileNavWhenClickedAway : null}>

        {config.isMobile &&

          <div className={this.state.mobileNavOpen ? 'dark' : null}>
            <MobileNavandHeader
              user={user} 
              navOpen={this.state.mobileNavOpen} 
              mobileStickyHeaderRef={this._mobileStickyHeaderRef}
              mobileNavRef={this._mobileNavRef}
              closeWhenLinkClicked={this.closeWhenLinkClicked}
              dispatch={dispatch}
            />
          </div>
        }

        {!/account/.test(window.location.pathname) &&

          <PropsRoute 
            path='/' 
            component={Header} 
            config={config} 
            dispatch={dispatch} 
            user={user} 
            openMobileNav={this.openMobileNav} 
            mobileNavRef={this._mobileNavRef}
          />
        }

        <Route path="/" exact strict render={(props) => {

            return (
              <Home 
                {...props} 
                config={this.props.state.config}
                user={this.props.state.user.profile}
                dispatch={this.props.dispatch} 
                />
            )
          }}/>

        <PropsRoute path="/about" exact strict component={About} config={config} navOpen={this.state.mobileNavOpen} />

        <Route path='/account/login' render={(props) => {
            
            return (
              <Login
                {...props}
                form={this.props.state.form}
                dispatch={this.props.dispatch}
                config={this.props.state.config}
                required={['email', 'password']}
                onSubmit={login}
                />
            ) 
          }} 
        />

        <Route path='/account/signup' exact strict render={(props) => {
            
            return (
              <Signup 
                {...props} 
                config={this.props.state.config}
                user={this.props.state.user}
                form={this.props.state.form}
                dispatch={this.props.dispatch}
                />
            ) 
          }} 
        />

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