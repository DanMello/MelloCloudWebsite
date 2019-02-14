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
              <div className='resume-item-heading'>Address</div>
              <div className='resume-item'>611 Summer St.</div>
              <div className='resume-item'>Rockland, MA 02370</div>
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
          <div className='resume-category-container'>Front End</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>HTML5</div>
              <div className='resume-item'>CSS3</div>
              <div className='resume-item'>Javascript</div>
              <div className='resume-item'>ReactJS</div>
              <div className='resume-item'>Redux</div>
              <div className='resume-item'>Webpack 4 & Babel 7</div>
            </div>
          </div>
          <div className='resume-category-container'>Backend End</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>Nodejs</div>
              <div className='resume-item'>NGINX</div>
              <div className='resume-item'>Mysql</div>
              <div className='resume-item'>Ubuntu Server 16</div>
            </div>
          </div>
          <div className='resume-category-container'>Workflow & Tools</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>Ubuntu</div>
              <div className='resume-item'>Sublime Text</div>
              <div className='resume-item'>Chrome DevTools</div>
            </div>
          </div>
          <div className='resume-category-container'>Languages</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>English</div>
              <div className='resume-item'>Brazilian Portuguese</div>
            </div>
          </div>
        </div>

        <div className='resume-right-container'>
          <p className='resume-paragraph'>Self taught computer programmer with 3 years of experience specializing in web development. Focused in creating optimized user friendly experiences and automating tasks.</p>
          
          <div className='resume-big-title'>Projects</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-when'>2018</div>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>mellocloud.com Front End</div>
              <div className='resume-item-right-subheading'>Repo: github.com/DanMello/MelloCloudWebApp</div>
              <ul className='resume-ul'>
                <li>Built site from scratch using ReactJS.</li>
                <li>Implemented a higher-order component which is used to create all forms on the site.</li>
                <li>Used redux middleware to create a reusable function that handles all api calls using axios.</li>
                <li>Optimized site for both desktop and mobile users.</li>
                <li>Setup Webpack 4 and Babel 7 along with react-hot-loader to help automate the development process.</li>
                <li>Created a bash script to deploy files to production server.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-when'>2018</div>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>mellocloud.com Back End</div>
              <div className='resume-item-right-subheading'>Repo: github.com/DanMello/MelloCloudAPI</div>
              <ul className='resume-ul'>
                <li>Setup physical web server at home and forwarded all required ports for outside access.</li>
                <li>Configured NGINX to serve all static assets, redirect mobile users to mobile version of the site, and to redirect all http traffic to https.</li>
                <li>Created a RESTful API with NodeJS and Express to handle all data management and responses including sending emails.</li>
                <li>Implemented security measures including safe installation of Mysql, setting up passwordless ssh, and using dotenv to hide sensitive information.</li>
              </ul>
            </div>
          </div>

          <div className='resume-big-title'>Education</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-when'>Graduated 2013</div>
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