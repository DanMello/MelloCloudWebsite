import React, { Component } from 'react'
import { FaBars, FaTimes, FaCloud } from 'react-icons/fa'

import { NavLink, Link } from 'react-router-dom'

export default class Header extends Component {

  constructor() {

    super()

    this.state = {
      navOpen: false,
      loggedIn: false,
      hover: false
    }
  }

  render() {

    let navItems = [
      {name: 'Home', key: 'Home', to: '/'},
      {name: 'About', key: 'About', to: '/about'}
    ]

    return (
      <div style={styles.headingContainer}>
        <div style={styles.headingSubContainer}>
          <FaCloud size={'2.5em'} color={'white'} style={{marginRight: '15px'}}/>
          <h1 
            style={styles.heading}
            >
            mello cloud
          </h1>
        </div>
        <nav
          style={styles.nav}
          onTouchStart={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
          onMouseEnter={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
          onMouseLeave={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
          >
          <div style={{color: 'white'}}>
            <div style={{fontSize: '17px'}}>Welcome</div>
            <div style={{fontSize: '13px', textAlign: 'right'}}>View menu</div>
          </div>
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
              { !this.state.loggedIn && this.props.location.pathname !== '/account/login' &&  this.props.location.pathname !== '/account/signup' &&

                <div style={styles.verificatoinContainer}>
                  <Link
                    to='/account/login'
                    style={styles.logInButton}
                    onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                    Log In
                  </Link>
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
              }
              { !this.state.loggedIn && this.props.location.pathname === '/account/login' &&


                <div style={styles.verificatoinContainer}>

                  <div style={styles.question}>Need an account?</div>

                  <Link
                    to='/account/signup'
                    style={styles.signupButton}
                    onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                    Sign up
                  </Link>
                </div>
              }
              { !this.state.loggedIn && this.props.location.pathname === '/account/signup' &&

                <div style={styles.verificatoinContainer}>

                  <div style={styles.question}>Already have an account?</div>

                  <Link
                    to='/account/login'
                    style={styles.logInButton}
                    onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                    Log In
                  </Link>
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
    display: 'inline-block'
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