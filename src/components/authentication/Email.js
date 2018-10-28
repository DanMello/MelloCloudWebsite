import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import './form.css'

class Email extends Component {

  render() {

    return (

      <div className={'inputWrapper'}>

        <div className={'heading'}>What's your email?</div>

        <div className={'inputContainers'}>
          
          <SmartResponse
            input={this.props.form.data.email}
            className='errorText'
            successClassName='successText'
            emptyError='Email cannot be empty'
            validationError='Please enter a valid email.'
          />

          <label className={'formLabels'}>Email: </label>

          <SmartInput
            input={this.props.form.data.email}
            property='email'
            className={'formInputs'}
            method={'["notEmpty","validEmail"]'}
            focusedClassName={'focusedBorder'}
            errorClassName={'errorBorder'}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            autoComplete={'off'}
            type='email'
          />

        </div>

        <SmartButton
          type='next'
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
            text='Checking Email'
          />
          :
          <div className='buttonContainer'>
            <span>Next</span>
            <FaAngleRight size={'1.2em'} color={'white'} />
          </div>
        }
        </SmartButton>

        <SmartButton className={'previousButtonContainer'} type='previous' onClick={this.props.onClick}>
          <div className='previousButton'>
            <FaAngleLeft size={'1.2em'} color={'rgb(0, 122, 255)'} />
            <span>Previous</span>
          </div>
        </SmartButton>
        
      </div>
    )
  }
}

export default  hot(module)(FormHOC(Email))