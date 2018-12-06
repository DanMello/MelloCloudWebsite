import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import Header from '../header/Header'
import Footer from '../footer/Footer'

class ContentWrapper extends Component {

  render() {

    return (
      <div>
        
        <Header config={this.props.config} dispatch={this.props.dispatch} user={this.props.user} />

        <div className={!this.props.config.isMobile ? 'routeWrapper' : 'routeWrapper-mobile'}>

          <div className={!this.props.config.isMobile ? 'main-content-wrapper' : null} style={this.props.desktopwidth && {width: '100%'}}>
            {this.props.children}
          </div>
          
        </div>

        <Footer config={this.props.config} user={this.props.user} dispatch={this.props.dispatch} />

      </div>
    )
  }
}

export default hot(module)(ContentWrapper)