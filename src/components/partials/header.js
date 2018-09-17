import React, { Component } from 'react'
import { FaBars, FaTimes, FaCloud } from 'react-icons/fa'

import { NavLink, Link } from 'react-router-dom'

import { userLogout } from '../../actions/userActions'

import { createEvents } from '../../api/eventListener'

export default class Header extends Component {

  constructor() {

    super()

    this.hover = this.hover.bind(this)
    this.goToLogin = this.goToLogin.bind(this)

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
        { event: 'onTouchEnd', method: () => {this.setState(prevState => ({navOpen: !prevState.navOpen}))}, target: 'navOpenMobile'},
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

  render() {

    let navItems = [
      {name: 'Home', key: 'Home', to: '/'},
      {name: 'About', key: 'About', to: '/about'},
      {name: 'Terms', key: 'Terms', to: '/terms'},
      {name: 'Contact', key: 'Contact', to: '/contact'}
    ]

    return (
      <div style={styles.headingContainer}>
        <div style={styles.headingSubContainer}>
          <FaCloud size={'2.5em'} color={'white'} style={{marginRight: '15px'}}/>
          <h1
            {...this.state.event.goHome}
            style={styles.heading}
            >
            mello cloud
          </h1>
        </div>
        <nav
          {...this.state.event.navOpenDesktop}
          style={styles.nav}
          >
          <div style={{color: 'white'}}>
            <div style={{fontSize: '13px'}}>Welcome {!this.props.user.loggedIn ? '' : this.props.user['first_name']}</div>
            <div style={{fontSize: '15px', fontWeight: 'bold'}}>View menu {!this.props.user.loggedIn ? '' : '& your account'}</div>
          </div>
          { !!this.state.navOpen ? 
            <FaTimes
              {...this.state.event.navOpenMobile}
              style={styles.icon}
              size={'1.3em'}
              />
            :
            <FaBars
              {...this.state.event.navOpenMobile}
              style={styles.icon}
              size={'1.3em'}
              />            
          }       
          { !!this.state.navOpen &&

            <ul style={styles.navUl}>

              <div style={styles.triangle} />

              <h3>Menu</h3>
              
                {navItems.map(item => {
                  return (
                  <div key={item.key}>
                    <li style={styles.liItems} key={item.key}>
                      <NavLink
                        exact
                        onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                        to={item.to}
                        activeStyle={styles.active}
                        className="navLinks"
                        >
                        {item.name}
                      </NavLink>
                    </li>
                  </div>
                  )
                })}
              <hr 
                style={styles.hrLine}
              />
              { !this.props.user.loggedIn ?

                <div style={styles.verificatoinContainer}>
                  <div
                    {...this.state.event.logInButton}
                    style={styles.logInButton}
                    >
                    Log In
                  </div>
                  <Link 
                    to='/account/signup'
                    style={styles.singUpLink}
                    onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                    onMouseEnter={(e) => e.target.style.color = 'rgb(0, 122, 255)'}
                    onMouseLeave={(e) => e.target.style.color = '#444'}
                    >
                    Dont have an account?
                  </Link>
                </div>
                :
                <div style={styles.verificatoinContainer}>

                  <div
                    style={styles.logInButton}
                    onClick={() => {
                      localStorage.removeItem('user')
                      this.props.dispatch(userLogout())
                      this.props.history.push('/')
                      this.setState(prevState => ({navOpen: !prevState.navOpen}))
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                    Log Out
                  </div>
                </div>
              }
              </ul>
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
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    display: 'inline-block',
    cursor: 'pointer'
  },
  navButton: {
    color: 'white',
    cursor: 'pointer',
    backgroundColor: 'green'
  },
  icon: {
    marginLeft: '15px',
    color: 'white'
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