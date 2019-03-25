import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Input, Response, Button } from 'react-simpler-forms'

class Step1 extends Component {

  render() {

    let formProps = this.props.formProps

    return <div>

      <h1 className='react-simpler-forms-step-heading'>What's your name?</h1>
      
      <div>

        <div className='react-simpler-forms-input-container'>

          <Response
            {...formProps}
            errorClassName='react-simpler-forms-response-error'
            for='first_name'
          />

          <label className='react-simpler-forms-label'>First Name: </label>

          <Input
            {...formProps}
            name='first_name'
            className='react-simple-forms-input'
            focusedClassName='react-simple-forms-input-focused'
            errorClassName='react-simple-forms-input-error'
            autoComplete={'off'}
            validators={[
              {method: 'notEmpty', error: 'First name cannot be empty.'},
              {method: 'onlyLetters', error: 'First name can only contain letters.'},
              {method: 'maxCharaters', error: 'First name can only contain 35 characters.'}
            ]}
          />

        </div>

        <div className='react-simpler-forms-input-container'>

          <Response
            {...formProps}
            errorClassName='react-simpler-forms-response-error'
            for='last_name'
          />

          <label className='react-simpler-forms-label'>Last Name: </label>

          <Input
            {...formProps}
            name='last_name'
            className='react-simple-forms-input'
            focusedClassName='react-simple-forms-input-focused'
            errorClassName='react-simple-forms-input-error'
            autoComplete={'off'}
            validators={[
              {method: 'notEmpty', error: 'Last name cannot be empty.'},
              {method: 'onlyLetters', error: 'Last name can only contain letters.'},
              {method: 'maxCharaters', error: 'Last name can only contain 35 characters.'}
            ]}
          />

        </div>

      </div>

      <Button
        {...formProps}
        disabled={this.props.disabledState ? this.props.disabled : false}
        disabledBasedOnState={true}
        className='react-simpler-forms-button'
        disabledClassName='react-simpler-forms-button-disabled'
        type='nextStep'
        >
        Next
      </Button>
    </div>    
  }
}

class Step2 extends Component {

  render() {

    let formProps = this.props.formProps

    return <div>

      <h1 className='react-simpler-forms-step-heading'>What's your email?</h1>
      
      <div>

        <div className='react-simpler-forms-input-container'>

          <Response 
            {...formProps}
            errorClassName='react-simpler-forms-response-error'
            successClassName='react-simpler-forms-response-success'
            for='email'
          />

          <label className='react-simpler-forms-label'>Email:</label>

          <Input
            {...formProps}
            name='email'
            className='react-simple-forms-input'
            focusedClassName='react-simple-forms-input-focused'
            errorClassName='react-simple-forms-input-error'
            delayError={1400}
            query={this.props.config.url + '/account/checkemail'}
            autoComplete={'off'}
            validators={[
              {method: 'notEmpty', error: 'Email cannot be empty.'},
              {method: 'validEmail', error: 'Please enter a valid email.'}
            ]}
          />

          <div className='react-simpler-forms-note'>psst jdanmello@gmail.com is not available</div>

        </div>

      </div>

      <Button
        {...formProps}
        disabled={this.props.disabledState ? this.props.disabled : false}
        disabledBasedOnState={true}
        className='react-simpler-forms-button'
        disabledClassName='react-simpler-forms-button-disabled'
        type='nextStep'
        >
        Next
      </Button>

      <Button
        {...formProps}
        className='react-simpler-forms-button-previous'
        type='prevStep'
        >
        Previous
      </Button>
    </div>    
  }
}

class Step3 extends Component {

  render() {

    let formProps = this.props.formProps

    return <div>

      <h1 className='react-simpler-forms-step-heading'>Enter a random password.</h1>
      
      <div>

      <div className='react-simpler-forms-input-container'>

        <Response 
          {...formProps}
          errorClassName='react-simpler-forms-response-error'
          for='password'
          matchError={{
            matchName: 'password',
            error: 'Password do not match.'
          }}
        />

        <label className='react-simpler-forms-label'>Password:</label>

        <Input
          {...formProps}
          name='password'
          match='password'
          className='react-simple-forms-input'
          focusedClassName='react-simple-forms-input-focused'
          errorClassName='react-simple-forms-input-error'
          delayError={1400}
          autoComplete={'off'}
          validators={[
            {method: 'notEmpty', error: 'Password cannot be empty.'},
            {method: 'validPassword', error: 'Password must contain at least 8 character and 1 number.'}
          ]}
          type='password'
        />

      </div>

      <div className='react-simpler-forms-input-container'>

        <Response 
          {...formProps}
          errorClassName='react-simpler-forms-response-error'
          for='passwordRepeat'
        />

        <label className='react-simpler-forms-label'>Password Repeat:</label>

        <Input
          {...formProps}
          name='passwordRepeat'
          match='password'
          className='react-simple-forms-input'
          focusedClassName='react-simple-forms-input-focused'
          errorClassName='react-simple-forms-input-error'
          delayError={1400}
          autoComplete={'off'}
          validators={[
            {method: 'notEmpty', error: 'Password cannot be empty.'},
            {method: 'validPassword', error: 'Password must contain at least 8 character and 1 number.'}
          ]}
          type='password'
        />

        <div className='react-simpler-forms-note'>Password must contain at least 8 characters and 1 number.</div>

      </div>

      </div>

      <Button
        {...formProps}
        disabled={this.props.disabledState ? this.props.disabled : false}
        disabledBasedOnState={true}
        className='react-simpler-forms-button'
        disabledClassName='react-simpler-forms-button-disabled'
        url={this.props.config.url + '/thankyou'}
        type='submit'
        >
        Submit Example Form
      </Button>

      <Button
        {...formProps}
        className='react-simpler-forms-button-previous'
        type='prevStep'
        >
        Previous
      </Button>
    </div>    
  }
}

class MultiStep extends Component {

  render() {

    let formProps = this.props.formProps

    let steps = [
      <Step1 formProps={formProps} disabled={this.props.disabled} disabledState={this.props.disabledState} />,
      <Step2 formProps={formProps} disabled={this.props.disabled} disabledState={this.props.disabledState} config={this.props.config}/>,
      <Step3 formProps={formProps} disabled={this.props.disabled} disabledState={this.props.disabledState} config={this.props.config}/>
    ]

    return <div style={{marginTop: '30px'}}> 
      {steps[formProps.form.step]}
    </div>
  }
}

export default hot(module)(MultiStep)