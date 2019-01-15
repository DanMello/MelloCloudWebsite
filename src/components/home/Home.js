import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import queryString from 'query-string'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { userUpdate } from '../../actions/userActions'
import './home.css'

class Home extends Component {

  constructor() {

    super ()

    this.state = {
      message: null,
      error: null
    }
  }

  componentDidMount() {

    const values = queryString.parse(this.props.location.search)

    if (values.emailVerified === 'true') {

      this.props.dispatch(userUpdate({token: this.props.user.profile.token}))

      this.setState({
        message: 'Thank you for verifying your email.'
      })
    }

    if (values.emailVerifiedError) {

      this.setState({
        error: values.emailVerifiedError
      })
    }
  }

  render() {

    return (
      <ContentWrapper config={this.props.config} dispatch={this.props.dispatch} user={this.props.user} desktopwidth={'100%'}>

        {!!this.state.message && <div className='home-successtext'>{this.state.message}</div>}
        {!!this.state.error && <div className='home-errortext'>{this.state.error}</div>}
        {this.props.location.state && this.props.location.state.redirectMessage && <div className='home-successtext'>{this.props.location.state.redirectMessage}</div>}

        <div className='home-main-container'>
          
          <h1 className='home-main-heading'>mello cloud IOS</h1>

          <h2 className='home-sub-heading'>Coming 2019</h2>

          <p className='home-paragraph'>Automate your small business with your voice.</p>

          <div className='home-image-container'>
            <div className='home-image-box'>
              <img src='/assets/app.png' className='home-app-image'/>
            </div>
          </div>

        </div>
        
      </ContentWrapper>
    )
  }
}

export default hot(module)(Home)