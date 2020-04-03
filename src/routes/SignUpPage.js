import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import { Section } from '../Utils/Utils'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/NotePage')
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