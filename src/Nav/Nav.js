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
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className="Header nav-link">
        Logout
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <>
        <Link
          to='/SignUpForm'
          className='register Header'>
          Register
        </Link>
        <Link
          to='/ReturningUser'
          className='register'>
          Login
        </Link>
      </>
    )
  }

  render() {
    return (
      <nav className='Nav'>
        <Link to='/' className='remynder nav-link'>
          Remynder
        </Link>
        {this.context.loggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}