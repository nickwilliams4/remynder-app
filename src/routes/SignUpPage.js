import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import { Section } from '../Utils/Utils'

export default class RegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/NotePage'
    console.log(destination)
    history.push(destination)
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <SignUpForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}