import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'

class ContentWrapper extends Component {

  render() {

    return (
      <div className={!this.props.mobile ? 'main-content-wrapper' : null}>
        {this.props.children}
      </div>
    )
  }
}

export default hot(module)(ContentWrapper)