import React, { Component } from 'react'
import { fetchUser } from '../../actions/userActions'

export default class Home extends Component {

  componentWillMount() {

    this.props.dispatch(fetchUser(this.props.state.config.url))
  }

  render() {

    console.log(this.props)

    // let component
    // let user = this.props.user

    // if (!!user.fetching) {
      
    //   component = <img src='/assets/loader.gif' alt='loader' />

    // } else if (!!user.fetched) {

    //   component = <p>Welcome {user.profile['first_name']}</p>
    // }

    return (
      <div>
        hi
      </div>
    )
  }
}
