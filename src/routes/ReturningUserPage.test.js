import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReturningUserPage from './ReturningUserPage'

describe(`ReturningUserPage component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
  }

  it('renders the ReturningUser', () => {
    const wrapper = shallow(<ReturningUserPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})