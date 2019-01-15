import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import MainContainer from './MainContainer'
import { getVideos } from '../../actions/videoActions'
import { Link } from 'react-router-dom'

class VideoProject extends Component {

  componentDidMount() {

    const projectName = this.props.match.params.projectname
    const token = this.props.user.profile.token

    this.props.dispatch(getVideos(token, projectName))
  }

  render() {

    return (
      <MainContainer isMobile={this.props.config.isMobile} backbutton='/videoeditor'>
          
          <div className='video-videos-heading'>Videos</div>

          <div className='video-subcontainer-row'>

            {this.props.video.videos.map(videoObj => {

              return (
                <div className={'video-name-container'} key={videoObj.video}>
                  <Link 
                    className='video-name-subcontainer' 
                    to={{
                      pathname: `/videoeditor/${videoObj.project}/video`,
                      state: {
                        videoObj
                      }
                    }}
                  >
                    <img src={videoObj.video_thumbnail} className='video-image-thumbnail'/>
                    <div className='video-thumbnail-text'>
                      <div>{videoObj.video}</div>
                    </div>
                  </Link>
                </div>
              )
            })}

          </div>

      </MainContainer>
    )
  }
}

export default hot(module)(VideoProject)