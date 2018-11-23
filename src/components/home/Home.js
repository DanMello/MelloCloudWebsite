import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'

class Home extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>
        <h1>hi</h1>
      </ContentWrapper>
    )
  }
}

export default hot(module)(Home)
