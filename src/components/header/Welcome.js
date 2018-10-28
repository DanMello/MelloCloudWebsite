import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Welcome extends Component {

  render() {

    let loggedIn = this.props.user.loggedIn
    let Name     = this.props.user.profile['first_name']

    return (
      
      <div className={'header-welcomeContainer'}>
        <p className={'header-welcome-big'}>Welcome {loggedIn && Name}</p>
        <p className={'header-welcome-small'}>View menu {loggedIn && '& account'}</p>
      </div>
    )
  }
}

export default hot(module)(Welcome)