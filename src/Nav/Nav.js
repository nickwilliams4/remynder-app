import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TokenService from '../services/token-service'
import './Nav.css'
import ApiContext from '../ApiContext'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.updateLoggedIn(false)
  }

  static contextType = ApiContext;

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
        <div className='register'>
          <Link
            to='/SignUpForm'>
            Register
        </Link>
        </div>
        <Link
          to='/ReturningUser'>
          Log In
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Nav'>
        <div className='remynder'>
          <Link to='/'>
            Remynder
        </Link>
        </div>
          {this.context.loggedIn
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
      </nav>
    )
  }
}