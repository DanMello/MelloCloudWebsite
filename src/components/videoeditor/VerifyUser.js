import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import NotLoggedIn from './NotLoggedIn'
import NotVerified from './NotVerified'
import VideoEditorModule from './VideoEditorModule'
import { FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MainContainer from './MainContainer'
import './video.css'

class VerifyUser extends Component {

  render() {

    const loggedIn = this.props.user.loggedIn
    const verified = this.props.user.profile.isVerified
    const isMobile = this.props.config.isMobile
    const videoState = this.props.video

    let component

    if (!loggedIn) {

      component = <NotLoggedIn isMobile={isMobile} />

    } else if (!verified) {

      component = <NotVerified isMobile={isMobile} />

    } else {

      component = <VideoEditorModule 
                    dispatch={this.props.dispatch}
                    token={this.props.user.profile.token} 
                    videoState={videoState}
                    isMobile={isMobile}
                  />
    }

    return (
      <MainContainer isMobile={isMobile} backbutton='/'>
        {component}
      </MainContainer>
    )
  }
}

export default hot(module)(VerifyUser)