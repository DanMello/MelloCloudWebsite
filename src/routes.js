import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

//partials
import Header from './components/partials/header'

//Routes
import Home from './components/public/home'
import About from './components/public/about'

//authentication
import Login from './components/authentication/login'
import Signup from './components/authentication/signup'

class AppRoutes extends Component {

  render() {

    console.log(this.props)

    let background
    let bodyRef = document.body

    if (/account/.test(window.location.pathname)) {

      bodyRef.style['background-color'] = '#F0F3F4'
      bodyRef.style['display'] = 'flex'
      bodyRef.style['flexDirection'] = 'column'
      bodyRef.style['justifyContent'] = 'center'

    } else {

      bodyRef.style['background-color'] = 'initial'
      bodyRef.style['display'] = 'initial'
      bodyRef.style['flexDirection'] = 'initial'
      bodyRef.style['justifyContent'] = 'initial'

      background = {
        minHeight: '600px',
        boxShadow: '0px 2px 10px rgba(0,0,0,.2)'
      }
    }

    return (
        <div style={ Object.assign({}, background, { backgroundColor: '#F0F3F4', display: 'flex', flexDirection: 'column', alignSelf: 'center'}) }>
        
        {!/account/.test(window.location.pathname) &&

          <Route render={(props) => {
            return(
              <Header 
                {...props}
                config={this.props.state.config}
                dispatch={this.props.dispatch}
                user={this.props.state.user}
                />
            )
          }}/>
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

        <Route path="/about" exact strict component={About}/>

        <Route path='/account/login' exact strict render={(props) => {
            
            return (
              <Login 
                {...props} 
                config={this.props.state.config}
                user={this.props.state.user}
                dispatch={this.props.dispatch} 
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
                events={this.props.state.events}
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