import React, { Component } from 'react'
import Content from '../Content/Content'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <Content className='Footer'>
        <p>©nicksapps, 2020. All Rights Reserved.</p>
      </Content>
    )
  }
}