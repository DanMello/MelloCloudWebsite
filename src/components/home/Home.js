import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import './home.css'

class Home extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config}>

        <div className={!this.props.config.isMobile ? 'home-intro-container' : 'home-intro-container-mobile'}>

          <div className={!this.props.config.isMobile ? 'home-pic-container' : 'home-pic-container-mobile'}>
            <img className='home-my-pic' src='/assets/dan.jpeg' />
          </div>

          <div className={!this.props.config.isMobile ? 'home-paragraph-container' : 'home-paragraph-container-mobile'}>
            <p className='home-paragraph'> 
              Welcome to my website. My name is Dan Mello and I am a Front End Developer.
            </p>
            <p className='home-paragraph home-margin-top'>
              Here you can find some examples of my work, my web development notes, the latest version of my resume and a way to get in touch. Also, check out my open source projects on GitHub.
            </p>
          </div>

        </div>

        <div className={!this.props.config.isMobile ? 'home-projects-container' : 'home-projects-container-mobile'}> 
          
          <h1 className='home-project-heading'>Projects</h1>
          
          <div className='home-line'/>
          
          <div className='home-project-box' id='react-simpler-forms'>
            <h2 className='home-project-name'>react-simpler-forms</h2>
            <p className={!this.props.config.isMobile ? 'home-project-paragraph' : 'home-project-paragraph-mobile'}>
              React Higher Order component that manages all of your forms state along with other components 
              that make it easy to create, validate, perform search queries, and submit single or multi-step forms. 
            </p>
            <ul className='home-ul'>
              {!this.props.config.isMobile ?
                <li className='home-li'>View <Link className='footer-link' to='/react-simpler-forms'>live demo</Link></li>
                :
                <li className='home-li'>Live demo available on desktop</li>
              }
              <li className='home-li'>View react-simpler-forms on <a className='footer-link' href='https://github.com/DanMello/react-simpler-forms'>GitHub</a></li>
              <li className='home-li'>View react-simpler-forms on <a className='footer-link' href='https://www.npmjs.com/package/react-simpler-forms'>npm</a></li>
            </ul>
          </div>

          <div className='home-line'/>

          <div className='home-project-box home-margin-top' id='react-video-player'>
            <h2 className='home-project-name'>react-video-player</h2>
            <p className={!this.props.config.isMobile ? 'home-project-paragraph' : 'home-project-paragraph-mobile'}>A React component for easily playing videos on mobile and desktop devices. Comes with video controls and customization for audio slider and video seekbar to match the theme of your website.</p>
            <ul className='home-ul'>
              <li className='home-li'>View <Link className='footer-link' to='/react-video-player'>live demo</Link></li>
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