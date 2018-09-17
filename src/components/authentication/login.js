import React, { Component } from 'react'
import { FaCloud, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { userLogin } from '../../actions/userActions'

import { createEvents } from '../../api/eventListener'

export default class Login extends Component {

  constructor () {

    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      error: null,
      event: {},
      hoverLogo: false,
      focused: false
    }
  }

  componentWillMount() {

    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: this.handleSubmit, target: 'loginButton' },
        { event: 'onTouchEnd', method: () => {this.props.history.push('/')}, target: 'logoGoHome'},
      ],
      mobileClick: [
        { event: 'onClick', method: this.handleSubmit, target: 'loginButton'},
        { event: 'onClick', method: () => { this.props.history.push('/') }, target: 'logoGoHome'}
      ],
      desktop: [
        { event: 'onClick', method: this.handleSubmit, target: 'loginButton' },
        { event: 'onMouseEnter', method: this.hover, target: 'loginButton' },
        { event: 'onMouseLeave', method: this.hover, target: 'loginButton' },
        { event: 'onClick', method: () => {this.props.history.push('/')}, target: 'logoGoHome'},
        { event: 'onMouseEnter', method: () => {this.setState({hoverLogo: true})}, target: 'logoGoHome'},
        { event: 'onMouseLeave', method: () => {this.setState({hoverLogo: false})}, target: 'logoGoHome' },
        { event: 'onMouseEnter', method: () => {this.refs.signupButton.style.opacity = '0.5'}, target: 'signupButton'},
        { event: 'onMouseLeave', method: () => {this.refs.signupButton.style.opacity = '1'}, target: 'signupButton'},
      ]
    }, this.props.config)

    this.setState({event: event})
  }

  componentWillUnmount() {

    if (this.state.focused !== false) {
      this.state.focused.blur()
    }
  }

  hover (e) {

    if (e.target.attributes.enabled.value === 'false') return
    if (e.type === 'mouseenter') e.target.style.opacity = '0.5'
    if (e.type === 'mouseleave') e.target.style.opacity = '1'
  }

  handleSubmit(e) {

    if (e.target.attributes.enabled.value === 'false') return

    if (!this.state.email || !this.state.password) {

      this.setState({error: 'Input fields cannot be empty'})

    } else {

      alert(this.props.config.url)
      alert(window.location.hostname)

      fetch(this.props.config.url + '/account/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })

      }).then(res => {

        return res.json()

      }).then(resJson => {

        if (resJson.error) {

          this.setState({error: resJson.message})

        } else {

          localStorage.setItem('user', JSON.stringify(resJson))

          this.props.dispatch(userLogin(resJson))

          this.props.history.push('/')
        }
          
      }).catch(err => {

        this.setState({error: 'There was a problem trying to connect to the server, please try again.'})
      })
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} style={Object.assign({}, styles.formContainer, this.props.config.device !== 'mobile' ? {width: '450px', maxWidth: '450px'} : {width: '95%', maxWidth: '95%'})}>
      
        <div style={styles.titleContainer}>
          
          <FaCloud size={'2.5em'} color={!this.state.hoverLogo ? 'rgb(58, 61, 80)' : '#ccc'} style={{marginRight: '15px'}}/>
          
          <h1 {...this.state.event.logoGoHome} style={styles.title}>mello cloud</h1>

        </div>

        <div style={styles.error}>{this.state.error}</div>

        <div style={{width: this.props.config.device !== 'mobile' ? '65%' : '95%' }}>

          <div style={styles.inputContainers}>
            
            <div style={styles.error}>{this.state.emailError}</div>
            <div style={styles.formLabels}>Email:</div>
            
            <input 
              type='email'
              name='email'
              ref='emailInput'
              autoFocus={false}
              autoComplete='off'
              value={this.state.email}
              style={styles.formInputs}
              onChange={(e) => {
                
                this.setState({email: e.target.value})
              }}
              onFocus={(e) => {

                this.setState({emailError: '', focused: this.refs.emailInput })

                e.target.style.outline = 'none'
                e.target.style.borderBottom = '1px solid'
                e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
              }}
              onBlur={(e) => {

                if (!this.state.email) {
                  
                  this.setState({
                    emailError: 'Email cannot be empty.',
                    focused: false
                  })

                  e.target.style.outline = 'solid 1px red'
                  e.target.style.border = 'none'

                } else {
                  
                  e.target.style.outline = 'none'
                  e.target.style.borderBottomColor = '#ccc'

                  this.setState({focused: false})
                }
              }}
            />
          </div>
          <div style={styles.inputContainers}>
            <div style={styles.error}>{this.state.passwordError}</div>
            <div style={styles.formLabels}>Password:</div>
            <input
              type='password'
              name='password'
              ref='passwordInput'
              autoComplete='off'
              style={styles.formInputs}
              onChange={(e) => this.setState({password: e.target.value})}
              onFocus={(e) => {

                this.setState({passwordError: '', focused: this.refs.passwordInput })

                e.target.style.outline = 'none'
                e.target.style.borderBottom = '1px solid'
                e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
              }}
              onBlur={(e) => {

                if (!this.state.password) {
                  
                  this.setState({
                    passwordError: 'Password cannot be empty.',
                    focused: false
                  })

                  e.target.style.outline = 'solid 1px red'
                  e.target.style.border = 'none'

                } else {

                  this.setState({focused: false})
                  
                  e.target.style.outline = 'none'
                  e.target.style.borderBottomColor = '#ccc'
                }
              }}
            />
          </div>

          <div
            {...this.state.event.loginButton}
            eventid='loginButton'
            enabled={this.state.email && this.state.password ? 'true' : 'false' }
            style={Object.assign({}, styles.logInButton, this.state.email && this.state.password ? {opacity: '1', cursor: 'pointer'} : {opacity: '0.5', cursor: 'default'})}
          >
          Log in
          </div>

          <div style={{textAlign: 'center', marginTop: '20px',}}>
            <Link 
              to='/account/forgot'
              style={styles.forgotAccount}
              onMouseEnter={(e) => e.target.style.color = 'rgb(0, 122, 255)'}
              onMouseLeave={(e) => e.target.style.color = '#444'}
              >
              Forgot Account?
            </Link>
          </div>

        </div>

        <div
          {...this.state.event.signupButton}
          ref='signupButton'
          style={styles.signupContainer}
          >
          <Link
            to='/account/signup'
            style={styles.signuplink}
            >
            Create account
            <FaAngleRight size={'1.2em'} color={'rgb(0, 122, 255)'} style={{marginLeft: '5px'}}/>
          </Link>
        </div>

      </form>
    )
  }
}

