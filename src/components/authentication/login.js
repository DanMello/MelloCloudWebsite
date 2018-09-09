import React, { Component } from 'react'
import { FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { createEvents } from '../../api/frontend/eventListener'

export default class Login extends Component {

  constructor () {

    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      event: {}
    }
  }

  componentWillMount() {

    let event = createEvents({
      mobile: [
        { event: 'onTouchStart', method: (e) => {e.target.style.backgroundColor = 'pink'}, target: 'loginButton'} //based on event id which is just a string for reference
      ],
      desktop: [
        { 
          target: 'loginButton',
          event: 'onMouseEnter', 
          method: (e) => {

            if (e.target.attributes.enabled.value === 'false') return

            e.target.style.opacity = '0.5'
          },
        },
        { 
          event: 'onMouseLeave', 
          method: (e) => {
            if (e.target.attributes.enabled.value === 'false') return

            e.target.style.opacity = '1'
          }, 
          target: 'loginButton' }
      ]
    })

    this.setState({event: event})
  }

  handleSubmit (event) {

    event.preventDefault()
  }

  render() {

    return (
      <form style={styles.formContainer} onSubmit={this.handleSubmit}>
      
        <div style={styles.titleContainer}>
          <FaCloud size={'2.5em'} color={'rgb(58, 61, 80)'} style={{marginRight: '15px'}}/>
          <h1 style={styles.title}>mello cloud</h1>
        </div>

        <div>
          
          <div style={styles.inputContainers}>
            
            <div style={styles.error}>{this.state.emailError}</div>
            <div style={styles.formLabels}>Email:</div>
            
            <input 
              type='text'
              name='email'
              autoComplete='off'
              value={this.state.email}
              style={styles.formInputs}
              onChange={(e) => {
                
                this.setState({email: e.target.value})
              }} 
              onFocus={(e) => {

                this.setState({emailError: ''})

                e.target.style.outline = 'none'
                e.target.style.borderBottom = '1px solid'
                e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
              }}
              onBlur={(e) => {

                if (!this.state.email) {
                  
                  this.setState({
                    emailError: 'Email cannot be empty.'
                  })

                  e.target.style.outline = 'solid 1px red'
                  e.target.style.border = 'none'

                } else {
                  
                  e.target.style.outline = 'none'
                  e.target.style.borderBottomColor = '#ccc'
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
              autoComplete='off'
              style={styles.formInputs}
              onChange={(e) => this.setState({password: e.target.value})}
              onFocus={(e) => {

                this.setState({passwordError: ''})

                e.target.style.outline = 'none'
                e.target.style.borderBottom = '1px solid'
                e.target.style.borderBottomColor = 'rgb(0, 122, 255)'
              }}
              onBlur={(e) => {

                if (!this.state.password) {
                  
                  this.setState({
                    passwordError: 'Password cannot be empty.'
                  })

                  e.target.style.outline = 'solid 1px red'
                  e.target.style.border = 'none'

                } else {
                  
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
              style={styles.singUpLink}
              onMouseEnter={(e) => e.target.style.color = 'rgb(0, 122, 255)'}
              onMouseLeave={(e) => e.target.style.color = '#444'}
              >
              Forgot Account?
            </Link>
          </div>

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
    width: '500px',
    minHeight: '400px',
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
    color: '#444'
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
    borderBottom: '1px solid #ccc'
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
  singUpLink: {
    color: '#444',
    display: 'inline-block',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: '17px'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
}