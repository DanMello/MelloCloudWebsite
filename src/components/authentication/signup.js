import React, { Component } from 'react'
import { FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { userLogin } from '../../actions/userActions'

import Nameinputs from './nameInputs'
import Emailinput from './emailinput'
import Passwordinput from './passwordinput'

import { createEvents } from '../../api/eventListener'

export default class Signup extends Component {

  constructor () {

    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
      error: '',
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
      passwordRepeatError: '',
      event: {},
      hoverLogo: false,
      focused: false,
      step: 1,
    }
  }

  componentWillMount() {

    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: () => {this.props.history.push('/')}, target: 'logoGoHome'},
      ],
      mobileClick: [
        { event: 'onClick', method: this.handleSubmit, target: 'button'},
        { event: 'onClick', method: () => { this.props.history.push('/') }, target: 'logoGoHome'}
      ],
      desktop: [
        { event: 'onClick', method: () => {this.props.history.push('/')}, target: 'logoGoHome'},
        { event: 'onMouseEnter', method: () => {this.setState({hoverLogo: true})}, target: 'logoGoHome'},
        { event: 'onMouseLeave', method: () => {this.setState({hoverLogo: false})}, target: 'logoGoHome' }
      ]
    }, this.props.config)

    this.setState({event: event})
  }

  componentWillUnmount() {

    if (this.state.focused !== false) {
      this.state.focused.blur()
    }
  }

  handleSubmit(e) {

    e.preventDefault()

    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password || !this.state.passwordRepeat) {

      return

    } else {
      
      fetch(this.props.config.url + '/account/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        })

      }).then(res => {

        return res.json()

      }).then(resJson => {

        if (resJson.error) {

          this.setState({error: resJson.message})

        } else {

          console.log(JSON.stringify(resJson))

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

    let component

    switch (this.state.step) {
      case 1:
        component = <Nameinputs state={this.state} thisRef={this} config={this.props.config}/>
        break
      case 2:
        component = <Emailinput state={this.state} thisRef={this} config={this.props.config}/>
        break
      case 3:
        component = <Passwordinput state={this.state} thisRef={this} config={this.props.config}/>
        break
    }

    return (

      <form onSubmit={this.handleSubmit} style={Object.assign({}, styles.formContainer, this.props.config.device !== 'mobile' ? {width: '450px', maxWidth: '450px'} : {width: '95%', maxWidth: '95%'})}>
      
        <div style={styles.titleContainer}>
          
          <FaCloud size={'2.5em'} color={!this.state.hoverLogo ? 'rgb(58, 61, 80)' : '#ccc'} style={{marginRight: '15px'}}/>

          <h1 {...this.state.event.logoGoHome} style={styles.title}>mello cloud</h1>

        </div>

        <div style={{width: this.props.config.device !== 'mobile' ? '65%' : '95%' }}>

          {component}

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
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center'
  }
}