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
      pausedBeforeSeek: false,
      seeking: false,
      seekDelay: null,
      loadedPercentage: 0,
      positionLeft: 0,
      error: false
    }

    this._button = React.createRef()
    this._progressBar = React.createRef()

    this.manageControllerMobile = this.manageControllerMobile.bind(this)
    this.manageControllerDesktop = this.manageControllerDesktop.bind(this)

    this.playing = this.playing.bind(this)
    this.pause = this.pause.bind(this)
    this.timeupdate = this.timeupdate.bind(this)
    this.loading = this.loading.bind(this)
    this.loaded = this.loaded.bind(this)
    this.seeking = this.seeking.bind(this)
    this.seeked = this.seeked.bind(this)
    this.progress = this.progress.bind(this)
    this.error = this.error.bind(this)
  }

  componentDidMount() {

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {

      this.props.videoRef.current.autoplay = true
    }

    this.props.videoRef.current.addEventListener('playing', this.playing)
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
    this.props.videoRef.current.removeEventListener('pause', this.pause)
    this.props.videoRef.current.removeEventListener('timeupdate', this.timeupdate)
    this.props.videoRef.current.removeEventListener('loadstart', this.loading)
    this.props.videoRef.current.removeEventListener('loadeddata', this.loaded)
    this.props.videoRef.current.removeEventListener('progress', this.progress)
  }

  manageControllerMobile(e) {

    if (this.state.delay) clearTimeout(this.state.delay)

    if (e.target.className === 'video-play-button-container' || this.state.hide) {

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

  playing() {

    this.setState({
      clicked: true,
      playing: true,
      loading: false,
      delay: setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 1500)
    })
  }

  pause() {

    this.setState({
      hide: false,
      clicked: true,
      playing: false
    })
  }

  error() {

    this.setState({
      error: true
    })
  }

  timeupdate() {

    if (!this.state.seeking) {

      let offset = (this._progressBar.current.offsetWidth - this._button.current.offsetWidth)

      let percentage = ( this.props.videoRef.current.currentTime / this.props.videoRef.current.duration ) * offset

      this.setState({
        positionLeft: percentage
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

  progress() {

    const video = this.props.videoRef.current
    
    const buffered = video.buffered
    const duration = video.duration
    const time  = video.currentTime
    
    let range = 0

    if (this.props.videoRef.current.readyState > 2) {

      while(!(buffered.start(range) <= time && time <= buffered.end(range))) {
          range += 1
      }

      const loadEndPercentage = buffered.end(range) / duration
      const loadedPercentage = 100 * loadEndPercentage

      this.setState({
        loadedPercentage: loadedPercentage
      })
    }
  }

  seeking() {

    let stateObj = {
      seeking: true,
      loading: true
    }

    if (this.state.delay) clearTimeout(this.state.delay)

    if (!this.props.videoRef.current.paused) {

      this.props.videoRef.current.pause()

      stateObj.pausedBeforeSeek = false

    } else {

      stateObj.pausedBeforeSeek = true
    }

    this.setState(stateObj)
  }

  async seeked() {

    let stateObj = {
      seeking: false
    }

    if (!this.state.pausedBeforeSeek) {

      await this.props.videoRef.current.play()

      stateObj.delay = setTimeout(() => {

        this.setState({
          hide: true,
          clicked: false
        })
      }, 1500)
    }

    this.setState(stateObj)
  }

  render() {

    return (
      <div className='video-player-outer-container' onMouseMove={!this.props.isMobile ? this.manageControllerDesktop : null} onClick={this.props.isMobile ? this.manageControllerMobile : null}>
        
        {this.state.error ?

          <h1>Error</h1>
          :
          <div>
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
                loading={this.state.loading}
                hide={this.state.hide}
                videoref={this.props.videoRef}
                isMobile={this.props.isMobile} 
                button={this._button}
                progressbar={this._progressBar}
                seeking={this.seeking}
                seeked={this.seeked}
                loadedPercentage={this.state.loadedPercentage}
                positionLeft={this.state.positionLeft}
              />

            </div>
          </div>
        }

      </div>
    )
  }
}

export default hot(module)(Video)