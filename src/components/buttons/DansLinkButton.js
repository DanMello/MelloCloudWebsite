import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'

class DansLinkButton extends Component {

  render() {

    return (
      <Link to={this.props.to} className='dans-link-button' style={{background: this.props.color, marginTop: this.props.marginTop}}>
        <div>{this.props.title}</div>
      </Link>
    )
  }
}

export default hot(module)(DansLinkButton)