import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import Header from '../header/Header'

class ContentWrapper extends Component {

  render() {

    return (
      <div className={!this.props.config.isMobile ? 'routeWrapper' : 'routeWrapper-mobile'}>
        
        <Header config={this.props.config} dispatch={this.props.dispatch} user={this.props.user} />

        <div className={!this.props.config.isMobile ? 'main-content-wrapper' : null}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default hot(module)(ContentWrapper)