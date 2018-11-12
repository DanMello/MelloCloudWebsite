import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'

import Scroll from '../scrollView/ScrollView'
import ContentWrapper from '../contentwrapper/ContentWrapper'

import './about.css'

const pdfInfo = require('../../json/pdfInfo.json')

class About extends Component {

  constructor() {

    super()

    this._scrollRef = React.createRef()
  }

  render() {

    return (

      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user} >

        <div className='about-container'>
          <h1>What is mello cloud?</h1>
          <p className='about-paragraph'>
            "mello cloud" is a website I made to put into practice some of the things that I've been 
            learning for the past 3 years or so and to share projects I'm working on with potential employers or clients. 
          </p>
        </div>

        <div className='about-container'>
          <h1>So who am I?</h1>
          <p className='about-paragraph'>
            My name is Joao Daniel Santos De Mello, but most people just call me Dan. I was born in Brasil, I am 24 years old and I currently live
            in Rockland, MA. Here is some pictures of me and my girlfriend Michelle.
          </p>
        </div>

        <div className='about-scroll-parent'>
          <Scroll className='about-scroll-container' navOpen={this.props.navOpen} scrollRef={this._scrollRef}>
            <img src='/assets/me2.jpeg' className='about-picture'/>
            <img src='/assets/me.jpeg' className='about-picture about-picture-margin'/>
            <img src='/assets/me3.jpeg' className='about-picture'/>
          </Scroll>
        </div>

        <div className='about-container'>
          <h1>April 22, 2016</h1>
          <p className='about-paragraph'>
            That date is the start of it all. Since I was young, I've been good with computers. I never thought I would be able to code
            because it seemed you needed to be a super genius until a previous employer of mine asked me if I could make websites. At the time I had
            no clue but I said... yeah. Ever since then I've been hooked.
          </p>
        </div>

        <div className='about-container'>
          
          <h1>The journey.</h1>
          
          <p className='about-paragraph about-journey-paragraph'>
            With all that said, here is all my notes from day one in order.
          </p>

          <div className='about-pdfFlexContainer'>

            {pdfInfo.map(file => {

              return (
                <Link 
                  key={file.name}
                  to={`/pdfviewer?file=${file.name}`}
                  className='about-thumbnailContainer'
                >
                  <div className='about-imageContainer'>
                    <img className='about-image' src={file.thumbnailPath} alt='oops thumbnail not found.'/>
                    <div className='about-filename-container'>
                      <span className='about-filename'>{file.nameWithoutNum}</span>
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

export default hot(module)(About)

// major key
// left = (parentWidth - elementWidth) / 2 

