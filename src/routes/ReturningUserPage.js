import React, { Component } from 'react'
import ReturningUser from '../ReturningUser/ReturningUser'
import { Section } from '../Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/NotePage'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <ReturningUser
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}