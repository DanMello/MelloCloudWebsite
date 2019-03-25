import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Welcome extends Component {

  render() {

    return (
      
      <div className={'header-welcomeContainer'}>
        <p className={'header-welcome-big'}>Welcome</p>
        <p className={'header-welcome-small'}>View menu</p>
      </div>
    )
  }
}

export default hot(module)(Welcome)