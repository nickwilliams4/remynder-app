import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotePage.css'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import config from '../config'
import TokenService from '../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <main role="main" className="note-page-container">
        <header role="banner">
          <h1>Your Remynders</h1>
        </header>
        <div>
          
        </div>
        <section className="create-new-reminder">
            <h2 className='create-new-reminder-heading'>Create New Remynder</h2>
            <Link to='/AddNote'>
              <button className="new-reminder-button">New Remynder
              <FontAwesomeIcon icon='plus-circle' className="button-icon"/>
              </button>
            </Link>
        </section>
        <section className='NoteList'>
          <ul className="notes-container">
            {notes.map(note =>
              <li key={note.id} className="note-list-item">
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