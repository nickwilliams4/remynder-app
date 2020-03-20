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
            "content": "Cancel trip to Jamiaca",
            created: "3/10/2020",
            "remynder": "Every 12 hours"
  },
  {id: "2",
  "title": "Dentist",
  "content": "Make dentist appt for April",
  created: "2/24/2020",
  "remynder": "Every 2 days"
},
{id: "3",
            "title": "New Novel Idea",
            "content": "The dinsosaurs actually moved to Jupiter",
            created: "1/18/2020",
            "remynder": "Every 24 hours"
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