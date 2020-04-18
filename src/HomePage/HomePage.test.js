import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomePage from './HomePage'

describe('HomePage component', () => {
  const props = {
    className: 'test-class-name'
  }

  it('renders the HomePage given props', () => {
    const wrapper = shallow(<HomePage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})