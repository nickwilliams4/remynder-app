import React from 'react'
import ApiContext from '../ApiContext'
import { findNote } from '../HelperFunctions'
import moment from 'moment'

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
    const note = findNote(notes, note_id) || {}
    console.log(note_id)
    return (
      <div className='NotePageNav'>
        <div className='Note_title'>{note.title}</div>
        <h4>{note.content}</h4>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified: 
          {' '}
          <span className='Date'>
            {moment(note.created).format('MMM Do YYYY')}
          </span>
        </div>
      </div>
      <div className='Note__Content'>
      </div>
      <p>Remynder: {note.remynder}</p>
      </div>
    )
  }
}