import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaAngleLeft, FaCloud, FaPen } from 'react-icons/fa'
import { FormHOC, SmartResponse, SmartInput, SmartButton } from '../../HOC/melloForms2'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import Loader from '../partials/myloader'
import { EditList } from '../../data/Edit'

import './edit.css'

class Edit extends Component {

  componentDidMount() {

    this.props.dispatch({type: 'FORM_RESET'})

    this.props.dispatch({
      type: 'FORM_ADD_TOKEN',
      payload: {
        token: this.props.user.profile.token,
        property: this.props.location.state.property,
        heading: this.props.location.state.heading
      }
    })
  }

  render() {

    const isMobile = this.props.config.isMobile
    const { inputs, heading } = this.props.location.state

    return (
      <FormWrapper isMobile={isMobile}>

        <div className='edit-mainContainer'>
          
          <div className='contact-heading-container'>
            <Link to='/settings' className='contact-backbutton-container'>
              <FaAngleLeft 
                className='contact-backbutton'
              />
            </Link>
            <h1 className='contact-heading'>Account</h1>
            <div className='contact-button' />
          </div>
            
          <div className='edit-heading-container'>
            <h2 className='edit-heading'>Change {heading}</h2>
          </div>

          <div className='edit-note'>
            If you want to change your {heading} you can do so below.
          </div>

          {inputs.map(item => {

            return (

              <div className='edit-input-container' key={item.property}>

                <SmartResponse
                  input={this.props.form.data[item.property]}
                  className='errorText'
                  successClassName='successText'
                  matchError={!!item.response.matchError && this.props.matchError}
                  maxCharatersError={item.response.maxCharatersError}
                  emptyError={item.response.emptyError}
                  validationError={item.response.validationError}
                />

                <label className='edit-label'>New {item.title}:</label>

                <SmartInput
                  input={this.props.form.data[item.property]}
                  property={item.property}
                  className={'edit-input'}
                  method={item.method}
                  focusedClassName={'edit-focus-border'}
                  errorClassName={'edit-error-border'}
                  onChange={this.props.onChange}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                  placeholder={!!item.placeholder && this.props.user.profile[item.property]}
                  autoComplete={'off'}
                  type={item.type}
                />

              </div>
            )
          })
        }

        <div className='edit-button-container'>
          <SmartButton
            type='submit'
            className={'edit-button'}
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
              text='Saving changes'
            />
            :
            <div className='buttonContainer'>
              <span>Save changes</span>
              <FaPen size={'1.2em'} color={'white'} />
            </div>
          }
          </SmartButton>
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

export default hot(module)(FormHOC(Edit))