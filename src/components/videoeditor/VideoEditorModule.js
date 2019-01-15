import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import VideoProjects from './VideoProjects'
import { getProjects } from '../../actions/videoActions'

class VideoEditorModule extends Component {

  componentDidMount() {

    this.props.dispatch(getProjects(this.props.token))
  }

  render() {

    const projects = this.props.videoState.projects

    return (
        
      <div className='video-subcontainer'>
          
        {projects.length > 0 ?
          <VideoProjects projects={projects} />
          :
          <p>You have not started any projects yet</p>
        }

      </div>
    )
  }
}

export default hot(module)(VideoEditorModule)