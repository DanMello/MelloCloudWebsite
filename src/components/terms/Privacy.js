import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContentWrapper from '../contentwrapper/ContentWrapper'

class Privacy extends Component {

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user}>

        <div className='terms-container'>

          <h1 className='terms-heading'>Website Privacy Policy</h1>

          <div className='terms-modified'>Last Modified: December 8, 2018</div>

          <p className='terms-paragraph'>
            This Privacy Policy discloses how this website collects and uses personal information. This Privacy Policy applies solely to 
            information collected by this website.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Collection, Use and Sharing of Personal Information</h1>

          <p className='terms-paragraph'>
            You may provide personal information via our contact form or our registration form.
            We only have access to/collect information that you voluntarily give us via email or other direct contact from you.
            We generally will use your information to respond to you, regarding the reason you contacted us. 
            We will not sell or rent any personal information to anyone.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Registration</h1>

          <p className='terms-paragraph'>
            This website does provide a registration form which is used for demonstrational purposes only for the time being.
            During registration a user is required to give certain information (such as name, email address and a password). 
            This information is used to contact you about your account for verification reasons. 
            We do send a verification email after creating the account and also after any changes to the account information made by the user via the "Manage account" page.
            Account registration is completely optional and is not required to use the website.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Security</h1>

          <p className='terms-paragraph'>
            We take precautions to protect your information. 
            When you submit sensitive information via the website, your information is protected both online and offline.
            Wherever we collect sensitive information (such as a password), that information is encrypted and transmitted to us in a secure way. 
            You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
            We also maintain the physical computers/servers that store personal information our selfs and store them in a secure environment.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Cookies</h1>

          <p className='terms-paragraph'>
            This website uses only essential cookies to be able to keep you, the user logged in.
          </p>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Your Access to and Control Over Information</h1>

          <p className='terms-paragraph'>
            You may opt out of any future contacts from us at any time.
            You can do the following at any time by contacting us via the email address or phone number given on our website:
          </p>

          <ul className='terms-list-ul'>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>

        </div>

        <div className='terms-container'>

          <h1 className='terms-heading-section'>Changes to Privacy Policy</h1>

          <p className='terms-paragraph'>
            This site may revise this Privacy Policy at any time without notice. 
            It is your responsibility to check the Privacy Policy periodically for changes. 
            Your continued use of the site following the posting of changes will mean that you accept and agree to the changes.
          </p>

        </div>

      </ContentWrapper>
    )
  }
}

export default hot(module)(Privacy)