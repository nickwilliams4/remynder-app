import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'

export default class HomePageContent extends Component {
  render() {
    return (
      <Content className='HomePageContent'>
        <section>
          <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name: </label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name: </label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email: </label>
              <input type="text" name='username' id='username' placeholder="john@lennon.com" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
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