const styles = {
  formContainer: {
    position: 'relative',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '450px',
    maxWidth: '450px',
    minHeight: '500px',
    backgroundColor: 'white',
    marginTop: '50px',
    marginBottom: '50px',
    borderRadius: '5px',
    boxShadow: '0px 2px 10px rgba(0,0,0,.2)', 
    paddingTop: '80px',
    paddingBottom: '80px',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  title: {
    display: 'block',
    color: '#444',
    cursor: 'pointer'
  },
  inputContainers: {
    padding: '5px'
  },
  formLabels: {
    fontSize: '20px',
    marginBottom: '3px',
    color: '#666'
  },
  formInputs: {
    border: 'none',
    borderRadius: '0px',
    padding: '4px',
    color: 'black',
    fontSize: '17px',
    borderBottom: '1px solid #ccc',
    width: '100%'
  },
  logInButton: {
    width: '100%',
    marginTop: '15px',
    fontSize: '20px',
    color: 'white',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: 'rgb(58, 61, 80)'
  },
  forgotAccount: {
    color: '#444',
    display: 'inline-block',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: '17px'
  },
  signupContainer: {
    position: 'absolute',
    bottom: -35,
    right: 0,
    cursor: 'pointer'
  },
  signuplink: {
    color: 'rgb(0, 122, 255)',
    textDecorationLine: 'none',
    fontSize: '19px',
    display: 'flex',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center'
  }
}