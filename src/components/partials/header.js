import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  constructor() {

    super()

    this.state = {
      navOpen: false,
      loggedIn: false
    }
  }

  render() {

    let navItems = [
      {name: 'Home', key: 'Home', to: '/'},
      {name: 'About', key: 'About', to: '/about'}
    ]

    return (
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>mello cloud</h1>
          <nav
            style={styles.nav}
            onMouseEnter={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
            onMouseLeave={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
            >
          <span>Welcome</span> 
          <FaBars
            style={{marginLeft: '10px'}}
            size={'1em'}
            />
            { !!this.state.navOpen &&

              <ul style={styles.navUl}>

                <div style={styles.triangle} />

                <h3 style={{color: 'black'}}>Menu</h3>
                
                {navItems.map(item => {
                  return (
                    <div key={item.key}>
                      <li style={styles.liItems} key={item.key}>
                        {item.icon}
                        <NavLink
                          exact
                          onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
                          to={item.to}
                          activeStyle={{
                            color: 'rgb(0, 122, 255)',
                            textDecorationLine: 'underline' 
                          }}
                          className="navLinks"
                          >
                          {item.name}
                        </NavLink>
                      </li>
                    </div>
                  )
                })}

                <hr 
                  style={{marginTop: '15px', marginBottom: '15px'}}
                />

                { !this.state.loggedIn ?

                  <div style={{textAlign: 'center'}}>
                    <div style={{
                      backgroundColor: 'rgb(58, 61, 80)', 
                      padding: '10px', 
                      borderRadius: '5px',
                      boxShadow: '1px 1px 1px #ccc',
                      textAlign: 'initial',
                      cursor: 'pointer'
                      }}>
                      Log In
                    </div>
                    <a href='/signUp' className='needAccountLink'>Dont have an account?</a>
                  </div>
                  : 
                  <h1 style={{color: 'black'}}>log out</h1>
                }

              </ul>
            }
          </nav>
      </div>
    )
  }
}

const styles = {
  headingContainer: {
    backgroundColor: 'rgb(58, 61, 80)',
    height: '65px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    color: 'white',
    fontFamily: 'sans-serif',
    marginLeft: '10px'
  },
  navButton: {
    color: 'white',
    cursor: 'pointer',
    backgroundColor: 'green'
  },
  nav: {
    color: 'white',
    display: 'flex', 
    alignItems: 'center', 
    fontSize: '20px', 
    fontFamily: 'sans-serif',
    cursor: 'default',
    height: '100%',
    position: 'relative'
  },
  navUl: {
    position: 'absolute', 
    backgroundColor: 'white',
    top: '100%',
    right: -15,
    width: '300px',
    padding: '20px',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    boxShadow: '2px 2px 2px #ccc',
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
    display: 'inline-block'
  },
}

  //midnight blue 'rgb(58, 61, 80)'
  //light blue 'rgb(154, 218, 232)'
  //rose gold 'rgb(212,174,157)'