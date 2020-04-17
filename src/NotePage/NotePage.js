import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotePage.css'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import config from '../config'
import TokenService from '../services/token-service'
import SignUpForm from '../SignUpForm/SignUpForm'

export default class NotePage extends Component {
  static contextType = ApiContext

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/notes`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    
      .then((notesRes) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        return notesRes.json();
      })
      .then((notes) => {
        this.context.setNotes( notes );
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const { notes = [] } = this.context
    return (
      <main role="main">
        <header role="banner">
          <h1>Your Remynders</h1>
        </header>
        <div>
          
        </div>
        <section>
          <header>
            <h2 className='newRemynder'>Create New Remynder</h2>
            <Link to='/AddNote'>
              <button>New Remynder</button>
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