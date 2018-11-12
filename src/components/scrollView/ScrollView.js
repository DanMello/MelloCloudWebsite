import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'

import './scroll.css'

class Scroll extends Component {

  componentDidMount() {

      let center = (this.props.scrollRef.current.scrollWidth - this.props.scrollRef.current.offsetWidth) / 2

      this.props.scrollRef.current.scrollLeft = 0
      this.props.scrollRef.current.scrollLeft = center
  }

  render() {

    let scrollClasses = classNames(
      'scroll-container', this.props.className || null,
      { 'scroll-hidden': this.props.navOpen }
    )

    return (
      <div className={scrollClasses} ref={this.props.scrollRef}>
        {this.props.children}
      </div>
    )
  }
}

export default hot(module)(Scroll)