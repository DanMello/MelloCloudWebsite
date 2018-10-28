import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Home extends Component {

  render() {

    return (
      <div>
        <p style={{fontSize: '60px', fontWeight: 'bold'}}>Hi {this.props.user['first_name']}</p>
      </div>
    )
  }
}

export default hot(module)(Home)
