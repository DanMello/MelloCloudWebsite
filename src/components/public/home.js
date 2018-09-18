import React, { Component } from 'react'

export default class Home extends Component {

  componentWillMount() {

    // this.props.dispatch(fetchUser(this.props.config.url))
  }

  render() {

    return (
      <div>
        <p style={{fontSize: '60px', fontWeight: 'bold'}}>Hi {this.props.user['first_name']}</p>
      </div>
    )
  }
}
