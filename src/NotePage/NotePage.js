import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotePage.css'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'

export default class NotePage extends Component {
  static contextType = ApiContext

  render() {
    const { notes = [] } = this.context
    return (
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
        <section className='NoteList'>
          <ul>
            {notes.map(note =>
              <li key={note.id}>
                <Note
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  created={note.created}
                  remynder={note.remynder}
                />
              </li>
            )}
          </ul>
        </section>
      </main>
    )
  }
}