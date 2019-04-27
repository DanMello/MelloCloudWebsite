import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaBars, FaTimes, FaCloud } from 'react-icons/fa'
import Portal from '../../portal/Portal'
import { Link } from 'react-router-dom'

import MobileNavandHeader from '../navigation/MobileNavandHeader'
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
    this.closeMobileNavWhenClickedAway = this.closeMobileNavWhenClickedAway.bind(this)
    this.closeWhenLinkClicked = this.closeWhenLinkClicked.bind(this)

    this._mobileNavRef = React.createRef()
    this._mobileStickyHeaderRef = React.createRef()
  }

  toggleNav(e) {

    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }))
  }

  closeMobileNavWhenClickedAway(e) {

    let condition1 = e.target !== this._mobileNavRef.current && !this._mobileNavRef.current.contains(e.target)
    let condition2 = e.target !== this._mobileStickyHeaderRef.current && !this._mobileStickyHeaderRef.current.contains(e.target)

    if ((condition1 && condition2) && this.state.navOpen) {

      document.body.classList.remove('nav-open')

      this.setState({
        navOpen: false
      })
    } 
  }

  closeWhenLinkClicked(e) {
    
    document.body.classList.remove('nav-open')

    this.setState({
      navOpen: false
    })
  }

  render() {

    let Mobile = this.props.isMobile

    return (
      <div className={!Mobile ? 'header-headingContainer header-min-width' : 'header-headingContainer'}>

        {!!Mobile && 
          
          <div className='header-logoIcon-container-mobile'>
            
            <div className='header-logoIcon-subcontainer-mobile' onClick={this.toggleNav}>
              <FaBars 
                className='header-logoIcon-mobile'
              />
            </div>

            <Portal rootClass={this.state.navOpen ? 'dark' : null} method={this.closeMobileNavWhenClickedAway}>
              <MobileNavandHeader
                config={this.props.config}
                navOpen={this.state.navOpen} 
                mobileStickyHeaderRef={this._mobileStickyHeaderRef}
                mobileNavRef={this._mobileNavRef}
                closeWhenLinkClicked={this.closeWhenLinkClicked}
              />
            </Portal>

          </div>
        }

        <Link to='/' className={!!Mobile ? 'header-mobile-logoContainer flexTextContainer' : 'header-logoContainer flexTextContainer'}>

          <FaCloud className='header-logoIcon' />

          <h1 className={!!Mobile ? 'header-logoHeading-mobile' : 'header-logoHeading'}>mello cloud</h1>

        </Link>

        {!!Mobile && <div className='header-filler'/>}

        {!Mobile && 
          <div 
            className='header-navContainer'
            onMouseEnter={this.toggleNav}
            onMouseLeave={this.toggleNav}
            >

            <Welcome />

            <FaBars 
              className='header-logoIcon'
              onClick={this.toggleNav}
            />

            {!!this.state.navOpen &&
              <DesktopNav
                toggleNav={this.toggleNav}
                config={this.props.config}
              />
            }
          </div>
        }
      </div>
    )
  }
}

export default hot(module)(Header)