import config from '../config'
import TokenService from './token-service'

const NotesApiService = {
  getNotes() {
    return fetch(`${config.API_ENDPOINT}/notes`, {
      headers: {
        
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getNote(note_id) {
    return fetch(`${config.API_ENDPOINT}/notes/${note_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default NotesApiService