import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'

export default class ReturningUser extends Component {
  render() {
    return (
      <Content className='ReturningUser'>
        <main role="main">
          <header>
            <h1>Welcome Back!</h1>
          </header>
          <h3>Please Log In</h3>
          <form class='login-form'>
              <div>
                <label for="username">Email: </label>
                <input type="text" name='username' id='username' placeholder="john@lennon.com" />
              </div>
              <div>
                <label for="password">Password: </label>
                <input type="password" name='password' id='password' />
              </div>
              <Link to='/NotePage'>
                <button type='submit'>Log In</button>
              </Link>
            </form>
        </main>
      </Content>
    )
  }
}