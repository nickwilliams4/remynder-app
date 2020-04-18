import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditNote from './EditNote'

describe('EditNote component', () => {
  const props = {
    className: 'test-class-name'
  }

  it('renders the EditNote given props', () => {
    const wrapper = shallow(<EditNote {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a form.EditNote by default', () => {
    const wrapper = shallow(<EditNote />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})