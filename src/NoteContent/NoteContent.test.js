import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteContent from './NoteContent'

describe(`NoteContent component`, () => {
  const props = {
    note_id: 'a',
    name: 'test-class-name',
  }

  it('renders the NoteContent', () => {
    const wrapper = shallow(<NoteContent {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})