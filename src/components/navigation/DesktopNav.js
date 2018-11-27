import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Link } from 'react-router-dom'

import './navigation.css'

let navItems = [
  {name: 'Home', key: 'Home', to: '/'},
  {name: 'About', key: 'About', to: '/about'},
  {name: 'Terms', key: 'Terms', to: '/terms'},
  {name: 'Contact', key: 'Contact', to: '/contact'}
]

let loggedInNavItems = [
  {name: 'Manage Account', key: 'Manage Account', to: '/settings'},
]

class DesktopNav extends Component {

  render() {

    let loggedIn = this.props.LoggedIn

    return (

      <ul className={'nav-navUl'}>
        
        <div className={'nav-triangle'} />

        <div className='nav-separator'>

          <div className={'nav-listContainer'}>
            
            <h3>Menu</h3>

            {navItems.map(item => {

              return (
                <div key={item.key}>
                  <li className={'nav-liItems'}>
                    <NavLink
                      exact
                      to={item.to}
                      className={'nav-NavLinks'}
                      activeClassName={'nav-activeLink'}
                      onClick={this.props.toggleNav}
                      > 
                      {item.name}
                    </NavLink>
                  </li>
                </div>
              )
            })}

          </div>

          {loggedIn && <div className="nav-vl" />}
          
          {loggedIn &&

            <div className={'nav-listContainer'}>

              <h3>Account</h3>

               {loggedInNavItems.map(item => {

                return (
                  <div key={item.key}>
                    <li className={'nav-liItems'}>
                      <NavLink
                        exact
                        to={item.to}
                        className={'nav-NavLinks'}
                        activeClassName={'nav-activeLink'}
                        onClick={this.props.toggleNav}
                        > 
                        {item.name}
                      </NavLink>
                    </li>
                  </div>
                )
              })}

            </div>
        }
        </div>

        <div className={'nav-line'}/>

        {loggedIn ? 

          <div className={'nav-button hoverButton'} onClick={this.props.logOut}>
            <span>Log out</span>
          </div>
          :
          <div>
            <Link className={'nav-button hoverButton '} to='/account/login' onClick={this.props.toggleNav}>
              <div className='nav-buttonText'>Log in</div>
            </Link>
            <div className='nav-signuplink-container'>
              <Link to={'/account/signup'}className='link nav-signuplink' onClick={this.props.toggleNav}>
                Don't have an account?
              </Link>
            </div>
          </div>
        }
      </ul>
    )
  }
}

export default hot(module)(DesktopNav)