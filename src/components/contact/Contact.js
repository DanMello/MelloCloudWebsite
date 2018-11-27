import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { FaAngleLeft, FaPaperPlane, FaCloud } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import { Link } from 'react-router-dom'

import FormWrapper from '../contentwrapper/FormWrapper'

import './contact.css'

class Contact extends Component {

  componentDidMount() {

    this.props.dispatch({type: 'FORM_RESET'})
  }

  render() {

    let isMobile = this.props.config.isMobile

    return (

        <FormWrapper isMobile={isMobile}>

          <form className='contact-mainContainter'>
            <div className='contact-input-container'>
              <div className='contact-heading-container'>
                <Link to='/' className='contact-backbutton-container'>
                  <FaAngleLeft 
                    className='contact-backbutton'
                  />
                </Link>
                <h1 className='contact-heading'>Contact</h1>
                <SmartButton
                  type='submit'
                  className={'contact-button'}
                  disabledClassName={'contact-button-disabled'}
                  disabled={this.props.disabled}
                  loading={this.props.form.loading}
                  onClick={this.props.onClick}
                >
                {!!this.props.form.loading ?
                  <Loader width={'25px'} height={'25px'} color='rgb(0,125,255)' containerClass={'contact-loader-container'}/>
                  :
                  <FaPaperPlane
                    className={!this.props.disabled ? 'contact-airplane' : 'contact-button-disabled'}
                  />
                }
                </SmartButton>
              </div>

              {!!this.props.form.response && <div className='contact-messagecontainer'>{this.props.form.response}</div>}

              {!!this.props.form.error && <div className='contact-errorContainer'>{this.props.form.error}</div>}

              <div>

                <div className='contact-forminput-container'>
                  
                  <SmartResponse
                    input={this.props.form.data.name}
                    className='contact-error-text'
                    emptyError='Name cannot be empty'
                    validationError='Name can only contain letters'
                  />

                  <SmartInput 
                    className={'contact-forminput'}
                    property='name'
                    placeholder={"Name"}
                    method={'["notEmpty","onlyLetters"]'}
                    focusedClassName={'contact-forminput-focused-input'}
                    errorClassName={'contact-errorBorder-input'}
                    input={this.props.form.data.name}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    autoComplete={'off'}
                    type='text'
                  />
                </div>

                <div className='contact-forminput-container'>
                  
                  <SmartResponse
                    input={this.props.form.data.email}
                    className='contact-error-text'
                    emptyError='Email cannot be empty'
                    validationError='Please enter a valid email.'
                  />

                  <SmartInput 
                    className={'contact-forminput'}
                    property='email'
                    placeholder={"Email"}
                    method={'["notEmpty","validEmail"]'}
                    focusedClassName={'contact-forminput-focused-input'}
                    errorClassName={'contact-errorBorder-input'}
                    input={this.props.form.data.email}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    autoComplete={'off'}
                    type='email'
                  />
                </div>

                <SmartInput
                  className={'contact-formText-area'}
                  property='message'
                  placeholder={"Have a question or want to work with me? You can write me a message on here and I'll get back to you."}
                  method={'["notEmpty"]'}
                  focusedClassName={'contact-forminput-focused'}
                  errorClassName={'contact-errorBorder-textarea'}
                  input={this.props.form.data.message}
                  onChange={this.props.onChange}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                  autoComplete={'off'}
                  textArea={true}
                  type='text'
                />

              </div>
            </div>
          </form>

          <div className='contact-logo-container'>
            <Link to='/' className='contact-logo'>
              <FaCloud className='contact-cloudIcon' />
              <div className='contact-mellocloud'>mello cloud</div>
            </Link>
          </div>

        </FormWrapper>
    )
  }
}

export default hot(module)(FormHOC(Contact))