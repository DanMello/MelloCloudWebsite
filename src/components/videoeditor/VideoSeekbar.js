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
  }

  componentDidUpdate(prevProps) {

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

    let offset

    this.props.seeking()

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

    this.props.seeked()

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

      <div className='progress-bar' ref={this.props.progressbar}>

          <div 
            style={{
              background: 'red',
              width: this.state.loadedPercentage + '%',
              height: '4px',
              position: 'absolute',
              left: 0
            }}
          >
          </div>

          <div 
            style={{
              background: 'green',
              width: this.state.x + 'px',
              height: '4px',
              position: 'absolute',
              left: 0
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


          // <div 
          //   style={{
          //     background: 'green',
          //     width: this.state.x + 'px',
          //     height: '4px',
          //     position: 'absolute',
          //     left: 0
          //   }}
          // >
          // </div>