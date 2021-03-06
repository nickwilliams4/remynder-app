import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../services/auth-api-service'
import ApiContext from '../ApiContext'
import './SignUpForm.css'


export default class SignUpForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  
  }
  state = { error: null }

  static contextType = ApiContext;

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { full_name, user_name, password } = ev.target

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        return AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            full_name.value = ''
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.context.updateLoggedIn(true)
            this.props.onRegistrationSuccess()
          })
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <form className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div>
          <h1>Welcome!</h1>
        </div>
        <div>
          <h3>Please fill out the form below</h3>
        </div>
        <div className='full-form'>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>Name: {' '} <Required /> </label>
          <Input
            placeholder='Name'
            type="text"
            name='full_name'
            id='RegistrationForm__full_name'
            class="user-name-field">
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            Email: {' '} <Required />
          </label>
          <Input
            type="text"
            name='user_name'
            id='RegistrationForm__user_name'
            placeholder="john@lennon.com"
            class="user-name-field">
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password: {' '} <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
            class="user-name-field">
          </Input>
        </div>
        {' '}
        {this.state.error ? <div>{alert(this.state.error)}</div> : ' '}
        <Button type='submit' class="new-user-login-button">
          Register
        </Button>
        </div>
      </form>
    )
  }
}