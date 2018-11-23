import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'

import './footer.css'

class Footer extends Component {

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
              <div className='footer-contact-info'>Github: <a href="tel:3397880346" className='footer-contact-info-span'>DanMello</a></div>
            </div>
          </div>
        </div>

        {!!this.props.config.isMobile && <div className='footer-line'/>}

        <div className={!this.props.config.isMobile ? 'footer-links-container' : 'footer-links-container-mobile'}>
          <div className='footer-flex-break'>
            <Link to='/home' className='footer-link'>Home</Link>
            <Link to='/about' className='footer-link'>About</Link>
            <Link to='/contact' className='footer-link'>Contact</Link>
            <Link to='/account/signup' className='footer-link'>Sign&nbsp;up</Link>
            <Link to='/account/login' className='footer-link'>Log&nbsp;in</Link>
            <Link to='/account/forgot' className='footer-link'>Forgot&nbsp;Account</Link>
          </div>
          <div className={!this.props.config.isMobile ? 'footer-copyright-container' : 'footer-copyright-container-mobile'}>
            <span>&copy; 2018 Dan Mello</span>
            <Link to='/terms' className='footer-link-2'>Terms & Polices</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(Footer)