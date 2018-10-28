import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'

class MobileStickyHeader extends Component {

  render() {

    let Name = this.props.user.profile['first_name']
    let loggedIn = this.props.user.loggedIn

    let navClass = classNames(
      'nav-mobile-heading-container',
      {
        'nav-openMobileNav': this.props.navOpen,
        'nav-closeMobileNav': !this.props.navOpen,
      }
    )

    return (
     
      <div className={navClass} ref={this.props.mobileStickyHeaderRef}>

        <div className='nav-mobile-logoHeading'>{loggedIn ? <div>Welcome, {Name}</div> : <div>Welcome</div> }</div>

      </div>
    )
  }
}

export default hot(module)(MobileStickyHeader)