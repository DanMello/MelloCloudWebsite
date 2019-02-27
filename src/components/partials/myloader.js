import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Loader extends Component {

  render() {
    return (
      <div
        className={this.props.containerClass}
        style={{
        display: 'flex',
        alignItems: 'center'
      }}>
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
      <span style={{marginLeft: '10px', marginRight: '2px'}} className={this.props.className}>{this.props.text}</span>
      </div>
    )
  }
}

export default hot(module)(Loader)

  // {!!this.props.text && <div className='loading' />}

  // border: 16px solid #f3f3f3; /* Light grey */
  // border-top: 16px solid #3498db; /* Blue */
  // border-radius: 50%;
  // width: 120px;
  // height: 120px;
  // animation: spin 2s linear infinite;