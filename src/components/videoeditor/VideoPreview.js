import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import classNames from 'classnames'
import MainContainer from './MainContainer'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import Video from './Video'

class VideoPreview extends Component {

  constructor() {

    super()

    this.state = {
      videoObj: {}
    }

    this._video = React.createRef()
  }

  componentDidMount() {

    this.setState({
      videoObj: this.props.location.state.videoObj
    })
  }

  render() {

    return (
      <MainContainer isMobile={this.props.config.isMobile} backbutton={`/videoeditor/${this.state.videoObj.project}`}>
        
        <Video isMobile={this.props.config.isMobile} videoRef={this._video} videoObj={this.state.videoObj} />

      </MainContainer>
    )
  }
}

export default hot(module)(VideoPreview)