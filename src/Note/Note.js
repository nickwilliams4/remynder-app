import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import moment from 'moment'
import './Note.css'
import TokenService from '../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Note extends Component {
  static defaultProps = {
    onDeleteNote: () => { },
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const note_id = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${note_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        if (!res.ok)
          return Promise.reject('Could not delete')
      })
      .then(() => {
        this.context.deleteNote(note_id)
        this.props.onDeleteNote(note_id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { title, id, created, content, remynder } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {title}
          </Link>
        </h2>
        <h4>{content}</h4>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Created:
          {' '}
            <span className='Date'>
              {moment(created).format('MMM Do YYYY')}
            </span>
          </div>
        </div>
        <div className='Note__Content'>
        </div>
        <p>Remynder: Every {remynder} hours</p>
        <Link to={`edit/${id}`}>
          <button
            className='Note_edit reminder-action-button'
            type='button'
          >
            {''}
          Edit
          <FontAwesomeIcon icon='edit' className="button-icon"/>
        </button>
        </Link>
        <button
          className='Note__delete reminder-action-button'
          type='button'
          onClick={this.handleClickDelete}
        >
          {' '}
        Delete
        <FontAwesomeIcon icon='trash-alt' className="button-icon"/>
        </button>
      </div>
    )
  }
}

