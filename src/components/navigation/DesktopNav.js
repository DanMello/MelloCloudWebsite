import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Link } from 'react-router-dom'
import { NavItems } from '../../data/Navigation'
import { userLogout } from '../../actions/userActions'

import './navigation.css'

class DesktopNav extends Component {

  constructor() {
    super()

    this.logOut = this.logOut.bind(this)
  }

  logOut() {

    this.props.dispatch(userLogout())
  }

  render() {

    let loggedIn = this.props.LoggedIn

    return (
      <ul className={'nav-navUl'}>

        <div className={'nav-triangle'} />

        {NavItems.filter(array => {

          return loggedIn ? (array.loginRequired !== false) : (array.loginRequired !== true)

        }).map((list, i, arr) => {

          return (
            <div className='nav-separator' key={list.key}>

              <div className={'nav-listContainer'}>

                <h3 className='nav-listMainHeading'>{list.category}</h3>

                {list.items.filter(array => {

                  return loggedIn ? (array.loginRequired !== false) : (array.loginRequired !== true)

                }).map(item => {

                  let component = {
                    link: (listItem) => {

                      return (
                        <NavLink
                          exact
                          to={listItem.to}
                          className={'nav-NavLinks'}
                          activeClassName={'nav-activeLink'}
                        >
                          {listItem.name}
                        </NavLink>
                      )
                    },
                    button: (listItem) => {

                      return (
                        <div onClick={this[listItem.method]} className={'nav-NavLinks'}>
                          {listItem.name}
                        </div>
                      )
                    }
                  }

                  return (
                    <div key={item.key}>
                      <li
                        className={'nav-liItems'}
                        onClick={this.props.toggleNav}
                        >
                        {component[item.type](item)}
                      </li>
                    </div>
                  )
                  })}

                {arr.length - 1 !== i && <div className='nav-line-desktop' />}

              </div>
            </div>
          )
        })}

      </ul>
    )
  }
}

export default hot(module)(DesktopNav)