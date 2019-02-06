import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { FaPlay, FaPause } from 'react-icons/fa'
import './progress-bar.css'

class VideoSeekbar extends Component {

  constructor() {

    super()

    this.state = {
      x: 0,
      offset: 0,
      loadedPercentage: 0
    }

    this.startEvent = this.startEvent.bind(this)
    this.moveEvent = this.moveEvent.bind(this)
    this.endEvent = this.endEvent.bind(this)
    this.seekToPosition = this.seekToPosition.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {

    let seekbarParent = ReactDOM.findDOMNode(this)
    let offset = 0

    //the container for the video player must have position relative
    while (seekbarParent.tagName !== 'BODY') {

      offset += seekbarParent.offsetLeft
      seekbarParent = seekbarParent.parentElement
    }

    if (offset !== this.state.offset) {

      this.setState({
        offset: offset
      })
    }

    if (prevProps.loadedPercentage !== this.props.loadedPercentage) {

      this.setState({
        loadedPercentage: this.props.loadedPercentage
      })
    }

    if (prevProps.positionLeft !== this.props.positionLeft) {

      this.setState({
        x: this.props.positionLeft
      })
    }
  }

  startEvent(e) {
    
    if (this.props.hide || this.props.loading) return

    e.preventDefault()

    this.props.seeking()

    if (e.type === 'touchstart') {

      document.ontouchmove = this.moveEvent
      document.ontouchend = this.endEvent

    } else {

      document.onmousemove = this.moveEvent
      document.onmouseup = this.endEvent
    }
  }

  moveEvent(e) {

    e.preventDefault()

    const progressbarwidth = this.props.progressbar.current.offsetWidth

    let position

    if (e.type === 'touchmove') {

      position = e.touches[0].pageX - this.state.offset

    } else {

      position = e.pageX - this.state.offset
    }

    if (position < 0) {

      position = 0

    } else if (position > progressbarwidth) {

      position = progressbarwidth
    }

    const percentage = (position / progressbarwidth)
    const videoTime = this.props.videoref.current.duration * percentage

    this.props.videoref.current.currentTime = videoTime

    this.setState({
      x: position
    })
  }

  endEvent(e) {

    e.preventDefault()

    this.props.seeked()

    if (e.type === 'touchend') {

      document.ontouchmove = null
      document.ontouchend = null

    } else {

      document.onmousemove = null
      document.onmouseup = null
    }
  }

  seekToPosition(e) {

    const progressbarwidth = this.props.progressbar.current.offsetWidth

    let position = e.pageX - this.state.offset

    if (position < 0) {

      position = 0

    } else if (position > progressbarwidth) {

      position = progressbarwidth
    }

    const percentage = (position / progressbarwidth)
    const videoTime = this.props.videoref.current.duration * percentage

    this.props.videoref.current.currentTime = videoTime

    this.setState({
      x: position
    })
  }

  render() {

    return (

      <div className='progress-bar' ref={this.props.progressbar} onClick={!this.props.isMobile ? this.seekToPosition : null}>

          <div
            className='progress-bar-loadedData'
            style={{
              width: this.state.loadedPercentage + '%'
            }}
          >
          </div>

          <div
            className='progress-bar-played-data'
            style={{
              width: this.state.x + 'px'
            }}
          >
          </div>

        
          <div
            className='progress-button-container'
            onMouseDown={!this.props.isMobile ? this.startEvent : null}
            onTouchStart={this.props.isMobile ? this.startEvent : null}
            ref={this.props.button}
            style={{
              left: this.state.x + 'px'
            }}
          >
            <span className='progress-button-padding'/>

          </div>

      </div>
    )
  }
}

export default hot(module)(VideoSeekbar)