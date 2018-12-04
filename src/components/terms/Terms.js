import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'

import './terms.css'

class Terms extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>

        <div className='terms-container'>

          <h1 className='terms-heading'>Website Terms of Use</h1>

          <div className='terms-modified'>Last Modified: December 3, 2018</div>

          <p className='terms-paragraph'>
            By accessing and using this website, you accept and agree to be bound by terms and provision of this agreement.
            If you do not agree with any of these terms, please do not use this website.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>1. Disclaimer</h1>

          <p className='terms-paragraph'>
            This site and its components are offered for informational purposes only;
            this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>2. Modifications</h1>

          <p className='terms-paragraph'>
            This site may revise these Terms of Use at any time without notice. 
            It is your responsibility to check these Terms of Use periodically for changes. 
            Your continued use of the site following the posting of changes will mean that you accept and agree to the changes.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>3. Governing Law</h1>

          <p className='terms-paragraph'>
            This Agreement shall be governed by and construed in accordance with the laws of the State of Massachusetts.
          </p>

        </div>
        
      </ContentWrapper>
    )
  }
}

export default hot(module)(Terms)