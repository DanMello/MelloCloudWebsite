import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import ReactVideoPlayer from 'react-vp'

import './react-video-demo.css' 

class ReactVideoPlayerDemo extends Component {

  render() {
    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>
        <div className={!this.props.config.isMobile ? 'react-video-main-container' : 'react-video-main-container-mobile'}>
          <ReactVideoPlayer
            videoPath='/assets/videos/clip.mp4'
            videoThumbnail='/assets/videos/thumbnail.png'
            className={'react-video-player-container'}
            mobileClassName={'react-video-player-container-mobile'}
            isMobile={this.props.config.isMobile}
          />
          <div className={this.props.config.isMobile && 'react-video-sub-container-mobile'}>
            <h1 className={!this.props.config.isMobile ? 'react-video-heading' : 'react-video-heading-mobile'}>React-Video-Player Demo</h1>
            <div className='react-video-version'>Version 1.2.2</div>
            <div className='react-video-link-container'>View React-Video-Player on <a className='footer-link' href='https://github.com/DanMello/react-video-player'>GitHub</a></div>
            <div className='react-video-link-container'>View React-Video-Player on <a className='footer-link' href='https://www.npmjs.com/package/react-vp'>npm</a></div>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

export default hot(module)(ReactVideoPlayerDemo)