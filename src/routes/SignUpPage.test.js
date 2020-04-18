import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUpPage from './SignUpPage'

describe(`SignUpPage component`, () => {
  const props = {
    className: 'test-class-name',
  }

  it('renders the SignUpPage', () => {
    const wrapper = shallow(<SignUpPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})