import React, { Component } from 'react'
import moment from 'moment'

class Body extends Component {
  constructor (props) {
    super(props)

    const {
      activatedIntervals,
      disabledIntervals
    } = this.props

    if (activatedIntervals && disabledIntervals) {
      throw new Error(
        'React-Light-Calendar: you provided both activated and disabled intervals, which ' +
        'will result in no date being selectable.'
      )
    }
  }

  renderDayNames () {
    const { style = {} } = this.props
    const { nameStyle = {} } = style
    const days = moment.weekdays().map(d => d.substr(0, 3))

    return (
      <tr>
        {days.map(d => (
          <td
            key={d}
            style={Object.assign({}, {
              fontWeight: 'bold',
              padding: '12px 0',
              textAlign: 'center'
            }, nameStyle)}
          >
            {d}
          </td>
        ))}
      </tr>
    )
  }

  renderWeek (startDay) {
    const {
      active,
      currentMonth,
      style = {},
      onChange,
      activatedIntervals,
      disabledIntervals
    } = this.props
    const {
      outOfMonthStyle = {},
      currentMonthStyle = {},
      todayStyle = {},
      selectedStyle = {},
      disabledStyle = {}
    } = style
    const days = []

    for (let i = 0; i < 7; i += 1) {
      const weekDay = startDay.clone().add(i, 'day')

      // Boolean helpers for styling
      const isCurrentMonth = weekDay.month() === currentMonth.month()
      const isToday = weekDay.isSame(new Date(), 'day')
      const isActive = !!active && weekDay.isSame(active, 'day')

      // Default cell style
      const dayStyle = Object.assign({}, {
        padding: '12px 0',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '2px',
        color: '#313131'
      })

      let onClick = null
      let isDisabled = false

      if (activatedIntervals) {
        // The cell is disabled if the day is out of every interval
        isDisabled = !activatedIntervals.some(({ from, to }) => {
          return from.isSameOrBefore(weekDay, 'day') && to.isSameOrAfter(weekDay, 'day')
        })
      }

      if (disabledIntervals) {
        // The cell is disabled
        isDisabled = disabledIntervals.some(({ from, to }) => {
          return from.isSameOrBefore(weekDay, 'day') && to.isSameOrAfter(weekDay, 'day')
        })
      }

      if (!isCurrentMonth) {
        // Apply out of month style
        Object.assign(dayStyle, {
          color: '#a7a8a9'
        }, outOfMonthStyle)
      } else {
        // Apply current month style
        Object.assign(dayStyle, currentMonthStyle)
      }

      if (isToday) {
        // Apply today style
        Object.assign(dayStyle, {
          fontStyle: 'italic'
        }, todayStyle)
      }

      if (isActive) {
        // Apply selected style
        Object.assign(dayStyle, {
          backgroundColor: '#323a45',
          color: '#fff'
        }, selectedStyle)
      }

      if (isDisabled) {
        // Apply disabled styles
        Object.assign(dayStyle, {
          cursor: 'not-allowed',
          color: '#ff003c',
          opacity: '.5'
        }, disabledStyle)
      } else {
        // Add event listener if the day is active
        onClick = () => onChange(weekDay)
      }

      days.push(
        <td
          key={weekDay.toString()}
          style={dayStyle}
          onClick={onClick}
        >
          {weekDay.date()}
        </td>
      )
    }

    return (
      <tr key={`month-${startDay.toString()}`}>
        {days}
      </tr>
    )
  }

  renderWeeks () {
    const weeks = []
    const { currentMonth } = this.props
    const startDay = currentMonth.clone()
      .startOf('month')
      .add(-1, 'week')
      .day('Monday') // TODO: Find first day given the current locale
    let monthNumber = startDay.month()
    let count = 0
    let done = false

    while (!done) {
      const date = startDay.clone()

      weeks.push(this.renderWeek(date))

      startDay.add(1, 'week')
      done = count++ > 2 && monthNumber !== date.month()
      monthNumber = date.month()
    }

    return weeks
  }

  render () {
    return (
      <table style={{ width: '100%' }}>
        <thead>{this.renderDayNames()}</thead>
        <tbody>{this.renderWeeks()}</tbody>
      </table>
    )
  }
}

Body.propTypes = {
  // The selected day
  active: React.PropTypes.object,

  // Callback caled when the user clicks a day
  onChange: React.PropTypes.func.isRequired,

  // The currnt month to be displayed
  currentMonth: React.PropTypes.object.isRequired,

  // Intervals
  activatedIntervals: React.PropTypes.array,
  disabledIntervals: React.PropTypes.array,

  // Custom user styles
  style: React.PropTypes.object
}

export default Body
