import React, { Component } from 'react'
import { compose } from 'redux'
import { Document, Page } from 'react-pdf'
import Loader from '../components/partials/myloader'

import './pdf.css'

export const PDFviewer = (WrappedComponent) => {

  return class extends Component {

    constructor() {

      super()

      this.state = {
        file: null,
        pageNumber: 1,
      }

      this.openPdf = this.openPdf.bind(this)
    }

    openPdf(e) {

      document.body.classList.add('nav-open')

      this.setState({
        file: e.target.dataset.file
      })
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          openPdf={this.openPdf}
          file={this.state.file}
          pageNumber={this.state.pageNumber}
        />
      )
    }
  }
}

export class Pdf extends Component {

  constructor() {
    super()

    this.state = {

    }

    this.renderLoader = this.renderLoader.bind(this)
  }

  renderLoader(e) {

    return (
      <Loader 
        width='20px'
        height='20px'
        color='orange'
        text='loading file'
      />
    )
  }

  render() {

    let width = window.innerWidth

    return (

      <div className={this.props.file && 'pdf-fullscreen'}>

        <Document file={this.props.file} noData='' loading={this.renderLoader()}>

          <Page pageNumber={this.props.pageNumber} width={width} />

        </Document>

      </div>
    )
  }
}