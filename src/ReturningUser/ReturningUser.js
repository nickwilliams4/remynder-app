import React, { Component } from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'
import ApiContext from '../ApiContext'
import './ReturningUser.css';

export default class ReturningUser extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  static contextType = ApiContext;

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.context.updateLoggedIn(true)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <main className='ReturningUser'>
        <header>
          <h1>Welcome Back!</h1>
        </header>
        <h3>Please Log In</h3>
        <form
          className='LoginForm'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='user_name'>
            <div>
              <label htmlFor='LoginForm_user_name'>
                Email: {' '}
              </label>
            </div>
            <Input
              required
              name='user_name'
              placeholder="john@lennon.com"
              id='LoginForm__user_name'
              className="user-name-field"
            >
            </Input>
          </div>
          <div className='password'>
            <div>
              <label htmlFor='LoginForm__password'>
                Password: {' '}
              </label>
            </div>
            <Input
              required
              name='password'
              type='password'
              id='LoginForm__password'
              className="user-name-field">
            </Input>
          </div>
          <Button type='submit' class="returning-user-login-button">
            Login
          </Button>
        </form>
      </main>
    )
  }
}