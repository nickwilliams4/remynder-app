import React, { Component } from 'react'
import Content from '../Content/Content'
import './HomePage.css'
import HomePageContent from './HomePageContent'

export default class HomePage extends Component {
  render() {
    return (
      <Content className='HomePage'>
        <main role="main">
          <HomePageContent />
        </main>
      </Content>
    )
  }
}