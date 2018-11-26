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
        backgroundColor: 'rgb(58, 61, 80)',
        borderRadius: '50%',
        borderTop: '3px solid ' + this.props.color ,
        animation: 'spin 2s linear infinite',
        boxShadow: '0px 2px 10px rgba(0,0,0,.2)'
      }}>
      </div>
      <span style={{marginLeft: '10px', marginRight: '2px'}} className={this.props.className}>{this.props.text}</span>
      {!!this.props.text && <div className='loading' />}
      </div>
    )
  }
}

export default hot(module)(Loader)