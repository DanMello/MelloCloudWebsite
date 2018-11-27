import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './settings.css'

class Settings extends Component {

  render() {

    const user = this.props.user.profile

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>
        <div className='settings-container'>
          <h1 className='settings-heading'>My Account</h1>
          <div className='settings-loop-container'>   
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>First name:</div>
                <div className='settings-item-value'>{user['first_name']}</div>
              </div>
              <div className='settings-item-edit-container'>
                <Link to='/settings/firstname' className='settings-item-edit'>Edit</Link>
                <FaAngleRight className='settings-item-edit-arrow'/>
              </div>
            </div>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>Last name:</div>
                <div className='settings-item-value'>{user['last_name']}</div>
              </div>
              <div className='settings-item-edit-container'>
                <div className='settings-item-edit'>Edit</div>
                <FaAngleRight className='settings-item-edit-arrow'/>
              </div>
            </div>
            <div className='settings-change-setting-container'>
              <div>
                <div className='settings-item-container'>
                  <div className='settings-item-heading'>Email:</div>
                  <div className='settings-item-value'>{user['email']}</div>
                </div>
                {!user.isVerified &&
                  <div>
                    <div className='settings-emailnotverified'>Your email is not verified, we sent you a verification email with further instructions.</div>
                    <div className='settings-email-link'>Need another link</div>
                  </div>
                }
              </div>
              <div className='settings-item-edit-container'>
                <div className='settings-item-edit'>Edit</div>
                <FaAngleRight className='settings-item-edit-arrow'/>
              </div>
            </div>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>Password:</div>
                <div className='settings-item-value'>********</div>
              </div>
              <div className='settings-item-edit-container'>
                <div className='settings-item-edit'>Edit</div>
                <FaAngleRight className='settings-item-edit-arrow'/>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

export default hot(module)(Settings)
