import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Home extends Component {

  render() {

    let component
    let user = this.props.user

    if (!!user.fetching) {
      
      component = <img src='/assets/loader.gif' alt='loader' />

    } else if (!!user.fetched) {

      component = <p>Welcome {user.profile['first_name']}</p>
    }

    return (
      <div>
        {component}
      </div>
    )
  }
}
