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
      offset: 0
    }

    this.startEvent = this.startEvent.bind(this)
    this.moveEvent = this.moveEvent.bind(this)
    this.endEvent = this.endEvent.bind(this)
  }

  startEvent(e) {

    e.preventDefault()
    e.stopPropagation()

    this.props.toggleSeeking()

    let offset

    this.props.videoref.current.play()

    if (e.type === 'touchstart') {

      offset = e.touches[0].pageX - this.state.x

      document.ontouchmove = this.moveEvent
      document.ontouchend = this.endEvent

    } else {

      offset = e.pageX - this.state.x

      document.onmousemove = this.moveEvent
      document.onmouseup = this.endEvent
    }

    this.setState({
      offset: offset
    })
  }

  moveEvent(e) {

    e.preventDefault()
    e.stopPropagation()

    const buttonWidth = this.props.button.current.offsetWidth
    const progressbarwidth = this.props.progressbar.current.offsetWidth
    const maxoffset = (progressbarwidth - buttonWidth)

    let position

    if (e.type === 'touchmove') {

      position = e.touches[0].pageX - this.state.offset

    } else {

      position = e.pageX - this.state.offset
    }

    if (position < 0) {

      position = 0

    } else if (position > maxoffset) {

      position = maxoffset
    }

    const percentage = (position / maxoffset)
    const videoTime = this.props.videoref.current.duration * percentage

    this.props.videoref.current.currentTime = videoTime

    this.setState({
      x: position
    })
  }

  endEvent(e) {

    e.preventDefault()
    e.stopPropagation()

    this.props.toggleSeeking()

    if (e.type === 'touchend') {

      document.ontouchmove = null
      document.ontouchend = null

    } else {

      document.onmousemove = null
      document.onmouseup = null
    }
  }

  render() {

    return (

      <div className='video-play-controller-container'>

        <div className='progress-bar-container'>

          <div className='progress-bar' ref={this.props.progressbar}>
            
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

        </div>

      </div>
    )
  }
}

export default hot(module)(VideoSeekbar)