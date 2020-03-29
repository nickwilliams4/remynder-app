import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { Link } from 'react-router-dom'

const Required = () => (
  <span className='EditNote__required'>*</span>
)

export default class EditNote extends Component {
  static contextType = ApiContext

  state = {
    error: null,
    id: null,
    title: null,
    content: null,
    created: null,
    remynder: null,
  };

  componentDidMount() {
    const note_id = this.props.match.params.note_id
    fetch(`${config.API_ENDPOINT}/notes/${note_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))

        return res.json()
      })
      .then(responseData => {
        this.setState({
          id: responseData.id,
          title: responseData.title,
          content: responseData.content,
          created: responseData.created,
          remynder: responseData.remynder
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleChangeTitle = e => {
    this.setState({ title: e.target.value })
  };

  handleChangeContent = e => {
    this.setState({ content: e.target.value })
  };

  handleChangeRemynder = e => {
    this.setState({ remynder: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault()
    const { note_id } = this.props.match.params
    const { id, title, content, created, remynder } = this.state
    const editNote = { id, title, content, created, remynder}
    fetch(`${config.API_ENDPOINT}/notes/${note_id}`, {
      method: 'PATCH',
      body: JSON.stringify(editNote),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then(() => {
        this.resetFields(editNote)
        this.context.editNote(editNote)
        this.props.history.push('/NotePage')
      })
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || '',
      title: newFields.title || '',
      content: newFields.content || '',
      created: newFields.created || '',
      remynder: newFields.remynder || '',
    })
  }

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    const { error, id, title, content, created, remynder } = this.state
    const note = { id, title, content, created, remynder }
    return (
      <NotFoundPage>
        <section className='EditNote'>
          <main role="main">
            <header>
              <h1>Edit Remynder</h1>
            </header>
            <form
              className="EditNote_form"
              onSubmit={this.handleSubmit}
            >
              <div className='EditNote__error' role='alert'>
                {error && <p>{error.message}</p>}
              </div>
              <input
                type='hidden'
                name='id'
              />
              <div className="form-section">
                <label htmlFor="title">
                  Name of Remynder:
                {' '}
                </label>
                <Required />
                <input
                  type="text"
                  title="title"
                  id="title"
                  value={title}
                  required
                  onChange={this.handleChangeTitle}>
                </input>
              </div>
              <div>
                <label htmlFor="content">
                  What's on your mynd?
                {''}
                  <Required />
                </label>
                <textarea
                  title="content"
                  id="content"
                  rows="15"
                  value={content}
                  required
                  onChange={this.handleChangeContent}>
                 </textarea>
              </div>
              <div className="frequency-container" className="form-section">
                <label htmlFor="frequency">How often do you want email remynders? </label>
                <select title="remynder" id="remynder">
                  <option value="Every 6 Hours">Every 6 Hours</option>
                  <option value="Every 12 Hours">Every 12 Hours</option>
                  <option value="Every 24 Hours">Every 24 Hours</option>
                  <option onChange={this.handleChangeRemynder} value="Every 2 days">Every 2 Days</option>
                </select>
              </div>

              <div className='AddNote__buttons'>
                <Link to='/NotePage'>
                <button type='button' onClick={this.handleClickCancel}>
                  Cancel
          </button>
          </Link>
                {' '}
                <button type='submit'>
                  Save
          </button>
              </div>
            </form>
          </main>
        </section>
      </NotFoundPage>
    )
  }
}