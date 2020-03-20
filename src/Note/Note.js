import React, { Component } from 'react'
import Content from '../Content/Content'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import moment from 'moment'

export default class Note extends Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const note_id = this.props.id

    fetch(`${config.API_ENDPOINT}/NotePage/${note_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
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
    const { title, id, modifed } = this.props
    return (
      <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${id}`}>
          {title}
        </Link>
      </h2>
      <button
        className='Note__delete'
        type='button'
        onClick={this.handleClickDelete}
      >
       
        {' '}
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          {/* <span className='Date'>
            {moment(modified).format('Do MMM YYYY')}
          </span> */}
        </div>
      </div>
      <div className='Note__Content'>
      </div>
    </div>
    )
  }
}