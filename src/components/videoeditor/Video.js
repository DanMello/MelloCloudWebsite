import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import ToggleVideo from './ToggleVideo'
import VideoSeekbar from './VideoSeekbar'
import Loader from '../partials/myloader'
import { timeConvert } from '../../helpers/numbers'

class Video extends Component {

  constructor() {

    super()

    this.state = {
      hide: false,
      delay: null,
      clicked: false,
      loading: false,
      playing: false,
      pausedBeforeSeek: false,
      seeking: false,
      seekInteraction: false,
      loadedPercentage: 0,
      positionLeft: 0,
      error: false,
      initialLoad: false,
      currentVideoTime: null,
      videoDuration: null
    }

    this._button = React.createRef()
    this._progressBar = React.createRef()

    this.manageControllerMobile = this.manageControllerMobile.bind(this)
    this.manageControllerDesktop = this.manageControllerDesktop.bind(this)
    this.manageClickDesktop = this.manageClickDesktop.bind(this)
    this.playing = this.playing.bind(this)
    this.pause = this.pause.bind(this)
    this.timeupdate = this.timeupdate.bind(this)
    this.loading = this.loading.bind(this)
    this.loaded = this.loaded.bind(this)
    this.progress = this.progress.bind(this)
    this.error = this.error.bind(this)
    this.back15 = this.back15.bind(this)
    this.ahead15 = this.ahead15.bind(this)
    this.waiting = this.waiting.bind(this)
    this.canplay = this.canplay.bind(this)
    this.seeking = this.seeking.bind(this)
    this.seeked = this.seeked.bind(this)
    this.startSeekbarInteraction = this.startSeekbarInteraction.bind(this)
    this.endSeekbarInteraction = this.endSeekbarInteraction.bind(this)
  }

  componentDidMount() {

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {

      this.props.videoRef.current.autoplay = true

      this.setState({
        initialLoad: true
      })
    }

    this.props.videoRef.current.addEventListener('playing', this.playing)
    this.props.videoRef.current.addEventListener('canplay', this.canplay)
    this.props.videoRef.current.addEventListener('waiting', this.waiting)
    this.props.videoRef.current.addEventListener('seeking', this.seeking)
    this.props.videoRef.current.addEventListener('seeked', this.seeked)
    this.props.videoRef.current.addEventListener('pause', this.pause)
    this.props.videoRef.current.addEventListener('timeupdate', this.timeupdate)
    this.props.videoRef.current.addEventListener('loadstart', this.loading)
    this.props.videoRef.current.addEventListener('loadeddata', this.loaded)
    this.props.videoRef.current.addEventListener('progress', this.progress)
    this.props.videoRef.current.addEventListener('error', this.error)
  }

  componentWillUnmount() {

    if (this.state.delay) clearTimeout(this.state.delay)

    this.props.videoRef.current.removeEventListener('playing', this.playing)
    this.props.videoRef.current.removeEventListener('canplay', this.canplay)
    this.props.videoRef.current.removeEventListener('waiting', this.waiting)
    this.props.videoRef.current.removeEventListener('pause', this.pause)
    this.props.videoRef.current.removeEventListener('timeupdate', this.timeupdate)
    this.props.videoRef.current.removeEventListener('loadstart', this.loading)
    this.props.videoRef.current.removeEventListener('loadeddata', this.loaded)
    this.props.videoRef.current.removeEventListener('progress', this.progress)
    this.props.videoRef.current.removeEventListener('error', this.error)
  }

  manageControllerMobile(e) {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (!this.state.clicked || !e.target.classList.contains('video-play-button-container')) {

      this.setState({
        hide: false,
        clicked: true,
        delay: setTimeout(() => {

          this.setState({
            hide: true,
            clicked: false
          })
        }, 2500)
      })

    } else {

      this.setState({
        hide: true,
        clicked: false
      })
    }
  }

  manageControllerDesktop(e) {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (!this.props.videoRef.current.paused && !this.state.hide) {

      this.setState({
        delay: setTimeout(() => {

          this.setState({
            hide: true
          })
        }, 2500)
      })

    } else if (this.state.hide) {

      this.setState({
        hide: false,
        delay: setTimeout(() => {

          this.setState({
            hide: true
          })
        }, 2500)
      })
    }
  }

  manageClickDesktop(e) {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (e.target.classList.contains('video-play-button-container')) {

      if (this.props.videoRef.current.currentTime > 0 && !this.props.videoRef.current.paused && !this.props.videoRef.current.ended && this.props.videoRef.current.readyState > 2) {

        this.props.videoRef.current.pause()

      } else {

        this.props.videoRef.current.play()
      }
    }

    let stateObj = {
      clicked: true
    }

    if (!this.props.videoRef.current.paused) {

      stateObj.delay = setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 2500)
    }

