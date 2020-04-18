import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddNote from './AddNote'

describe('AddNote component', () => {
  const props = {
    className: 'test-class-name'
  }

  it('renders the AddNote given props', () => {
    const wrapper = shallow(<AddNote {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a form.AddNote by default', () => {
    const wrapper = shallow(<AddNote />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})