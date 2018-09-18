import React, { Component } from 'react'
import { FaBars, FaTimes, FaCloud } from 'react-icons/fa'

import { createEvents } from '../../api/eventListener'

import DesktopNav from './desktopNav'
import MobileNav from './mobileNav'

export default class Header extends Component {

  constructor(props) {

    super(props)

    this.hover = this.hover.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.toggleNav = this.toggleNav.bind(this)

    this.state = {
      navOpen: false,
      loggedIn: false,
      event: {}
    }
  }

  componentWillMount () {
    
    let event = createEvents({
      mobileTouch: [
        { event: 'onTouchEnd', method: () => {this.props.history.push('/')}, target: 'goHome'},
        { event: 'onTouchEnd', method: this.toggleNav, target: 'navOpenMobile'},
        { event: 'onTouchEnd', method: this.goToLogin, target: 'logInButton'},
      ],
      mobileClick: [
        { event: 'onClick', method: () => {this.props.history.push('/')}, target: 'goHome'},
        { event: 'onClick', method: () => {this.setState(prevState => ({navOpen: !prevState.navOpen}))}, target: 'navOpenMobile'},
        { event: 'onClick', method: this.goToLogin, target: 'logInButton'},
      ],
      desktop: [
        { event: 'onClick', method: () => {this.props.history.push('/')}, target: 'goHome'},
        { event: 'onMouseEnter', method: () => {this.setState(prevState => ({navOpen: !prevState.navOpen}))}, target: 'navOpenDesktop'},
        { event: 'onMouseLeave', method: () => {this.setState(prevState => ({navOpen: !prevState.navOpen}))}, target: 'navOpenDesktop'},
        { event: 'onClick', method: () => {this.props.history.push('/account/login')}, target: 'logInButton'},
        { event: 'onMouseEnter', method: this.hover, target: 'logInButton'},
        { event: 'onMouseLeave', method: this.hover, target: 'logInButton'},
      ]
    }, this.props.config)

    this.setState({ event: event })
  }

  hover (e) {

    if (e.type === 'mouseenter') e.target.style.opacity = '0.5'
    if (e.type === 'mouseleave') e.target.style.opacity = '1'
  }

  goToLogin (e) {

    e.preventDefault()

    this.props.history.push('/account/login')
  }

  toggleNav (e) {

    e.preventDefault()
    
    this.setState(prevState => ({navOpen: !prevState.navOpen}))
  }

  render() {

    let welcome
    let filler

    switch (this.props.config.device) {
      case 'desktop':
        welcome = (
          <div style={{color: 'white'}}>
            <div style={{fontSize: '13px'}}>Welcome {!this.props.user.loggedIn ? '' : this.props.user.profile['first_name']}</div>
            <div style={{fontSize: '15px', fontWeight: 'bold'}}>View menu {!this.props.user.loggedIn ? '' : '& your account'}</div>
          </div>
        )
        break
      case 'mobile': 
        filler = <div style={{flexGrow: 1, flexBasis: 0, flexShrink: 0}}/>
        break
    }

    return (
      
      <div style={styles.headingContainer}>

        {filler}

        <div style={Object.assign({}, styles.headingSubContainer, this.props.config.device === 'mobile' && {flexGrow: 3, flexBasis: 0, flexShrink: 0, fontSize: '11px'} )}>
          <FaCloud size={'2.5em'} color={'white'} style={{marginRight: '15px'}}/>
          <h1 {...this.state.event.goHome} style={styles.heading}>mello cloud</h1>
        </div>

        <nav
          {...this.state.event.navOpenDesktop}
          style={Object.assign({}, styles.nav, this.props.config.device === 'mobile' && {flexGrow: 1, flexBasis: 0, flexShrink: 0, justifyContent: 'flex-end', paddingRight: '15px'} )}
          >
          {welcome}
          <div {...this.state.event.navOpenMobile} style={{padding: '10px', display: 'flex'}}>
          { !!this.state.navOpen ?
            <FaTimes
              style={styles.icon}
              size={'1.3em'}
              />
            :
            <FaBars
              style={styles.icon}
              size={'1.3em'}
              />            
          }
          </div>

          { !this.state.navOpen ? null
            : ( this.props.config.device === 'mobile' ?
                <MobileNav userLoggedIn={this.props.user.loggedIn} toggleNav={this.toggleNav} events={this.state.event} dispatch={this.props.dispatch} />
                :
                <DesktopNav userLoggedIn={this.props.user.loggedIn} toggleNav={this.toggleNav} events={this.state.event} dispatch={this.props.dispatch}/>
              )
          }
          </nav>
      </div>
    )
  }
}

const styles = {
  active: {
    color: 'rgb(0, 122, 255)',
    textDecorationLine: 'underline'
  },
  headingContainer: {
    backgroundColor: 'rgb(58, 61, 80)',
    height: '65px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxShadow: '0px 2px 10px rgba(0,0,0,.2)',
  },
  headingSubContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    color: 'white',
    display: 'block',
    cursor: 'pointer'
  },
  navButton: {
    color: 'white',
    cursor: 'pointer',
    backgroundColor: 'green'
  },
  icon: {
    color: 'white',
  },
  nav: {
    display: 'flex', 
    alignItems: 'center', 
    fontSize: '20px', 
    cursor: 'default',
    height: '100%',
    position: 'relative'
  },
  navUl: {
    zIndex: '999',
    position: 'absolute', 
    backgroundColor: 'white',
    top: '100%',
    right: -15,
    width: '300px',
    padding: '20px',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    boxShadow: '0px 2px 10px rgba(0,0,0,.2)',
    listStyleType: 'none',
  },
  triangle: {
    width: 0, 
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid white',
    position: 'absolute',
    bottom: '100%',
    right: 50
  },
  liItems: {
    color: 'black',
    cursor: 'pointer',
    display: 'inline-block',
    marginTop: '3px',
    marginBottom: '3px',
  },
  hrLine: {
    marginTop: '15px', 
    marginBottom: '15px'
  },
  logInButton: {
    display: 'block',
    backgroundColor: 'rgb(58, 61, 80)',
    padding: '10px',
    color: 'white',
    textDecorationLine: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 1px #ccc',
    cursor: 'pointer',
  },
  signupButton: {
    display: 'block',
    backgroundColor: 'rgb(212,174,157)',
    padding: '10px',
    color: 'white',
    textDecorationLine: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 1px #ccc',
    cursor: 'pointer',
  },
  singUpLink: {
    color: '#444',
    marginTop: '15px',
    display: 'inline-block',
    textDecorationLine: 'underline',
    fontSize: '17px'
  },
  verificatoinContainer: {
    textAlign: 'center'
  },
  question: {
    fontSize: '17px',
    marginBottom: '15px', 
    color: '#444'
  }
}

  //midnight blue 'rgb(58, 61, 80)'
  //light blue 'rgb(154, 218, 232)'
  //rose gold 'rgb(212,174,157)'