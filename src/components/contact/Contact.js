import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import { FaAngleLeft, FaPaperPlane, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../partials/myloader'
import FormWrapper from '../contentwrapper/FormWrapper'
import { SimplerForm, Input, Response, Button } from 'react-simpler-forms'
import './contact.css'

class Contact extends Component {

  render() {

    let isMobile = this.props.config.isMobile

    let formProps = {
      form: this.props.form,
      updateform: this.props.updateform
    }

    return (
     <FormWrapper isMobile={isMobile}>
          <Helmet>
            <title>mellocloud.com: Contact</title>
          </Helmet>
          <div className='contact-mainContainter'>
          <div className='contact-input-container'>
            <div className='contact-heading-container'>
              <div className='contact-backbutton-container'>
                <Link to='/'>
                  <FaAngleLeft 
                    className='contact-backbutton'
                  />
                </Link>
              </div>
              <h1 className='contact-heading'>Contact</h1>
              <Button
                {...formProps}
                disabled={this.props.disabled}
                className='contact-button'
                disabledClassName='contact-button-disabled'
                type='submit'
                url={this.props.config.url + '/account/contact'}
              >
                 {!!formProps.form.loading ?
                   <Loader width={'25px'} height={'25px'} color='rgb(0,125,255)' containerClass={'contact-loader-container'}/>
                   :
                   <FaPaperPlane
                     className={!this.props.disabled ? 'contact-airplane' : 'contact-button-disabled'}
                   />
                 }
              </Button>
            </div>

            {!!formProps.form.response && <div className='contact-messagecontainer'>{formProps.form.response}</div>}

            {!!formProps.form.error && <div className='contact-errorContainer'>{formProps.form.error}</div>}

            <div className='contact-forminput-container'>
              
              <Response
                {...formProps}
                for='name'
                errorClassName='contact-error-text'
              />

              <Input
                {...formProps}
                className={'contact-forminput'}
                name='name'
                placeholder={"Name"}
                validators={[
                  {method: 'notEmpty', error: 'Name cannot be empty.'},
                  {method: 'onlyLetters', error: 'Name can only contain letters.'}
                ]}
                focusedClassName={'contact-forminput-focused-input'}
                errorClassName={'contact-errorBorder-input'}
                autoComplete={'off'}
                type='text'
              />

            </div>

            <div className='contact-forminput-container'>
              
              <Response
                {...formProps}
                for='email'
                errorClassName='contact-error-text'
              />

              <Input 
                {...formProps}
                className={'contact-forminput'}
                name='email'
                placeholder={"Email"}
                delayError={1400}
                validators={[
                  {method: 'notEmpty', error: 'Name cannot be empty.'},
                  {method: 'validEmail', error: 'Please enter a valid email.'}
                ]}
                focusedClassName={'contact-forminput-focused-input'}
                errorClassName={'contact-errorBorder-input'}
                autoComplete={'off'}
                type='email'
              />

            </div>

            <div className='contact-forminput-container'>

              <Response
                {...formProps}
                for='message'
                errorClassName='contact-error-text'
              />

              <Input
                {...formProps}
                className={'contact-formText-area'}
                name='message'
                placeholder={"Have a question or want to work with me? You can write me a message on here and I'll get back to you."}
                validators={[
                  {method: 'notEmpty', error: 'Message cannot be empty.'}
                ]}
                focusedClassName={'contact-forminput-focused'}
                errorClassName={'contact-errorBorder-textarea'}
                scrollUp
                autoComplete={'off'}
                type='textarea'
              />

            </div>

          </div>

        </div>

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

export default hot(module)(SimplerForm(Contact))