import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import NotePage from '../NotePage/NotePage'
import AddNote from '../AddNote/AddNote'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import ApiContext from '../ApiContext'
import NoteContent from '../NoteContent/NoteContent'
import EditNote from '../EditNote/EditNote'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import SignUpPage from '../routes/SignUpPage'
import ReturningUserPage from '../routes/ReturningUserPage'

export default class App extends Component {
  state = {
    notes: [],
    loggedIn: false
  };



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

updateLoggedIn = loggedIn => {
  this.setState({
    loggedIn
  })
}

setNotes = notes => {
  this.setState({
    notes
  })
}


  render() {
    const contextValue = {
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.addNote,
      editNote: this.editNote,
      loggedIn: this.state.loggedIn,
      updateLoggedIn: this.updateLoggedIn,
      setNotes: this.setNotes
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
              <PrivateRoute path='/NotePage'><NotePage /></PrivateRoute>
              <PrivateRoute path="/AddNote" component={AddNote} />
              <PrivateRoute path="/note/:note_id" component={NoteContent} />
              <PrivateRoute path="/edit/:note_id" component={EditNote} />
              <PublicOnlyRoute path='/ReturningUser' component={ReturningUserPage} />
              <PublicOnlyRoute path='/SignUpForm' component={SignUpPage} />
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