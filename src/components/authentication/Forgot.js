import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaCloud, FaUser, FaAngleRight } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import './form.css'

class Forgot extends Component {

  componentDidMount() {

    this.props.dispatch({type: 'FORM_RESET'})
  }

  render() {

    return (

      <FormWrapper isMobile={this.props.config.isMobile}>

        <form className={'formContainer'} style={{...this.props.config.isMobile && {height: '80vh'}}}>

          <Link to='/' className='titleContainer'>
            
            <FaCloud className='cloudIcon' />

            <h1 className='title'>mello cloud</h1>

          </Link>


          <div className='inputWrapper'>

            <div className={'heading'}>Forgot account?</div>

            <div className='errorText'>{this.props.form.error}</div>
            
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
                className={'formInputs'}
                property='email'
                method={'["notEmpty","validEmail"]'}
                focusedClassName={'focusedBorder'}
                errorClassName={'errorBorder'}
                input={this.props.form.data.email}
                onChange={this.props.onChange}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                autoComplete={'off'}
                type='email'
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
                text='Sending link'
              />
              :
              <div className='buttonContainer'>
                <span>Send me link</span>
                <FaAngleRight size={'1.2em'} color={'white'} />
              </div>
            }
            </SmartButton>

            <div className='note'>No problem, just type in your email and we'll send you a reset link.</div>

          </div>

        </form>

      </FormWrapper>
    )
  }
}

export default hot(module)(FormHOC(Forgot))