import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Header from '../src/Header'
import moment from 'moment'

it('Should render the month with the year', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Header
      currentMonth={currentMonth}
      onChange={function onChange () {}}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should display the month according to the locale', () => {
  moment.locale('fr')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Header
      currentMonth={currentMonth}
      onChange={function onChange () {}}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should trigger onChange(prevMonth) on previous click', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const expected = moment('01/01/2017', 'DD/MM/YYYY')
  const onChange = jest.fn()
  const wrapper = shallow(
    <Header
      currentMonth={currentMonth}
      onChange={onChange}
    />
  )

  const prev = wrapper.find('div > div').at(0)
  prev.simulate('click')
  const actual = onChange.mock.calls[0][0]

  expect(expected.isSame(actual)).toBe(true)
})

it('Should trigger onChange(nextMonth) on next click', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const expected = moment('01/03/2017', 'DD/MM/YYYY')
  const onChange = jest.fn()
  const wrapper = shallow(
    <Header
      currentMonth={currentMonth}
      onChange={onChange}
    />
  )

  const prev = wrapper.find('div > div').at(2)
  prev.simulate('click')
  const actual = onChange.mock.calls[0][0]

  expect(expected.isSame(actual)).toBe(true)

})

it('Should accept custom styling', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Header
      currentMonth={currentMonth}
      onChange={function onChange () {}}
      style={{
        headerStyle: {
          textTransform: 'none',
          backgroundColor: 'red',
          borderBottom: 'none',
          textAlign: 'right',
          padding: '0',
          margin: 'auto',
          position: 'fixed' // should be skipped
        }
      }}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})
