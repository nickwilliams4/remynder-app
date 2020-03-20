import React, { Component } from 'react'
import Content from '../Content/Content'
import { Link } from 'react-router-dom'
import './AddNote.css'

export default class AddNote extends Component {
  render() {
    return (
      <Content className='AddNote'>
        <main role="main">
          <header>
            <h1>New Remynder</h1>
          </header>
          <form id="record-remynder">
            <div class="form-section">
              <label for="remynder-title">Remynder title</label>
              <input type="text" name="remynder-title" placeholder="Call Jane" required></input>
            </div>
            <div class="form-section">
              <label for="remynder-summary">What's on your mynd?</label>
              <div>
              <textarea name="remynder-summary" rows="15" required></textarea>
              </div>
            </div>
            <div class="frequency-container" class="form-section">
              <label for="frequency">How often do you want email remynders?</label>
              <select id="cars">
                <option value="six-hours">Every 6 Hours</option>
                <option value="twelve-hours">Every 12 Hours</option>
                <option value="twenty-four-hours">Every 24 Hours</option>
                <option value="forty-eight-hours">Every 2 Days</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <Link to='/NotePage'>
            <button type="submit">Submit</button>
              </Link>
            <button type="reset">Reset</button>
          </form>
        </main>
      </Content>
    )
  }
}