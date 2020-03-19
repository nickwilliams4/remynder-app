import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import NotePage from '../NotePage/NotePage'
import AddNote from '../AddNote/AddNote'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import {findNote} from '../HelperFunctions'
import ReturningUser from '../ReturningUser/ReturningUser'

export default class App extends Component {
  state = {
    notes: []
  };

renderMainRoutes() {
  const {notes } = this.state;
  return (
      <>
          <Route
              path="/note/:noteId"
              render={routeProps => {
                  const {noteId} = routeProps.match.params;
                  const note = findNote(notes, noteId);
                  return <NotePage {...routeProps} note={note} />;
              }}
          />
      </>
  );
}



  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/NotePage' component={NotePage} />
            <Route path='/AddNote' component={AddNote} />
            <Route path='/ReturningUser' component={ReturningUser} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}