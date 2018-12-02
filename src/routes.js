import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Redirect, Switch} from 'react-router-dom'
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
import Edit from './components/settings/Edit'

import { login, checkEmail, contact, forgot, resetPassword, update } from './actions/formActions'

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

const ProtectedPropsRoute = ({ component, ...rest }) => {

  return rest.user.loggedIn ?
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
    :
    <Redirect to='/account/login' />
}

const NotloggedInRoute = ({ component, ...rest }) => {

  return !rest.user.loggedIn ?
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
    :
    <Redirect to='/' />
}

class AppRoutes extends Component {

  render() {

    let { config, user, form }  =   this.props.state, 
    dispatch                    =   this.props.dispatch
    
    return (

      <Switch>

        <Route path='/helio' component={Helio}/>
        
        <PropsRoute path="/" exact strict component={Home} config={config} dispatch={dispatch} user={user} />
        <PropsRoute path="/about" component={About} config={config} dispatch={dispatch} user={user} />
        <PropsRoute path="/contact" component={Contact} config={config} dispatch={dispatch} user={user} form={form} dispatch={dispatch} onSubmit={contact} required={['name', 'email', 'message']} delayErrors={[{ input: 'email', time: 1400 }]} />
        <PropsRoute path="/pdfviewer" exact strict component={PdfViewer} config={config} />

        <ProtectedPropsRoute path="/settings" exact strict component={Settings} config={config} user={user} dispatch={dispatch} />
        <ProtectedPropsRoute path="/settings/edit" exact strict component={Edit} config={config} dispatch={dispatch} form={form} user={user} onSubmit={update} queryMethod={checkEmail}/>

        <NotloggedInRoute path="/account/forgot" exact strict component={Forgot} form={form} config={config} dispatch={dispatch} required={['email']} onSubmit={forgot} delayErrors={[{ input: 'email', time: 1400 }]} user={user}/>
        <NotloggedInRoute path="/account/login" exact strict component={Login} form={form} config={config} dispatch={dispatch} required={['email', 'password']} onSubmit={login} user={user}/>
        <NotloggedInRoute path="/account/signup" exact strict component={Signup} form={form} config={config} dispatch={dispatch} user={user} />
        <NotloggedInRoute path="/account/reset/:token" exact strict component={Reset} form={form} config={config} dispatch={dispatch} user={user} required={['password', 'passwordConfirmation']} onSubmit={resetPassword}
          delayErrors={[
            { input: 'password', time: 1400 },
            { input: 'passwordConfirmation', time: 1400 }
          ]}
          matchRequired={{ 
            error: 'Passwords do not match.',
            inputs: ['password', 'passwordConfirmation']
          }}
        />

      </Switch>
    )
  }
}

function mapStateToProps(state) {

  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(AppRoutes))