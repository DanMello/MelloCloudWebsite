import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaBars, FaTimes, FaCloud } from 'react-icons/fa'
import classNames from 'classnames'

import { userLogout } from '../../actions/userActions'

import DesktopNav from '../navigation/DesktopNav'
import Welcome from './Welcome'

import './header.css'

class Header extends Component {

  constructor() {

    super()

    this.state = {
      navOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {

    this.props.dispatch(userLogout())
  }

  toggleNav(e) {

    e.stopPropagation()
    
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }))
  }

  render() {

    let Mobile = this.props.config.isMobile

    return (
      
      <div className={'header-headingContainer'}>

        {!!Mobile && 
          
          <div className='header-logoIcon-container-mobile'>
            <div className='header-logoIcon-subcontainer-mobile' onClick={this.props.openMobileNav}>
              <FaBars 
                className='header-logoIcon-mobile'
              />
            </div>
          </div>
        }

        <div className={!!Mobile ? 'header-mobile-logoContainer flexTextContainer' : 'header-logoContainer flexTextContainer'}>

          <FaCloud className='header-logoIcon' />

          <h1 className={!!Mobile ? 'header-logoHeading-mobile' : 'header-logoHeading'}>mello cloud</h1>

        </div>

        {!!Mobile && <div className='header-filler'/>}

        {!Mobile && 
          <div 
            className='header-navContainer'
            onMouseEnter={!Mobile ? this.toggleNav : undefined}
            onMouseLeave={!Mobile ? this.toggleNav : undefined}
            >

            <Welcome user={this.props.user}/>

            <FaBars 
              className='header-logoIcon'
              onClick={this.toggleNav}
            />

            {!!this.state.navOpen && 
              <DesktopNav 
                toggleNav={this.toggleNav}
                logOut={this.logOut}
                LoggedIn={this.props.user.loggedIn}
              />
            }

          </div>
        }

      </div>
    )
  }
}

export default hot(module)(Header)