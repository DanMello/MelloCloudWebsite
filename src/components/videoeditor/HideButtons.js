import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HideButtons extends Component {

  render() {

    return (
      <div className={this.props.hide || this.props.loading || this.props.seekInteraction ? 'video-hide' : 'video-show'}>
        {this.props.children}
      </div>
    )
  }
}

export default hot(module)(HideButtons)