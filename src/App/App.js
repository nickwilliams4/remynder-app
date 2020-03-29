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
import EditNote from '../EditNote/EditNote'

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

editNote = editedNote => {
  this.setState({
    notes: this.state.notes.map(note => 
      (note.id !== editedNote.id ? note: editedNote)
      )
  })
}


  render() {
    const contextValue = {
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.addNote,
      editNote: this.editNote
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
              <Route path="/edit/:note_id" component={EditNote} />
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