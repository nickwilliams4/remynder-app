import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUpForm from './SignUpForm'

describe('SignUpForm component', () => {
  const props = {
    className: 'test-class-name'
  }

  it('renders the SignUpForm given props', () => {
    const wrapper = shallow(<SignUpForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a form.SignUpForm by default', () => {
    const wrapper = shallow(<SignUpForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})