import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import queryString from 'query-string'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './pdfviewer.css'

const pdfInfo = require('../../json/pdfInfo.json')

class PdfViewer extends Component {

  constructor() {

    super()

    this.state = {
      fileName: null,
      images: [],
      pages: null,
      fileNameWithoutnum: null,
      currentPage: null
    }

    this.pdfInViewport = this.pdfInViewport.bind(this)
  }

  componentDidMount() {
    
    window.scroll(0,0)

    window.addEventListener('scroll', this.pdfInViewport)

    const values = queryString.parse(this.props.location.search)

    pdfInfo.filter(x => x.name === values.file).map(file => {

      this.setState({
        images: file.pdfImages,
        pages: file.pages,
        fileName: file.name,
        fileNameWithoutnum: file.nameWithoutNum
      })
    })
  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.pdfInViewport)
  }

  pdfInViewport() {

    Object.keys(this.refs).filter(pdf => {

      const offset = 0
      const ref = this.refs[pdf].getBoundingClientRect()
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

      if (ref.height > windowHeight) {

        return (ref.top + offset) >= 0 && (ref.top - offset) <= windowHeight

      } else {

        return ref.top >= 0 &&
          ref.left >= 0 &&
          ref.bottom <= windowHeight && 
          ref.right <= windowWidth
      }

    }).map(pdf => {

      let pageNumber = this.state.images.indexOf(pdf) + 1

      if (this.state.currentPage !== pageNumber) {

        this.setState({
          currentPage: pageNumber
        })
      }
    })
  }

  render() {

    return (

      <div className='pdfviewer-pdfoverlay'>

        <div className='pdfviewer-topheader'>
          
          <div className='pdfviewer-iconContainer pdfviewer-flex1'>
            <Link to='/about'>
              <FaAngleLeft className='pdfviewer-backicon'/>
            </Link>
            <div className='pdfviewer-filename'>{this.state.fileNameWithoutnum}</div>
          </div>

        </div>

        <div className='pdfviewer-pdfContainer'>

          {this.state.images.map((src) => {

            return (
              <div className='pdfviewer-pdfImageContainer' key={src}>
                
                <img
                  className='pdfviewer-pdfImages'
                  src={src}
                  ref={src}
                />

              </div>
            )
          })}

        </div>

        {!!this.state.currentPage &&
          <div className='pdfviewer-pageConunt-container'>
            <div className='pdfviewer-pageConunt'> 
              Page {this.state.currentPage} / {this.state.pages}
            </div> 
          </div>
        }
      </div>
    )
  }
}

export default hot(module)(PdfViewer)