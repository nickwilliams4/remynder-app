import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'

export default class HomePageContent extends Component {
  render() {
    return (
      <Content className='HomePageContent'>
        <section>
          <form class='signup-form'>
            <div>
              <label for="first-name">First name: </label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name: </label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="username">Email: </label>
              <input type="text" name='username' id='username' placeholder="john@lennon.com" />
            </div>
            <div>
              <label for="password">Password: </label>
              <input type="password" name='password' id='password' />
            </div>
            <Link to='/NotePage'>
              <button type='submit'>Sign Up</button>
            </Link>
          </form>
        </section>
      </Content>
    )
  }
}