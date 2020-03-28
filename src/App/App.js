import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import NotePage from '../NotePage/NotePage'
import AddNote from '../AddNote/AddNote'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import ReturningUser from '../ReturningUser/ReturningUser'
import config from '../config'
import ApiContext from '../ApiContext'
import NoteContent from '../NoteContent/NoteContent'

export default class App extends Component {
  state = {
    notes: []
  };


  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/notes`)
      .then((notesRes) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        return notesRes.json();
      })
      .then((notes) => {
        this.setState({ notes });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  handleDeleteNote = note_id => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== note_id)
    });
};



addNote = note => {
  this.setState({
    notes: [ ...this.state.notes, note ],
  })
}


  render() {
    const contextValue = {
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.addNote
    }
    return (
      <ApiContext.Provider value={contextValue}>
        <div className='App'>
          <nav>
            <Nav />
          </nav>
          <main>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/NotePage'><NotePage /></Route>
              <Route path="/AddNote" component={AddNote} />
              <Route path="/note/:note_id" component={NoteContent} />
              <Route path='/ReturningUser' component={ReturningUser} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ApiContext.Provider>
    )
  }
}