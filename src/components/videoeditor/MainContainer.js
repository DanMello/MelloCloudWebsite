import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import { FaAngleLeft, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class MainContainer extends Component {

  render() {

    const videoContainerClass = classNames(
      {
        'video-background-desktop': !this.props.isMobile,
        'video-background-mobile': this.props.isMobile,
      }
    )

    const ContainerClass = classNames(
      {
        'video-loggedOut-container': !this.props.isMobile,
        'video-loggedOut-container-mobile': this.props.isMobile,
      }
    )

    return (
      <div className={videoContainerClass}>

        <div className={ContainerClass}>
          
          <div className='video-heading-container'>
            <Link to={this.props.backbutton} className='contact-backbutton-container'>
              <FaAngleLeft 
                className='contact-backbutton'
              />
            </Link>
            <h1 className='video-heading'>Video Editor</h1>
            <div className='video-flex1'/>
          </div>

          {this.props.children}

        </div>

        <div className='contact-logo-container'>
          <Link to='/' className='contact-logo'>
            <FaCloud className='contact-cloudIcon' />
            <div className='contact-mellocloud'>mello cloud</div>
          </Link>
        </div>

      </div>
    )
  }
}

export default hot(module)(MainContainer)