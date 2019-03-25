import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Loader extends Component {

  render() {
    return (
      <div className={this.props.containerClass}>
        <div style={{
          width: this.props.width,
          height: this.props.height,
          borderStyle: 'solid',
          borderLeftColor: 'transparent',
          borderRightColor: this.props.color,
          borderBottomColor: this.props.color,
          borderTopColor: this.props.color,
          borderRadius: '50%',
          animation: 'spin 1s ease-in-out 0s infinite normal none running',
        }}>
        </div>
      </div>
    )
  }
}

export default hot(module)(Loader)