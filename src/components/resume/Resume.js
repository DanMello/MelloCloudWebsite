import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './resume.css'

class Resume extends Component {

  render() {

    return (
      <div className='resume-main-container'>
        
        <div className='resume-left-container'>
          <div className='resume-padding-container'>
            <h1 className='resume-name'>Dan Mello</h1>
            <h2 className='resume-title'>Front End Developer</h2>
          </div>
          <div className='resume-category-container'>Personal Info</div>
          <div className='resume-padding-container'>
            <div>
              <div className='resume-item-heading'>Location</div>
              <div className='resume-item'>Rockland, MA</div>
            </div>
            <div>
              <div className='resume-item-heading'>Phone</div>
              <div className='resume-item'>339-788-0346</div>
            </div>
            <div>
              <div className='resume-item-heading'>Email</div>
              <div className='resume-item'>jdanmello@gmail.com</div>
            </div>
            <div>
              <div className='resume-item-heading'>Github</div>
              <div className='resume-item'>github.com/DanMello</div>
            </div>
            <div>
              <div className='resume-item-heading'>Website</div>
              <div className='resume-item'>https://mellocloud.com</div>
            </div>
          </div>
          <div className='resume-category-container'>Web Development Skills</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>HTML5</div>
              <div className='resume-item'>CSS3</div>
              <div className='resume-item'>JavaScript</div>
              <div className='resume-item'>React</div>
              <div className='resume-item'>Redux</div>
              <div className='resume-item'>NGINX</div>
              <div className='resume-item'>Nodejs</div>
              <div className='resume-item'>Mysql</div>
            </div>
          </div>
          <div className='resume-category-container'>Workflow & Tools</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>Git</div>
              <div className='resume-item'>NPM</div>
              <div className='resume-item'>Ubuntu</div>
              <div className='resume-item'>Webpack 4</div>
              <div className='resume-item'>Babel 7</div>
              <div className='resume-item'>Sublime Text</div>
              <div className='resume-item'>Chrome DevTools</div>
              <div className='resume-item'>Ubuntu Server 16</div>
            </div>
          </div>
        </div>

        <div className='resume-right-container'>
          
          
          <div className='resume-big-title'>Projects</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>redux-smart-forms</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/redux-smart-forms</div>
              <ul className='resume-ul'>
                <li>Built site from scratch using ReactJS.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-video-player</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-video-player</div>
              <ul className='resume-ul'>
                <li>Built site from scratch using ReactJS.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>My Website</div>
              <div className='resume-item-right-subheading'>https://mellocloud.com</div>
              <ul className='resume-ul'>
                <li>Developt</li>
              </ul>
            </div>
          </div>

          <div className='resume-big-title' style={{marginTop: '10px'}}>Education</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-when'>2009-2013</div>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>Rockland High School</div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default hot(module)(Resume)


          // <div className='resume-item-right-container'>
          //   <div className='resume-item-right-when'>2017</div>
          //   <div className='resume-item-right-subcontainer'>
          //     <div className='resume-item-right-heading'>jdanmello.com (offline) </div>
          //     <div className='resume-item-right-subheading'>Repo: github.com/DanMello/jdanmello.com</div>
          //     <ul className='resume-ul'>
          //       <li>First Javascript and NodeJS project without using a Javascript framework.</li>
          //       <li>Although never finished, thousands of lines of Javascript were written and a lot was learned.</li>
          //     </ul>
          //   </div>
          // </div>

          // Self taught computer programmer with 3 years of experience specializing in web development. Focused in creating optimized user friendly experiences and automating tasks.

          // <p className='resume-paragraph'>Self taught computer programmer with 3 years of experience specializing in web development. Focused in creating optimized user friendly experiences and automating tasks.</p>


          // <li>Developed entire website with React and Node js.</li>
          //