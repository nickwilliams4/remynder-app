import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NotePage from './NotePage'

describe(`NotePage component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
  }

  it('renders the NotePage', () => {
    const wrapper = shallow(<NotePage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})