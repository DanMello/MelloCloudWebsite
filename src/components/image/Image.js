import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './image.css'

class Image extends Component {

  render() {

    return (
      <div className='image-main-container'>
        <div className='image-container'>
          <img src='/assets/review-up.png' className='image-app-image'/>
        </div>
        <div className='image-container-2'>
          <img src='/assets/app-up.png' className='image-app-image'/>
        </div>
      </div>
    )
  }
}

export default hot(module)(Image)