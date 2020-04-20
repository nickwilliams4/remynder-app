import React from 'react'
import ApiContext from '../ApiContext'
import { findNote } from '../HelperFunctions'
import './NoteContent.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NoteContent extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { notes } = this.context
    const { note_id } = this.props.match.params
    const note = findNote(notes, +note_id) || {}
    return (
      <div className='NoteContentPage'>
        <div className='Note_title'>{note.title}</div>
        <h4 className='NoteContent'>{note.content}</h4>
        <div className='Note__dates'>
          <div className='Note__dates-created'>
            Created:
          {' '}
            <span className='Date'>
              {moment(note.created).format('MMM Do YYYY')}
            </span>
          </div>
        </div>
        <p>Remynder: Every {note.remynder} hours</p>
        <Link to='/NotePage'>
          <button className='back-button'>
            <FontAwesomeIcon icon='angle-double-left' className="back-button-icon"/>
            Back
          </button>
        </Link>
      </div>
    )
  }
}