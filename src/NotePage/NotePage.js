import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'
import './NotePage.css'

export default class NotePage extends Component {
  render() {
    return (
      <Content className='notes'>
        <main role="main">
          <header role="banner">
            <h1>Your Remynders</h1>
          </header>
          <section>
            <header>
              <h2 className='newRemynder'>Create New Remynder</h2>
              <Link to='/AddNote'>
              <button>New Reynder</button>
              </Link>
            </header>
          </section>
            <section>
              <header>
                <h2>Jamaica</h2>
                <p>Created: 2/24/2020</p>
              </header>
              <p>Look into taking a vacation sometime in the near future</p>
              <button>Edit</button>
              <button>Delete</button>
            </section>
            <section>
              <header>
                <h2>Dentist</h2>
                <p>Created: 2/28/2020</p>
              </header>
              <p>Make a dentist appointment for April</p>
              <button>Edit</button>
              <button>Delete</button>
            </section>
            <section>
              <header>
                <h2>Call Jane at Home Designs</h2>
                <p>Created: 3/12/2020</p>
              </header>
              <p>Call Jane to schedule coming to the house for interior design ideas</p>
              <button>Edit</button>
              <button>Delete</button>
            </section>
            <section>
              <header>
                <h2>Novel idea</h2>
                <p>Created: 3/14/2020</p>
              </header>
              <p>New idea for a novel: We land on Jupiter only to discover that's where the dinosaurs really went.</p>
              <button>Edit</button>
              <button>Delete</button>
            </section>
    </main>
      </Content>
    )
  }
}