import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import queryString from 'query-string'
import ContentWrapper from '../contentwrapper/ContentWrapper'

import './home.css'

class Home extends Component {

  constructor() {

    super ()

    this.state = {
      message: null,
      error: null
    }
  }

  componentDidMount() {

    const values = queryString.parse(this.props.location.search)

    if (values.emailVerified === 'true') {

      this.setState({
        message: 'Thank you for verifying your email.'
      })
    }

    if (values.emailVerifiedError) {

      this.setState({
        error: values.emailVerifiedError
      })
    }
  }

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>

        {!!this.state.message && <div className='home-successtext'>{this.state.message}</div>}
        {!!this.state.error && <div className='home-errortext'>{this.state.error}</div>}

        <h1>hi</h1>
        
      </ContentWrapper>
    )
  }
}

export default hot(module)(Home)
