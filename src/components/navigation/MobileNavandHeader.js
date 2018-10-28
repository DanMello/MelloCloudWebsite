import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import MobileNav from './MobileNav'
import MobileStickyHeader from './MobileStickyHeader'

class MobileNavandHeader extends Component {

  render() {

    return (
      <div>
        <MobileStickyHeader 
          user={this.props.user}
          navOpen={this.props.navOpen}
          mobileStickyHeaderRef={this.props.mobileStickyHeaderRef}
        />
        <MobileNav
          user={this.props.user}
          navOpen={this.props.navOpen}
          mobileNavRef={this.props.mobileNavRef}
          closeWhenLinkClicked={this.props.closeWhenLinkClicked}
          dispatch={this.props.dispatch} 
        />
      </div>
    ) 
  }
}

export default hot(module)(MobileNavandHeader)