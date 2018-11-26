import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'

class FormWrapper extends Component {

  render() {

    let isMobile = this.props.isMobile

    return (

      <div className='formWrapper' style={isMobile ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}}>

        <div className='formSubwrapper' style={isMobile ? {width: '95%'} : {width: '450px'}}>

          {this.props.children}

        </div>

      </div>
    )
  }
}

export default hot(module)(FormWrapper)