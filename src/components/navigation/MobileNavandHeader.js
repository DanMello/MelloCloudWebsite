import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import MobileNav from './MobileNav'
import MobileStickyHeader from './MobileStickyHeader'

class MobileNavandHeader extends Component {

  render() {

    return (
      <div>
        <MobileStickyHeader 
          navOpen={this.props.navOpen}
          mobileStickyHeaderRef={this.props.mobileStickyHeaderRef}
        />
        <MobileNav
          config={this.props.config}
          navOpen={this.props.navOpen}
          mobileNavRef={this.props.mobileNavRef}
          closeWhenLinkClicked={this.props.closeWhenLinkClicked}
        />
      </div>
    ) 
  }
}

export default hot(module)(MobileNavandHeader)