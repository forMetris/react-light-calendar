import React, { Component } from 'react'
import moment from 'moment'
import Header from './Header'
import Body from './Body'

class Calendar extends Component {
  constructor (props) {
    super(props)

    const { date } = this.props

    this.state = {
      currentMonth: date || moment()
    }

    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange (nextDate) {
    const { onChange } = this.props
    const { currentMonth } = this.state

    // When the users clicks a date that does not belong
    // to the currently shown month, we need to update
    // the calendar to that month
    if (nextDate.month() !== currentMonth.month()) {
      this.setState({ currentMonth: nextDate })
    }

    onChange(nextDate)
  }

  render () {
    const { currentMonth } = this.state
    const {
      date,
      theme = {},
      activatedIntervals,
      disabledIntervals
    } = this.props
    const {
      // Name of the current month + navigation arrows
      header: headerStyle,

      // Cell containing each day of the week name
      dayName: nameStyle,

      // style for cells that does not belong to the current month
      // (ex: dec. 31st when current month is January)
      outOfMonth: outOfMonthStyle,

      // style for cells that belong the the shown month
      currentMonth: currentMonthStyle,

      // today cell
      today: todayStyle,

      // currently chose cell
      selected: selectedStyle,

      // disabled cells
      disabled: disabledStyle
    } = theme

    return (
      <div>
        <Header
          currentMonth={currentMonth}
          onChange={nextDisplayedMonth => this.setState({ currentMonth: nextDisplayedMonth })}
          style={{ headerStyle }}
        />
        <Body
          active={date}
          currentMonth={currentMonth}
          onChange={this.handleDateChange}
          activatedIntervals={activatedIntervals}
          disabledIntervals={disabledIntervals}
          style={{
            nameStyle,
            outOfMonthStyle,
            currentMonthStyle,
            todayStyle,
            selectedStyle,
            disabledStyle
          }}
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  // The currently selected date
  date: React.PropTypes.object,
  // Called whenever the user changes the date
  onChange: React.PropTypes.func.isRequired,

  // Only one of the two can be provided to the component
  activatedIntervals: React.PropTypes.array,
  disabledIntervals: React.PropTypes.array
}

export default Calendar
