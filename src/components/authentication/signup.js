import React, { Component } from 'react'
import { FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { signup } from '../../actions/userActions'
import { filterEvents } from '../../actions/eventActions'

import events from '../../events/signup'

import Nameinputs from './nameInputs'
import Emailinput from './emailinput'
import Passwordinput from './passwordinput'

export default class Signup extends Component {

  constructor (props) {

    super(props)

    let boundEvents = events.bind(this)()

    this.props.dispatch(filterEvents(boundEvents, this.props.config, 'Signup'))

    this.signup = signup.bind(this)
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
      events: {},
      hoverLogo: false,
      focused: false,
      step: 1,
      alreadyTouched: false
    }
  }

  componentWillUnmount() {

    if (this.state.focused !== false) {
      this.state.focused.blur()
    }
  }

  componentDidMount() {

    console.log('mount', this.props)
  }

  handleSubmit() {

    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password || !this.state.passwordRepeat) {

      return

    } else {
      
      this.props.dispatch(this.signup())
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

    if (this.props.events.Signup !== undefined) {

      return (

        <form style={Object.assign({}, styles.formContainer, this.props.config.device !== 'mobile' ? {width: '450px', maxWidth: '450px'} : {width: '95%', maxWidth: '95%'})}>
        
          <div style={styles.titleContainer}>
            
            <FaCloud size={'2.5em'} color={!this.state.hoverLogo ? 'rgb(58, 61, 80)' : '#ccc'} style={{marginRight: '15px'}}/>

            <h1 {...this.props.events.Signup.logoGoHome} style={styles.title}>mello cloud</h1>

            <div style={styles.error}>{this.props.user.error}</div>

          </div>

          <div style={{width: this.props.config.device !== 'mobile' ? '65%' : '95%' }}>

            {component}

          </div>

        </form>
      )

    } else {

      return ( null )
    }

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