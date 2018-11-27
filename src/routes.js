import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'

import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import PdfViewer from './components/pdfViewer/PdfViewer'

import Helio from './components/public/helio'

import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import Forgot from './components/authentication/Forgot'
import Reset from './components/authentication/Reset'

import Settings from './components/settings/Settings'

import { login, checkEmail, contact, forgot, resetPassword } from './actions/formActions'

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

  render() {

    let { config, user, form }  =   this.props.state, 
    dispatch                    =   this.props.dispatch
    
    return (

      <div>
        <Route path='/helio' component={Helio}/>
        
        <PropsRoute path="/" exact strict component={Home} config={config} dispatch={dispatch} user={user} />
        <PropsRoute path="/about" component={About} config={config} dispatch={dispatch} user={user} />
        <PropsRoute path="/contact" component={Contact} config={config} dispatch={dispatch} user={user} form={form} dispatch={dispatch} onSubmit={contact} required={['name', 'email', 'message']} delayErrors={[{ input: 'email', time: 1400 }]} />
        <PropsRoute path="/pdfviewer" exact strict component={PdfViewer} config={config} />

        <PropsRoute path="/account/forgot" exact strict component={Forgot} form={form} config={config} dispatch={dispatch} required={['email']} onSubmit={forgot} delayErrors={[{ input: 'email', time: 1400 }]} />
        <PropsRoute path="/account/login" exact strict component={Login} form={form} config={config} dispatch={dispatch} required={['email', 'password']} onSubmit={login} />
        <PropsRoute path="/account/signup" exact strict component={Signup} form={form} config={config} dispatch={dispatch} user={user} />

        <PropsRoute path="/account/reset/:token" exact strict component={Reset} form={form} config={config} dispatch={dispatch} required={['password', 'passwordConfirmation']} onSubmit={resetPassword}
          delayErrors={[
            { input: 'password', time: 1400 },
            { input: 'passwordConfirmation', time: 1400 }
          ]}
          matchRequired={{ 
            error: 'Passwords do not match.',
            inputs: ['password', 'passwordConfirmation']
          }}
        />

        <PropsRoute path="/settings" exact strict component={Settings} config={config} dispatch={dispatch} user={user} />
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