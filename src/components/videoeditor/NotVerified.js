import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'

class NotLoggedIn extends Component {

  render() {

    return (

      <div className='video-subcontainer'>
        
        <h1 className='video-heading-subcontainer'>Welcome</h1>
        
        <p className='video-instructions-subcontainer'>
          Your email is not verified, please verify your email before continuing
        </p>

      </div>
    )
  }
}

export default hot(module)(NotLoggedIn)