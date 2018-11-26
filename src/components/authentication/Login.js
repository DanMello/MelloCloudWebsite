import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaCloud, FaUser, FaAngleRight } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import Loader from '../partials/myloader'
import './form.css'

class Login extends Component {

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

          <div className='errorText'>{this.props.form.error}</div>

          <div className='inputWrapper'>

            <div className={'inputContainers'}>
              
              <SmartResponse
                className='errorText'
                input={this.props.form.data.email}
                emptyError='Email cannot be empty'
              />

              <label className={'formLabels'}>Email: </label>

              <SmartInput
                className={'formInputs'}
                property='email'
                method={'["notEmpty"]'}
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

            <div className={'inputContainers'}>

              <SmartResponse
                className='errorText'
                emptyError='Password cannot be empty.'
                input={this.props.form.data.password}
              />
      
              <label className={'formLabels'}>Password: </label>

              <SmartInput
                className={'formInputs'}
                property='password'
                method={'["notEmpty"]'}
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
                text='Logging in'
              />
              :
              <div className='buttonContainer'>
                <span>Log in</span>
                <FaUser size={'1.2em'} color={'white'} />
              </div>
            }
            </SmartButton>

          </div>

          <div className='forgotAccountContainer'>
            <Link className='forgotAccount' to='/forgot'>
              Forgot account?
            </Link>
          </div>

        </form>

        <div className='signupContainer'>
          <Link to='/account/signup' className='signupLink'>
            <span>Create account</span>
            <FaAngleRight size={'1.2em'} color={'rgb(0, 122, 255)'} />
          </Link>
        </div>

      </FormWrapper>
    )
  }
}

export default hot(module)(FormHOC(Login))