jest.mock('../src/Header', () => 'Header')
jest.mock('../src/Body', () => 'Body')

import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import moment from 'moment'
import Calendar from '../src/Calendar'

it('Should set the default month to the given date', () => {
  const date = moment('01/03/2016', 'DD/MM/YYYY')
  const result = shallow(
    <Calendar
      date={date}
      onChange={function onChange () {}}
    />
  )

  const componentState = result.state()

  expect(date.isSame(componentState.currentMonth, 'month')).toBe(true)
})

it('Should set the default month to the current one if no date is given', () => {
  const result = shallow(
    <Calendar
      onChange={function onChange () {}}
    />
  )

  const componentState = result.state()
  const currentMonth = moment()

  expect(currentMonth.isSame(componentState.currentMonth, 'month')).toBe(true)
})

it('Should provide style to its children based on the theme', () => {
  const date = moment('01/02/2014', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Calendar
      date={date}
      onChange={function onChange () {}}
      theme={{
        header: {
          fontFamily: 'cursive',
          fontStyle: 'italic',
          textTransform: 'none',
          color: '#323a45'
        },
        dayName: {
          textTransform: 'uppercase',
          fontFamily: 'cursive',
          fontStyle: 'italic',
          fontWeight: 'normal'
        },
        outOfMonth: {
          color: '#979899',
          fontFamily: 'cursive'
        },
        currentMonth: {
          color: 'green',
          fontFamily: 'cursive'
        },
        today: {
          fontStyle: 'normal',
          fontWeight: 'italic'
        },
        selected: {
          backgroundColor: '#ff003c',
          color: '#fff'
        },
        disabled: {
          color: '#ff003c'
        }
      }}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should change the displayed month when the picked date is not in range', () => {
  const initialDate = moment('01/01/2017', 'DD/MM/YYYY')
  const nextDate = moment('01/02/2017', 'DD/MM/YYYY')
  const onChange = jest.fn()
  const wrapper = shallow(
    <Calendar
      date={initialDate}
      onChange={onChange}
    />
  )

  expect(wrapper.state().currentMonth.isSame(initialDate, 'month')).toBe(true)
  wrapper.instance().handleDateChange(nextDate)
  expect(wrapper.state().currentMonth.isSame(nextDate, 'month')).toBe(true)

  const argument = onChange.mock.calls[0][0]
  expect(argument).toBe(nextDate)
})
