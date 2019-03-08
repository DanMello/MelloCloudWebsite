import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import queryString from 'query-string'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { userUpdate } from '../../actions/userActions'
import './home.css'

class Home extends Component {

  constructor() {

    super ()

    this.state = {
      message: null,
      error: null
    }
  }

  componentDidMount() {

    const values = queryString.parse(this.props.location.search)

    if (values.emailVerified === 'true') {

      this.props.dispatch(userUpdate({token: this.props.user.profile.token}))

      this.setState({
        message: 'Thank you for verifying your email.'
      })
    }

    if (values.emailVerifiedError) {

      this.setState({
        error: values.emailVerifiedError
      })
    }
  }

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>

        {!!this.state.message && <div className='home-successtext'>{this.state.message}</div>}
        {!!this.state.error && <div className='home-errortext'>{this.state.error}</div>}
        {this.props.location.state && this.props.location.state.redirectMessage && <div className='home-successtext'>{this.props.location.state.redirectMessage}</div>}

        <div className={!this.props.config.isMobile ? 'home-intro-container' : 'home-intro-container-mobile'}>

          <div className={!this.props.config.isMobile ? 'home-pic-container' : 'home-pic-container-mobile'}>
            <img className='home-my-pic' src='/assets/dan.jpeg' />
          </div>

          <div className={!this.props.config.isMobile ? 'home-paragraph-container' : 'home-paragraph-container-mobile'}>
            <p className='home-paragraph'> 
              Welcome to my website. My name is Dan Mello and I am a Front End Developer.
            </p>
            <p className='home-paragraph home-margin-top'> 
              Here you can find some examples of my work, the latest version of my resume and a way to get in touch. Also, check out my open source projects on GitHub.
            </p>
          </div>

        </div>

        <div className={!this.props.config.isMobile ? 'home-projects-container' : 'home-projects-container-mobile'}> 
          
          <h1 className='home-project-heading'>Projects</h1>
          
          <div className='home-line'/>
          
          <div className='home-project-box'>
            <h2 className='home-project-name'>react-video-player</h2>
            <p className={!this.props.config.isMobile ? 'home-project-paragraph' : 'home-project-paragraph-mobile'}>A React component for easily playing videos on mobile and desktop devices. Comes with video controls and customization for audio slider and video seekbar to match the theme of your website.</p>
            <ul className='home-ul'>
              <li className='home-li'>View <a className='footer-link' href='/react-video-player'>live demo</a></li>
              <li className='home-li'>View react-video-player on <a className='footer-link' href='https://github.com/DanMello/react-video-player'>GitHub</a></li>
              <li className='home-li'>View react-video-player on <a className='footer-link' href='https://www.npmjs.com/package/react-vp'>npm</a></li>
            </ul>
          </div>

        </div>
      </ContentWrapper>
    )
  }
}

export default hot(module)(Home)

// Here you can find some examples of my work, the latest version of my resume and a way to get in touch. Also, check out my open source projects at GitHub


          // <h1 className='home-main-heading'>mello cloud IOS</h1>

          // <h2 className='home-sub-heading'>Coming 2019</h2>

          // <p className='home-paragraph'>Automate your small business with your voice.</p>

          // <div className='home-image-container'>
          //   <div className='home-image-box'>
          //     <img src='/assets/app.png' className='home-app-image'/>
          //   </div>
          // </div>
