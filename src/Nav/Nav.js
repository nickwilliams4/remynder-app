import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { Hyph } from '../Utils/Utils'
import TokenService from '../services/token-service'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
         <Link
          to='/SignUpForm'>
          Register
        </Link>
        <Link
          to='/ReturningUser'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Nav'>
        <Link to='/'>
          Remynder
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}