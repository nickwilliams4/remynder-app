import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Content from '../Content/Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Remynder
        </Link>
        <Link to='/ReturningUser'>
          Log In
        </Link>
      </Content>
    )
  }
}