    this.setState(stateObj)
  }

  waiting() {

    this.setState({
      loading: true
    })
  }

  canplay() {

    this.setState({
      loading: false
    })
  }

  playing() {

    let stateObj = {
      playing: true,
      loading: false
    }

    if (this.state.initialLoad) {

      stateObj.hide = false
      stateObj.clicked = true,
      stateObj.initialLoad = false,
      stateObj.delay = setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 2500)
    }

    this.setState(stateObj)
  }

  pause() {

    this.setState({
      playing: false,
      hide: false
    })
  }

  error() {

    this.setState({
      error: true
    })
  }

  timeupdate() {

    if (!this.state.seeking && !this.state.loading) {

      let offset = this._progressBar.current.offsetWidth

      let percentage = ( this.props.videoRef.current.currentTime / this.props.videoRef.current.duration ) * offset

      this.setState({
        positionLeft: percentage,
        currentVideoTime: timeConvert(this.props.videoRef.current.currentTime, this.props.videoRef.current.duration)
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
      loading: false,
      videoDuration: timeConvert(this.props.videoRef.current.duration)
    })
  }

  progress() {

    let video = this.props.videoRef.current
    let buffered = video.buffered
    let duration = video.duration
    let time  = video.currentTime
    let loadedPercentage

    if (duration > 0) {

      for (var i = 0; i < buffered.length; i++) {

        if (buffered.start(buffered.length - 1 - i) < time) {

          this.setState({
            loadedPercentage: buffered.end(buffered.length - 1 - i) / duration * 100
          })
          break;
        }
      }
    }
  }

  seeking() {

    this.setState({
      seeking: true
    })
  }

  seeked() {

    this.setState({
      seeking: false
    })
  }

  startSeekbarInteraction() {

    this.setState({
      seekInteraction: true
    })
  }

  endSeekbarInteraction() {

    let stateObj = {
      seekInteraction: false
    }

    if (this.props.isMobile) {

      stateObj.delay = setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 2500)
    }

    this.setState(stateObj)
  }

  back15(e) {

    e.preventDefault()

    if (this.state.hide) return

    let time = this.props.videoRef.current.currentTime - 15

    if (time < 0) time = 0

    this.props.videoRef.current.currentTime = time
  }

  ahead15(e) {

    e.preventDefault()

    if (this.state.hide) return

    let time = this.props.videoRef.current.currentTime + 15

    if (time > this.props.videoRef.current.duration) time = 0

    this.props.videoRef.current.currentTime = time
  }

  render() {

    return (
      <div style={{position: 'relative'}}>
        
        {this.state.error ?

          <h1>Error</h1>
          :
          <div
            className='video-player-outer-container'
            onMouseMove={!this.props.isMobile ? this.manageControllerDesktop : null}
            onClick={this.props.isMobile ? this.manageControllerMobile : this.manageClickDesktop}
            >
            
            {this.state.loading &&

              <Loader width={'30px'} height={'30px'} color={'white'} containerClass={'video-loader'} />
            }

            <video
              className='video-player-container'
              ref={this.props.videoRef}
              poster={this.props.videoObj.video_thumbnail}
              playsInline
              muted
              >
              
              <source type="video/mp4" src={this.props.videoObj.videopath} />

            </video>

            <div className={this.state.hide || this.state.loading || this.state.seekInteraction ? 'video-play-button-container video-hide' : 'video-play-button-container video-show'}>

              <div className='video-skip-container video-skip-left' onClick={this.back15}>
                <img src='assets/back15.png' className='video-skip-image'/>
              </div>

              <ToggleVideo
                videoref={this.props.videoRef} 
                hide={this.state.hide}
                playing={this.state.playing}
              />

              <div className='video-skip-container video-skip-right' onClick={this.ahead15}>
                <img src='assets/ahead15.png' className='video-skip-image'/>
              </div>

            </div>

            <div className={!this.state.hide ? 'video-play-controller-container video-show' : 'video-play-controller-container video-hide'}>

              <div className={'video-time'}>{this.state.currentVideoTime !== null ? this.state.currentVideoTime : '--:--'}</div>

              <VideoSeekbar
                loading={this.state.loading}
                hide={this.state.hide}
                videoref={this.props.videoRef}
                delay={this.state.delay}
                isMobile={this.props.isMobile} 
                button={this._button}
                progressbar={this._progressBar}
                startSeekbarInteraction={this.startSeekbarInteraction}
                endSeekbarInteraction={this.endSeekbarInteraction}
                loadedPercentage={this.state.loadedPercentage}
                positionLeft={this.state.positionLeft}
              />

              <div className={'video-time'}>{this.state.videoDuration !== null ? this.state.videoDuration : '--:--'}</div>

            </div>
          </div>
        }

      </div>
    )
  }
}

export default hot(module)(Video)