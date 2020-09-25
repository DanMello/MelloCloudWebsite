import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'

import './footer.css'

class Footer extends Component {

  render() {

    let isMobile = this.props.isMobile

    return (
      <div className={!isMobile ? 'footer-container' : 'footer-container-mobile'}>

        <div className={!isMobile ? 'footer-links-container' : 'footer-links-container-mobile'}>
            <div className='footer-flex-break'>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/notes' className='footer-link'>Notes</Link>
              {/* <a href="/assets/pdf/DansResume.pdf" className='footer-link'>Resume</a> */}
              <a href="https://github.com/DanMello" className='footer-link'>GitHub</a>
              <a href="https://www.linkedin.com/in/jdanmello/" className='footer-link'>LinkedIn</a>
              <Link to='/contact' className='footer-link'>Contact</Link>
            </div>

          <div className={!isMobile ? 'footer-copyright-container' : 'footer-copyright-container-mobile'}>
            <span>&copy; 2020 Dan Mello</span>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(Footer)