import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { Link } from 'react-router-dom'
import './notes.css'

const pdfInfo = require('../../data/pdfInfo.json')

class Notes extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>

        <div className='notes-container'>
          
          <h1 className={this.props.config.isMobile ? 'notes-heading' : null}>Web development notes.</h1>
          
          <p className='notes-paragraph'>
            Every time I learn something new, I like to write things down. Here are all my notes from when I started learning web development. 
          </p>

          <div className='notes-pdfFlexContainer'>

            {pdfInfo.map(file => {

              return (
                <Link
                  key={file.name}
                  to={`/pdfviewer?file=${file.name}`}
                  id={file.name}
                  className='notes-thumbnailContainer'
                >
                  <div className='notes-imageContainer'>
                    <img className='notes-image' src={file.thumbnailPath} alt='oops thumbnail not found.'/>
                    <div className='notes-filename-container'>
                      <span className='notes-filename'>{file.nameWithoutNum}</span>
                    </div>
                  </div>
                </Link>
              )
            })}

          </div>
        </div>
        
      </ContentWrapper>
    )
  }
}

export default hot(module)(Notes)