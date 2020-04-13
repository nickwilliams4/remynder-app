import React from 'react'

export default React.createContext({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
  editNote: () => {},
  onLoginSuccess: () => { },
  onRegistrationSuccess: () => { },
  loggedIn: false,
  updateLoggedIn: () => {},
  setNotes: () => {}
})