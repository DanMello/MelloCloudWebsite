import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import queryString from 'query-string'
import ContentWrapper from '../contentwrapper/ContentWrapper'

import './404.css'

class NoMatch extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user} desktopwidth={'100%'} background={'white'}>

        <div className='errorpage-maincontainer'>
          <div className='errorpage-404'>404</div>
          <div className='errorpage-404-text'>Oops we cant seem to find that page.</div>
        </div>
        
      </ContentWrapper>
    )
  }
}

export default hot(module)(NoMatch)