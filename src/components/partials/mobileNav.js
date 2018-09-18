import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { userLogout } from '../../actions/userActions'

export default class DesktopNav extends Component {

  constructor() {

    super()

    this.logOut = this.logOut.bind(this)
  }

  logOut() {

    this.props.dispatch(userLogout())
  }
  
  render () {

    let navItems = [
      {name: 'Home', key: 'Home', to: '/'},
      {name: 'About', key: 'About', to: '/about'},
      {name: 'Terms', key: 'Terms', to: '/terms'},
      {name: 'Contact', key: 'Contact', to: '/contact'}
    ]

    return (

      <ul style={styles.navUl}>

        <div style={styles.triangle} />

        <h3>Menu</h3>
        
          { navItems.map(item => {
            return (
            <div key={item.key}>
              <li style={styles.liItems} key={item.key}>
                <NavLink
                  exact
                  onClick={this.toggleNav}
                  to={item.to}
                  activeStyle={styles.active}
                  className="navLinks">
                  {item.name}
                </NavLink>
              </li>
            </div>
            )
          }) 
        }
        
        <hr style={styles.hrLine} />

        { !this.props.userLoggedIn ?

          <div style={styles.verificatoinContainer}>

            <div {...this.props.events.logInButton} style={styles.logInButton}>
              Log In
            </div>

            <Link 
              to='/account/signup'
              style={styles.singUpLink}
              onClick={this.toggleNav}
              onMouseEnter={(e) => e.target.style.color = 'rgb(0, 122, 255)'}
              onMouseLeave={(e) => e.target.style.color = '#444'}>
              Dont have an account?
            </Link>

          </div>

          :

          <div style={styles.verificatoinContainer}>

            <div
              style={styles.logInButton}
              onClick={this.logOut}
              onMouseEnter={(e) => e.target.style.opacity = '0.5'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
              Log Out
            </div>
          </div>
        }
      </ul>
    )
  }
}

const styles = {
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
  singUpLink: {
    color: '#444',
    marginTop: '15px',
    display: 'inline-block',
    textDecorationLine: 'underline',
    fontSize: '17px'
  },
  verificatoinContainer: {
    textAlign: 'center'
  }
}