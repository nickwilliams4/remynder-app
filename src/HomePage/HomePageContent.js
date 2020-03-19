import React, { Component } from 'react'
import Content from '../Content/Content'

export default class HomePageContent extends Component {
  render() {
    return (
      <Content className='HomePageContent'>
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
          </section>
      </Content>
    )
  }
}