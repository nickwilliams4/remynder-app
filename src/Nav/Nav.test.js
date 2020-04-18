import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Nav from './Nav'

describe(`Note component`, () => {
  const props = {
    className: 'test-class-name',
  }

  it('renders the Nav', () => {
    const wrapper = shallow(<Nav {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})