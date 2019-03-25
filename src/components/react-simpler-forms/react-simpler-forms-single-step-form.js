import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Input, Response, Button } from 'react-simpler-forms'

class SingleStepForm extends Component {

  render() {

    let formProps = this.props.formProps

    return <div>

      <div className='react-simpler-forms-input-container'>

        <Response 
          {...formProps}
          errorClassName='react-simpler-forms-response-error'
          for='first_name'
        />

        <label className='react-simpler-forms-label'>Name: </label>

        <Input
          {...formProps}
          name='first_name'
          className='react-simple-forms-input'
          focusedClassName='react-simple-forms-input-focused'
          errorClassName='react-simple-forms-input-error'
          autoComplete={'off'}
          validators={[
            {method: 'notEmpty', error: 'Name cannot be empty.'},
            {method: 'onlyLetters', error: 'Name can only contain letters.'},
            {method: 'maxCharaters', error: 'Name can only contain 35 characters.'}
          ]}
        />

      </div>

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

      <div className='react-simpler-forms-input-container'>

        <Response 
          {...formProps} 
          for={'state'}
          errorClassName={'react-simpler-forms-response-error'}
          selectError='Please a select a state you like.'
        />

        <label className='react-simpler-forms-label'>Select a State you like:</label>

        <Input
          {...formProps}
          required
          name={'state'}
          type={'select'}
          className={'react-simple-forms-select'}
          options={[
            {value: '', text: 'Please select an option'},
            {value: 'MA', text: 'Massachusetts'},
            {value: 'FL', text: 'Florida'},
            {value: 'CA', text: 'California'}
          ]}
          />

      </div>

      <div className='react-simpler-forms-input-container'>

        <div className='react-simpler-forms-label' style={{marginBottom: '10px'}}>What's your favorite color</div>

        <Response {...formProps} for={'favorite_color'} errorClassName={'react-simpler-forms-response-error'} selectError='Please select a color.'/>

        <div>
          <Input {...formProps} style={{margin: '10px'}} name={'favorite_color'} value='red' type='radio' required />
          <label className='react-simpler-forms-label'>Red</label>
        </div>

        <div>
          <Input {...formProps} style={{margin: '10px'}} name={'favorite_color'} value='green' type='radio'/>
          <label className='react-simpler-forms-label'>Green</label>
        </div>

        <div>
          <Input {...formProps} style={{margin: '10px'}} name={'favorite_color'} value='blue' type='radio'/>
          <label className='react-simpler-forms-label'>Blue</label>
        </div>

      </div>

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

      <div>

        <div>
          <Input {...formProps} name='question' value='I agree that react-simpler-forms is cool.' type='checkbox' />
          <label style={{marginLeft: '10px', marginTop: '10px', display: 'inline-block'}}>By checking you agree that react-simpler-forms is cool.</label>
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
    </div>
  }
}

export default hot(module)(SingleStepForm)