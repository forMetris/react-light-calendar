import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import moment from 'moment'
import Body from '../src/Body'

it('Should throw an error when both activated and disabled intervals are defined', () => {
  expect(function () {
    shallow(
      <Body
        currentMonth={moment()}
        onChange={function onChange () {}}
        activatedIntervals={[{
          from: moment(),
          to: moment()
        }]}
        disabledIntervals={[{
          from: moment(),
          to: moment()
        }]}
      />
    )
  }).toThrow()
})

it('Should render a calendar', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Body
      currentMonth={currentMonth}
      onChange={function onChange () {}}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should render a calendar with a selected date', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const selected = moment('05/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Body
      currentMonth={currentMonth}
      onChange={function onChange () {}}
      active={selected}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should render a calendar according to the locale', () => {
  moment.locale('fr')

  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const selected = moment('05/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Body
      currentMonth={currentMonth}
      onChange={function onChange () {}}
      active={selected}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})

it('Should accept custom styling', () => {
  moment.locale('en')
  const currentMonth = moment('01/02/2017', 'DD/MM/YYYY')
  const active = moment('05/02/2017', 'DD/MM/YYYY')
  const renderer = ReactTestRenderer.create(
    <Body
      active={active}
      currentMonth={currentMonth}
      onChange={function onChange () {}}
      disabledIntervals={[{
        from: moment('11/02/2017', 'DD/MM/YYYY'),
        to: moment('01/03/2017', 'DD/MM/YYYY')
      }]}
      style={{
        outOfMonthStyle: {
          color: 'blue'
        },
        currentMonthStyle: {
          color: 'green'
        },
        todayStyle: {
          fontWeight: 'bold'
        },
        selectedStyle: {
          backgroundColor: 'green',
          color: 'white',
          textAlign: 'right'
        },
        disabledStyle: {
          backgroundColor: 'red'
        }
      }}
    />
  )

  expect(renderer.toJSON()).toMatchSnapshot()
})
