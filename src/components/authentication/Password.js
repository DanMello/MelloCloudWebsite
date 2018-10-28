import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaLock, FaAngleLeft } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import './form.css'

class Password extends Component {

  componentWillUnmount() {

    this.props.dispatch({type: 'FORM_RESET_FIELDS', payload: ['password', 'passwordConfirmation'] })
  }

  render() {

    return (

      <div className={'inputWrapper'}>

        <div className={'heading'}>Let's secure your account!</div>

        <div className={'inputContainers'}>
          
          <SmartResponse
            input={this.props.form.data.password}
            className='errorText'
            matchError={this.props.matchError}
            emptyError='Password cannot be empty'
            validationError='Password does not contain at least 8 characters and 1 number.'
          />

          <label className={'formLabels'}>Password: </label>

          <SmartInput
            input={this.props.form.data.password}
            property='password'
            className={'formInputs'}
            method={'["notEmpty","validPassword"]'}
            focusedClassName={'focusedBorder'}
            errorClassName={'errorBorder'}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            autoComplete={'off'}
            type='password'
          />

        </div>

        <div className={'inputContainers'}>
          
          <SmartResponse
            input={this.props.form.data.passwordConfirmation}
            className='errorText'
            emptyError='Password confirmation cannot be empty'
            validationError='Password confirmation does not contain at least 8 characters and 1 number.'
          />

          <label className={'formLabels'}>Password Confirmation: </label>

          <SmartInput
            input={this.props.form.data.passwordConfirmation}
            property='passwordConfirmation'
            className={'formInputs'}
            method={'["notEmpty","validPassword"]'}
            focusedClassName={'focusedBorder'}
            errorClassName={'errorBorder'}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            autoComplete={'off'}
            type='password'
          />

        </div>

        <SmartButton
          type='submit'
          className={'button'}
          disabledClassName={'disabled'}
          disabled={this.props.disabled}
          loading={this.props.form.loading}
          onClick={this.props.onClick}
        >
         {this.props.form.loading ?

          <Loader
            width={'1.5em'}
            height={'1.5em'}
            color={'white'}
            text='Creating your account'
          />
          :
          <div className='buttonContainer'>
            <span>Create account</span>
            <FaLock size={'1.2em'} color={'white'} />
          </div>
        }
        </SmartButton>

        <SmartButton className={'previousButtonContainer'} type='previous' onClick={this.props.onClick}>
          <div className='previousButton'>
            <FaAngleLeft size={'1.2em'} color={'rgb(0, 122, 255)'} />
            <span>Previous</span>
          </div>
        </SmartButton>

        <p className={'note'}>Password must contain at least 8 characters and 1 number.</p>
        
      </div>
    )
  }
}

export default hot(module)(FormHOC(Password))