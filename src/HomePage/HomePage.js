import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <Content className='HomePage'>
        <main role="main">
          <header role="banner">
            <h1>Remynder</h1>
            <h2>get things done.</h2>
          </header>
          <section>
            <header>
              <h3>Organize tasks</h3>
            </header>
            <p>[<em>placeholder for screenshot of list of notes and/or folders of notes</em>]</p>
            <p>Remynder helps you create notes or tasks to be completed.</p>
          </section>
          <section>
            <header>
              <h3>Get remynders</h3>
            </header>
            <p>[<em>placeholder for screenshot of setting frequency of reminder notifications</em>]</p>
            <p>What sets this app apart is the ability to receive an email of your note or task directly to your inbox after creating a remynder, and how often you want to to receive email remynders after that.</p>
          </section>
          <section>
            <header>
              <h3>Keep remynders coming</h3>
            </header>
            <p>[<em>placeholder for screenshot of emailed reminders</em>]</p>
            <p>If you are like most of us, you are constantly checking your inbox. This application will make you more productive by sending your remynders to a spot you are already checking many times a day.</p>
          </section>
          <section>
            <header>
              <h3>Up Your Production Now</h3>
            </header>
            <form class='signup-form'>
              <div>
                <label for="first-name">First name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
              </div>
              <div>
                <label for="last-name">Last name</label>
                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
              </div>
              <div>
                <label for="username">Email</label>
                <input type="text" name='username' id='username' placeholder="john@lennon.com" />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <Link to='/NotePage'>
                <button type='submit'>Sign Up</button>
              </Link>
            </form>
          </section>
        </main>
      </Content>
    )
  }
}