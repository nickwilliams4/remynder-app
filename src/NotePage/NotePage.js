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
          {this.props.notes.map(note =>  <section>
              <header>
                <h2>{note.title}</h2>
                <h4>{note.content}</h4>
                <p>Created: {note.created}</p>
                <p>Remynder: {note.remynder}</p>
              </header>
              <button>Edit</button>
              <button>Delete</button>
            </section>)}
    </main>
      </Content>
    )
  }
}