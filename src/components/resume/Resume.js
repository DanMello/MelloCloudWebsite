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
              <div className='resume-item'>Ubuntu Server 16</div>
              <div className='resume-item'>Linux Terminal</div>
              <div className='resume-item'>Tmux</div>
              <div className='resume-item'>Visual Studio Code</div>
              <div className='resume-item'>Jest</div>
              <div className='resume-item'>Enzyme</div>
              <div className='resume-item'>Webpack 4</div>
              <div className='resume-item'>Babel 7</div>
              <div className='resume-item'>Chrome DevTools</div>
            </div>
          </div>
        </div>

        <div className='resume-right-container'>
          
          <div className='resume-statement'>
            Self taught computer programmer learning and coding on occasion eight to ten hours a day for the past three years.
            Contributing to open source and looking to become a professional front end developer.
          </div>
          
          <div className='resume-big-title'>Projects</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-tic-tac-toe</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-tic-tac-toe</div>
              <ul className='resume-ul'>
                <li>Developed a tic tac toe app using React Hooks.</li>
                <li>Implemented unit tests using test-driven development with Jest and Enzyme.</li>
                {/* <li>Created all the controls using media events, including custom video seekbar, audio slider, play and pause button etc.</li> */}
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-simpler-forms</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-simpler-forms</div>
              <ul className='resume-ul'>
                <li>Developed a higher-order component that manages your forms state and form submissions.</li>
                <li>Also developed three other components that make it easy for developers to create, 
                    validate, perform search queries, and submit single or multi-step forms without writing any logic using only declarative code.
                </li>
                <li>Developed everything with zero dependencies and published to npm.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-video-player</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-video-player</div>
              <ul className='resume-ul'>
                <li>Developed and published to npm, a component that can play videos easily on mobile and desktop devices.</li>
                <li>Created all the controls using media events, including custom video seekbar, audio slider, play and pause button etc.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>My Website</div>
              <div className='resume-item-right-subheading'>https://mellocloud.com</div>
              <ul className='resume-ul'>
                <li className='resume-li'>Developed front end using React and back end using NGINX and Node js.</li>
                <li className='resume-li'>Run server from home using ubuntu server 16 on an old computer. 
                Configured ssh key, https, and deploy user. Maintain server to make sure it stays up and running.
                </li>
                <li className='resume-li'>Update website with the latest versions of my resume, notes, projects and live demos.</li>
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
          
                   // <li>Developed everything with zero dependencies and published to npm.</li>


                // <li>Developed a higher-order component that manages your forms state and form submissions.</li>
                // <li>Also made three other components that make it easy for developers to create, 
                //     validate, perform search queries, and submit single or multi-step forms without writing any logic using only declarative code.
                // </li>

                // <li>Developed and published to npm, a component that can play videos easily on mobile and desktop devices.</li>
                // <li>Created all the controls using media events, including custom video seekbar, audio slider, play and pause button etc.</li>
                // <li>Developed and published to npm, a component that can play videos easily on mobile and desktop devices.</li>
                // <li>Created all the controls using the media events api, including custom video seek bar, audio slider, play and pause button etc.</li>

          // Setup physical server at home using ubuntu server 16 on an old computer. Update 
          // https certificate and maintain server to make sure it stays up and running. 

          // Developed front end using react and back end using NGINX and Node js including setting up server at home.

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

// Self taught computer programmer learning and coding on occasion 8 to 10 hours a day for the past 3 years.
// contributing to open source and looking to become a professional front end developer.

            // <div>
            //   <div className='resume-item-heading'>Website</div>
            //   <div className='resume-item'>https://mellocloud.com</div>
            // </div>

            // Ran server from home using ubuntu server 16 on an old computer for a while. Recently moved it to 
            //     digital ocean after the old computers power supply broke. Configured ssh key, https, and deploy user. 

                //             <li className='resume-li'>Developed front end using React and back end using NGINX and Node js.</li>
                // <li className='resume-li'>Run server from home using ubuntu server 16 on an old computer. 
                // Configured ssh key, https, and deploy user. Maintain server to make sure it stays up and running.