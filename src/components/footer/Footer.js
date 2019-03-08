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

        <div className={!this.props.config.isMobile ? 'footer-links-container' : 'footer-links-container-mobile'}>
            <div className='footer-flex-break'>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/notes' className='footer-link'>Notes</Link>
              <a href="https://github.com/DanMello" className='footer-link'>GitHub</a>
              <Link to='/contact' className='footer-link'>Contact</Link>
              <Link to='/react-video-player' className='footer-link'>react-video-player</Link>
            </div>

          <div className={!this.props.config.isMobile ? 'footer-copyright-container' : 'footer-copyright-container-mobile'}>
            <span>&copy; 2019 Dan Mello</span>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(Footer)

              // <a href="/assets/DansResume.pdf" className='footer-link'>Resume</a>
              // <Link to='/redux-smart-forms' className='footer-link'>redux-smart-forms</Link>
// {!!this.props.config.isMobile && <div className='footer-line'/>}
// <div className='footer-contact-container'>
//   <h1 className='footer-contact'>Contact</h1>
//   <div className='footer-contact-info-container'>
//     <div>
//       <div className='footer-image-container'>
//         <img src='/assets/me.jpeg' className='footer-image'/>
//         <div className='footer-contact-name'>Dan Mello</div>
//       </div>
//       <div className='footer-contact-info'>Email: <a href="mailto:jdanmello@gmail.com" className='footer-contact-info-span'>jdanmello@gmail.com</a></div>
//       <div className='footer-contact-info'>Cell: <a href="tel:3397880346" className='footer-contact-info-span'>(339) 788-0346</a></div>
//       <div className='footer-contact-info'>Github: <a href="https://github.com/DanMello" className='footer-contact-info-span'>DanMello</a></div>
//       <div className='footer-contact-info'>Resume: <a href="/assets/DansResume.pdf" className='footer-contact-info-span'>Resume</a></div>
//     </div>
//   </div>
// </div>