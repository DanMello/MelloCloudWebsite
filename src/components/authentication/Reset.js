import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaCloud, FaAngleRight, FaLock } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import './form.css'

class Reset extends Component {

  componentDidMount() {

    this.props.dispatch({type: 'FORM_RESET'})

    if (this.props.match.params.token) {

      this.props.dispatch({
        type: 'FORM_ADD_TOKEN',
        payload: {
          token: this.props.match.params.token
        }
      })
    }
  }

  render() {

    return (

      <FormWrapper isMobile={this.props.config.isMobile}>

        <form className={'formContainer'} style={{...this.props.config.isMobile && {height: '80vh'}}}>

          <Link to='/' className='titleContainer'>
            
            <FaCloud className='cloudIcon' />

            <h1 className='title'>mello cloud</h1>

          </Link>

          <div className='errorText'>{this.props.form.error}</div>

          <div className='inputWrapper'>

            <div className={'heading'}>Create a new password.</div>

            <div className={'inputContainers'}>
              
              <SmartResponse
                input={this.props.form.data.password}
                className='errorText'
                matchError={this.props.matchError}
                emptyError='Password cannot be empty'
                validationError='Password does not contain at least 8 characters and 1 number.'
              />

              <label className={'formLabels'}>New password: </label>

              <SmartInput
                className={'formInputs'}
                property='password'
                method={'["notEmpty","validPassword"]'}
                focusedClassName={'focusedBorder'}
                errorClassName={'errorBorder'}
                input={this.props.form.data.password}
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

              <label className={'formLabels'}>Repeat New password: </label>

              <SmartInput
                className={'formInputs'}
                property='passwordConfirmation'
                method={'["notEmpty","validPassword"]'}
                focusedClassName={'focusedBorder'}
                errorClassName={'errorBorder'}
                input={this.props.form.data.passwordConfirmation}
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
                text='Changing password'
              />
              :
              <div className='buttonContainer'>
                <span>Change password</span>
                <FaLock size={'1.2em'} color={'white'} />
              </div>
            }
            </SmartButton>

            <p className={'note'}>Password must contain at least 8 characters and 1 number.</p>

          </div>

        </form>

      </FormWrapper>
    )
  }
}

export default hot(module)(FormHOC(Reset))