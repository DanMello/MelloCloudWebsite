import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaAngleRight, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { userUpdate } from '../../actions/userActions'
import { propertyList } from '../../data/Edit'
import Loader from '../partials/myloader'
import { truncate } from '../../api/strings'

import './settings.css'

class Settings extends Component {

  componentDidMount() {

    this.props.dispatch(userUpdate({token: this.props.user.profile.token}))
  }

  render() {

    const user = this.props.user.profile
    const isMobile = this.props.config.isMobile

    return (
      <FormWrapper isMobile={isMobile}>
        <div className='settings-mainContainer'>
          <div className='contact-heading-container'>
            <div className='contact-backbutton-container'/>
            <h1 className='contact-heading'>Account</h1>
            <div className='contact-button'>
              {!!this.props.user.loading &&
                <Loader width={'25px'} height={'25px'} color='rgb(0,125,255)' containerClass={'contact-loader-container'}/>
              }
            </div>
          </div>
          
          {!!this.props.location.state && this.props.location.state.redirectMessage && !this.props.user.error && <div className='contact-messagecontainer'>{this.props.location.state.redirectMessage}</div>}

          {!!this.props.user.error && <div className='contact-errorContainer'>{this.props.user.error}</div>}

          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>First name:</div>
                <div className='settings-item-value'>{truncate(user['first_name'])}</div>
              </div>
              <Link
                className='settings-item-edit'
                to={{
                  pathname: '/settings/edit',
                  state: propertyList.firstName
                }}
              >
              Edit
              </Link>
            </div>
          </div>
          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>Last name:</div>
                <div className='settings-item-value'>{truncate(user['last_name'])}</div>
              </div>
              <Link
                className='settings-item-edit'
                to={{
                  pathname: '/settings/edit',
                  state: propertyList.lastName
                }}
              >
              Edit
              </Link>
            </div>
          </div>
          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div>
                <div className='settings-item-container'>
                  <div className='settings-item-heading'>Email:</div>
                  <div className='settings-item-value'>{truncate(user['email'])}</div>
                </div>
                {!user.isVerified &&
                  <div>
                    <div className='settings-emailnotverified'>Your email is not verified, we sent you a verification email with further instructions.</div>
                    <div className='settings-email-link'>Need another link</div>
                  </div>
                }
              </div>
              <Link
                className='settings-item-edit'
                to={{
                  pathname: '/settings/edit',
                  state: propertyList.email
                }}
              >
              Edit
              </Link>
            </div>
          </div>
          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>Password:</div>
                <div className='settings-item-value'>*******</div>
              </div>
              <Link
                className='settings-item-edit'
                to={{
                  pathname: '/settings/edit',
                  state: propertyList.password
                }}
              >
              Edit
              </Link>
            </div>
          </div>
          <div className='settings-button-container'>
            <Link to='/' className='settings-button'>
              Done
            </Link>
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

export default hot(module)(Settings)
