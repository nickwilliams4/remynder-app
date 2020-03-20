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
    notes: [{id: "1",
            "title": "Jamaica",
            "content": "Plan trip to Jamiaca",
            created: "2/24/2020"
  },
  {id: "2",
  "title": "Dentist",
  "content": "Make dentist appt",
  created: "2/24/2020"
},
{id: "3",
            "title": "Novel",
            "content": "write new novel",
            created: "2/24/2020"
  }
]
  };



  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/NotePage'><NotePage notes={this.state.notes}/></Route>
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