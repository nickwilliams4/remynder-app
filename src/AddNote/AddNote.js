import React, { Component } from 'react'
import config from '../config'
import ApiContext from '../ApiContext'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import './AddNote.css'

const Required = () => (
  <span className='AddNote__required'>*</span>
)

export default class AddNote extends Component {
  static contextType = ApiContext;

  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { title, content, remynder } = e.target
    const notes = {
      title: title.value,
      content: content.value,
      remynder: remynder.value
    }
    this.setState({ error: null })
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      body: JSON.stringify(notes),
      headers: { 'Content-Type': 'application/json' }

    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        this.context.addNote(data)
        this.props.history.push('/NotePage')
      })
      .catch(error => {
        this.setState({ error })
      })
  }
  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    const { error } = this.state
    return (
      <NotFoundPage>
        <section className='AddNote'>
          <main role="main">
            <header>
              <h1>New Remynder</h1>
            </header>
            <form
              className="AddNote_form"
              onSubmit={this.handleSubmit}
            >
              <div className='AddNote__error' role='alert'>
                {error && <p>{error.message}</p>}
              </div>
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
                  placeholder="Call Jane" 
                  required>
                  </input>
              </div>
              <div>
                <label htmlFor="content">
                  What's on your mynd?
                  {''}
                  <Required />
                  </label>
                  <textarea title="content" id="content" rows="15" required></textarea>
              </div>
              <div className="frequency-container" className="form-section">
                <label htmlFor="frequency">How often do you want email remynders? </label>
                <select title="remynder" id="remynder">
                  <option value="Every 6 Hours">Every 6 Hours</option>
                  <option value="Every 12 Hours">Every 12 Hours</option>
                  <option value="Every 24 Hours">Every 24 Hours</option>
                  <option value="Every 2 days">Every 2 Days</option>
                </select>
              </div>
              
              <div className='AddNote__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
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