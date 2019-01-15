import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import DansLinkButton from '../buttons/DansLinkButton'

class NotLoggedIn extends Component {

  render() {

    return (
      <div className='video-subcontainer'>
        
        <h1 className='video-heading-subcontainer'>Welcome</h1>
        
        <p className='video-instructions-subcontainer'>
          Please note the video editor is in beta phase, which means we cannot guarantee that it will work on all devices.
          We are also not responsible for any crashes or loss of progress.
          If you would like to continue please log in or create an account.
        </p>

        <DansLinkButton to={'/account/login'} color='rgb(58, 61, 80)' title='Log in' marginTop={'20px'} />

        <DansLinkButton to={'/account/signup'} color='#69a74e' title='Create an account' marginTop={'20px'} />

      </div>
    )
  }
}

export default hot(module)(NotLoggedIn)