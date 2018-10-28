import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { FaAngleRight } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'

class Name extends Component {

  render() {

    return (

      <div className={'inputWrapper'}>

        <div className={'heading'}>What's your name?</div>

        <div className={'inputContainers'}>
          
          <SmartResponse
            className='errorText'
            input={this.props.form.data.firstName}
            emptyError='First name cannot be empty'
            validationError='First name can only contain letters.'
          />

          <label className={'formLabels'}>First name: </label>

          <SmartInput
            className={'formInputs'}
            property='firstName'
            method={'["notEmpty","onlyLetters"]'}
            focusedClassName={'focusedBorder'}
            errorClassName={'errorBorder'}
            input={this.props.form.data.firstName}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            autoComplete={'off'}
            type='text'
          />

        </div>

        <div className={'inputContainers'}>

          <SmartResponse
            className='errorText'
            input={this.props.form.data.lastName}
            emptyError='Last name cannot be empty'
            validationError='Last name can only contain letters.'
          />

          <label className={'formLabels'}>Last name: </label>

          <SmartInput
            className={'formInputs'}
            property='lastName'
            method={'["notEmpty","onlyLetters"]'}
            focusedClassName={'focusedBorder'}
            errorClassName={'errorBorder'}
            input={this.props.form.data.lastName}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            autoComplete={'off'}
            type='text'
          />

        </div>

        <SmartButton
          className={'button'}
          disabledClassName={'disabled'}
          disabled={this.props.disabled}
          loading={this.props.form.loading}
          onClick={this.props.onClick}
          type='next'
        >
        <div className='buttonContainer'>
          <span>Next</span>
          <FaAngleRight size={'1.2em'} color={'white'} />
        </div>
        </SmartButton>

        <div className='terms'>
          <p>By clicking next you agree to the mello cloud's <br />
            <Link to='/terms' className='link'> Terms of service </Link> & 
            <Link to='/terms' className='link'> Privacy Policy </Link> 
          </p>
        </div>

      </div>
    )
  }
}

export default hot(module)(FormHOC(Name))