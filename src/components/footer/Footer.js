import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import { userLogout } from '../../actions/userActions'

import './footer.css'

class Footer extends Component {

  constructor() {

    super()

    this.logOut = this.logOut.bind(this)
  }

  logOut() {

    this.props.dispatch(userLogout())
  }

  render() {

    return (
      <div className={!this.props.config.isMobile ? 'footer-container' : 'footer-container-mobile'}>
        
        <div className='footer-contact-container'>
          <h1 className='footer-contact'>Contact</h1>
          <div className='footer-contact-info-container'>
            <div>
              <div className='footer-image-container'>
                <img src='/assets/me.jpeg' className='footer-image'/>
                <div className='footer-contact-name'>Dan Mello</div>
              </div>
              <div className='footer-contact-info'>Email: <a href="mailto:jdanmello@gmail.com" className='footer-contact-info-span'>jdanmello@gmail.com</a></div>
              <div className='footer-contact-info'>Cell: <a href="tel:3397880346" className='footer-contact-info-span'>(339) 788-0346</a></div>
              <div className='footer-contact-info'>Github: <a href="https://github.com/DanMello" className='footer-contact-info-span'>DanMello</a></div>
              <div className='footer-contact-info'>Resume: <a href="/assets/DansResume.pdf" className='footer-contact-info-span'>Resume</a></div>
            </div>
          </div>
        </div>

        {!!this.props.config.isMobile && <div className='footer-line'/>}

        <div className={!this.props.config.isMobile ? 'footer-links-container' : 'footer-links-container-mobile'}>
          {!this.props.user.loggedIn ?
            <div className='footer-flex-break'>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/about' className='footer-link'>About</Link>
              <Link to='/contact' className='footer-link'>Contact</Link>
              <Link to='/account/signup' className='footer-link'>Sign&nbsp;up</Link>
              <Link to='/account/login' className='footer-link'>Log&nbsp;in</Link>
              <Link to='/account/forgot' className='footer-link'>Forgot&nbsp;Account</Link>
              <Link to='/terms' className='footer-link'>Terms&nbsp;of&nbsp;Use</Link>
              <Link to='/privacy' className='footer-link'>Privacy&nbsp;Policy</Link>
            </div>
            :
            <div className='footer-flex-break'>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/about' className='footer-link'>About</Link>
              <Link to='/contact' className='footer-link'>Contact</Link>
              <Link to='/settings' className='footer-link'>Manage&nbsp;account</Link>
              <Link to='/terms' className='footer-link'>Terms&nbsp;of&nbsp;Use</Link>
              <Link to='/privacy' className='footer-link'>Privacy&nbsp;Policy</Link>
              <div onClick={this.logOut} className='footer-link-button'>Sign&nbsp;out</div>
            </div>
          }
          <div className={!this.props.config.isMobile ? 'footer-copyright-container' : 'footer-copyright-container-mobile'}>
            <span>&copy; 2019 Dan Mello</span>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(Footer)