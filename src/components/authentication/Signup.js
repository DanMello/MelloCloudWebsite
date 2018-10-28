import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import { FaCloud } from 'react-icons/fa'
import { checkEmail, signup } from '../../actions/formActions'
import Name from './Name'
import Email from './Email'
import Password from './Password'
import './form.css'

class SignupForm extends Component {

  componentDidMount() {

    this.props.dispatch({type: 'FORM_RESET'})
  }

  render() {

    let steps = [
      <Name
        form={this.props.form}
        dispatch={this.props.dispatch}
        required={['firstName', 'lastName']}
       />,
      <Email
        form={this.props.form}
        dispatch={this.props.dispatch}
        required={['email']}
        delayErrors={[
          { input: 'email', time: 1400 },
        ]}
        queryInputs={[
          { input: 'email', delayAfterValidated: 350, method: checkEmail }
        ]}
      />,
      <Password
        form={this.props.form}
        dispatch={this.props.dispatch}
        required={['password', 'passwordConfirmation']}
        delayErrors={[
          { input: 'password', time: 1400 },
          { input: 'passwordConfirmation', time: 1400 }
        ]}
        matchRequired={{ 
          error: 'Passwords do not match.',
          inputs: ['password', 'passwordConfirmation']
        }}
        onSubmit={signup}
       />
    ]

    return (

      <div className='formWrapper' style={this.props.config.isMobile ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}}>

        <div className='formSubwrapper' style={this.props.config.isMobile ? {width: '95%'} : {width: '450px'}}>

          <form className={'formContainer'} style={{...this.props.config.isMobile && {height: '80vh'}}}>

            <Link to='/' className='titleContainer'>
              
              <FaCloud className='cloudIcon' />

              <h1 className='title'>mello cloud</h1>

            </Link>

            <div className='errorText'>{this.props.form.error}</div>

            {steps[this.props.form.step]}

          </form>

        </div>

      </div>
    )
  }
}

export default hot(module)(SignupForm)