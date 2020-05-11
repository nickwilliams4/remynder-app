import React, { Component } from 'react'
import Content from '../Content/Content'
import EmailRemynders from './EmailRemynders.png'
import RemynderFrequency from './RemynderFrequency.png'
import RemyndersList from './RemyndersList.png'

export default class HomePageContent extends Component {
  render() {
    return (
      <Content className='HomePageContent'>
        <header role="banner" className="main-heading">
          <h1>Remynder</h1>
          <h2 className='tagline'>get things done.</h2>
        </header>
        <section className="section">
          <header>
            <h3 className='sectionHeaders'>Organize tasks</h3>
          </header>
          <img src={RemyndersList} className="remyndersList" alt="List view of Remynders" />
          <p>Remynder helps you create notes or tasks to be completed.</p>
        </section>
        <section className="section">
          <header>
            <h3 className='sectionHeaders'>Get remynders</h3>
          </header>
          <img src={RemynderFrequency} className="remynderFrequency" alt="çRemynder frequency dropdown" />
          <p>What sets this app apart is the ability to receive an email of your note or task directly to your inbox after creating a remynder, and how often you want to receive email remynders after that.</p>
        </section>
        <section className="section">
          <header>
          
            <h3 className='sectionHeaders'>Keep remynders coming</h3>
          </header>
          <img src={EmailRemynders} className="emailRemynders" alt="List view of Emailed Remynders" />
          <p>We check our emails dozens of times a day.  Remynder streamlines the process of getting task notifications into one location so there's no need to check multiple applications.</p>
        </section>
        <section className="section">
          <header>
            <h3 className='sectionHeaders'>Click the "Register" link at the top of the page and start maximizing your productivity now!</h3>
          </header>
          </section>
      </Content>
    )
  }
}