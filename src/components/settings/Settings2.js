import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import FormWrapper from '../contentwrapper/FormWrapper'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './settings.css'
import './settings2.css'

class Settings extends Component {

  render() {

    const user = this.props.user.profile
    const isMobile = this.props.config.isMobile

    return (
      <FormWrapper isMobile={isMobile}>
        <div class='settingsM-mainContainer'>
          <div class='settingsM-heading-container'>
            <h1 class='settingsM-heading'>Account</h1>
          </div>
          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>First name:</div>
                <div className='settings-item-value'>{user['first_name']}</div>
              </div>
              <Link to='/settings/firstname' className='settings-item-edit'>Edit</Link>
            </div>
          </div>
          <div className='settings-items-Maincontainer'>
            <div className='settings-change-setting-container'>
              <div className='settings-item-container'>
                <div className='settings-item-heading'>Last name:</div>
                <div className='settings-item-value'>{user['last_name']}</div>
              </div>
              <Link to='/settings/firstname' className='settings-item-edit'>Edit</Link>
            </div>
          </div>
        </div>
      </FormWrapper>
    )
  }
}

export default hot(module)(Settings)
