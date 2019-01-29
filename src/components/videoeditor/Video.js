import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import ToggleVideo from './ToggleVideo'
import VideoSeekbar from './VideoSeekbar'
import classNames from 'classnames'

class Video extends Component {

  constructor() {

    super()

    this.state = {
      hide: false,
      delay: null,
      clicked: false,
      loading: false,
      playing: false,
      seeking: false,
      seekDelay: null
    }

    this._button = React.createRef()
    this._progressBar = React.createRef()

    this.manageControllerMobile = this.manageControllerMobile.bind(this)
    this.manageControllerDesktop = this.manageControllerDesktop.bind(this)

    this.videopaused = this.videopaused.bind(this)
    this.play = this.play.bind(this)
    this.timeupdate = this.timeupdate.bind(this)
    this.loading = this.loading.bind(this)
    this.loaded = this.loaded.bind(this)
    this.seeking = this.seeking.bind(this)
    this.seeked = this.seeked.bind(this)
    this.waiting = this.waiting.bind(this)
    this.playing = this.playing.bind(this)
    this.seekedEvent = this.seekedEvent.bind(this)
  }

  componentDidMount() {

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {

      this.props.videoRef.current.autoplay = true

      this.setState({
        loading: true
      })
    }

    this.props.videoRef.current.addEventListener('timeupdate', this.timeupdate)
    this.props.videoRef.current.addEventListener('play', this.play)
    this.props.videoRef.current.addEventListener('pause', this.videopaused)
    this.props.videoRef.current.addEventListener('loadstart', this.loading)
    this.props.videoRef.current.addEventListener('loadeddata', this.loaded)
    this.props.videoRef.current.addEventListener('seeked', this.seekedEvent)
    this.props.videoRef.current.addEventListener('waiting', this.waiting)
    this.props.videoRef.current.addEventListener('playing', this.playing)
  }

  componentWillUnmount() {

    if (this.state.delay) {

      clearTimeout(this.state.delay)
    }

    this.props.videoRef.current.removeEventListener('timeupdate', this.timeupdate)
    this.props.videoRef.current.removeEventListener('play', this.play)
    this.props.videoRef.current.removeEventListener('pause', this.videopaused)
  }

  manageControllerMobile(e) {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (e.target.className === 'video-play-button-container') {

      if (!this.state.hide) {

        if (!this.state.clicked) {

          this.setState({
            clicked: true,
            delay: setTimeout(() => {

              this.setState({
                hide: true,
                clicked: false
              })
            }, 1500)
          })

        } else {

          this.setState({
            hide: true
          })
        } 

      } else {

        this.setState({
          hide: false,
          clicked: true
        }, () => {

          this.setState({
            delay: setTimeout(() => {

              this.setState({
                hide: true,
                clicked: false
              })
            }, 2500)
          })
        })
      }
    }
  }

  manageControllerDesktop() {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (this.props.videoRef.current.currentTime > 0 && !this.props.videoRef.current.paused && !this.props.videoRef.current.ended && this.props.videoRef.current.readyState > 2 && !this.state.hide) {

      this.setState({
        delay: setTimeout(() => {

          this.setState({
            hide: true
          })
        }, 1000)
      })

    } else if (this.state.hide) {

      this.setState({
        hide: false
      }, () => {

        this.setState({
          delay: setTimeout(() => {

            this.setState({
              hide: true
            })
          }, 2500)
        })
      })
    }
  }

  loading() {

    this.setState({
      loading: true
    })
  }

  loaded() {
    
    this.setState({
      loading: false
    })
  }

  waiting() {

    // this.setState({
    //   loading: true
    // })
  }

  playing() {

    this.setState({
      loading: false
    })
  }

  seekedEvent() {

    // this.setState({
    //   loading: false
    // })
  }

  seeking() {

    if (this.state.delay) clearTimeout(this.state.delay)
    if (this.state.seekDelay) clearTimeout(this.state.seekDelay)

    this.props.videoRef.current.pause()

    this.setState({
      seeking: true
    })
  }

  seeked() {
    
    this.props.videoRef.current.play()

    this.setState({
      seekDelay: setTimeout(() => {

        this.setState({
          hide: true,
          seeking: false,
        })
      }, 1500)
    })
  }

  timeupdate() {

    const buttonNode = ReactDOM.findDOMNode(this._button.current)

    if (!this.state.seeking) {

      let offset = (this._progressBar.current.offsetWidth - this._button.current.offsetWidth)

      let percentage = ( this.props.videoRef.current.currentTime / this.props.videoRef.current.duration ) * offset

      buttonNode.style.left = `${percentage}px`
    }
  }

  play() {

    this.setState({
      clicked: true,
      playing: true,
      delay: setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 1500)
    })
  }

  videopaused() {

    this.setState({
      hide: false,
      clicked: true,
      playing: false
    })
  }

  render() {

    return (
      <div className='video-player-outer-container' onMouseMove={!this.props.isMobile ? this.manageControllerDesktop : null} onClick={this.props.isMobile ? this.manageControllerMobile : null}>
        
        <video
          className='video-player-container'
          ref={this.props.videoRef}
          poster={this.props.videoObj.video_thumbnail}
          playsInline
          muted
          >
          
          <source type="video/mp4" src={this.props.videoObj.videopath} />

        </video>

        <ToggleVideo 
          videoref={this.props.videoRef} 
          hide={this.state.hide} 
          delay={this.state.delay} 
          loading={this.state.loading} 
          playing={this.state.playing}
          seeking={this.state.seeking}
        />

        <div className={!this.state.hide ? 'video-play-controller-container video-show' : 'video-play-controller-container video-hide'}>

          <VideoSeekbar
            videoref={this.props.videoRef}
            hide={this.state.hide} 
            delay={this.state.delay} 
            isMobile={this.props.isMobile} 
            button={this._button}
            progressbar={this._progressBar}
            seeking={this.seeking}
            seeked={this.seeked}
            playing={this.state.playing}
          />

        </div>

      </div>
    )
  }
}

export default hot(module)(Video)