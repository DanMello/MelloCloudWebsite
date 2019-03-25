import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Header from '../header/Header'
import Footer from '../footer/Footer'

class ContentWrapper extends Component {

  render() {

    let isMobile = this.props.config.isMobile

    return (
      <div>
        
        <Header isMobile={isMobile} />

        <div className={!isMobile ? 'routeWrapper' : 'routeWrapper-mobile'} style={this.props.background ? {background: this.props.background} : null}> 

          <div
            className={!isMobile ? 'main-content-wrapper' : null}
            style={this.props.desktopwidth ? {width: '100%', maxWidth: 'initial', borderBottom: '1px solid #ccc' } : null}
          >
            {this.props.children}
          </div>
          
        </div>

        <Footer isMobile={isMobile} />

      </div>
    )
  }
}

export default hot(module)(ContentWrapper)