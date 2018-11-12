import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'

import About from './components/about/About'
import Home from './components/public/home'
import Helio from './components/public/helio'
import PdfViewer from './components/pdfViewer/PdfViewer'

import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'

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

  render() {

    let { config, user, form }  =   this.props.state, 
    dispatch                    =   this.props.dispatch
    
    return (

      <div>
        <PropsRoute path="/" exact strict component={Home} config={config} dispatch={dispatch} user={user} />
        <Route path='/helio' component={Helio}/>
        <PropsRoute path="/about" exact component={About} config={config} dispatch={dispatch} user={user} />
        <PropsRoute path="/pdfviewer" exact strict component={PdfViewer} config={config} />
        <PropsRoute path="/account/login" exact strict component={Login} form={form} config={config} dispatch={dispatch} required={['email', 'password']} onSubmit={login} />
        <PropsRoute path="/account/signup" exact strict component={Signup} form={form} config={config} dispatch={dispatch} user={user} />
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