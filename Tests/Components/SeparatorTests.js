// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
import test from 'ava'
import React from 'react'
import Separator from '../../App/Components/Separator'
import { shallow } from 'enzyme'

const wrapper = shallow(<Separator backgroundColor={'#FFF'} />)

test('component exists', (t) => {
  t.is(wrapper.length, 1)
})

test('component structure', (t) => {
  t.is(wrapper.name(), 'View')
  t.is(wrapper.children().length, 0)
})
