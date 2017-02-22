import React, { Component } from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import Calendar from '../build'

const customTheme = {
  header: {
    fontStyle: 'italic',
    textTransform: 'none',
    color: '#fff'
  },
  dayName: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  outOfMonth: {
    opacity: '.4',
    fontStyle: 'italic'
  },
  currentMonth: {
    fontStyle: 'normal',
    color: '#fff'
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
}

class Example extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected1: moment()
    }
  }
  render () {
    return (
      <div>
        <h1>React Light Calendar</h1>

        <section>
          <h2>Basic example</h2>

          <p>
            This is the most basic usage. Currently selected: <b>{this.state.selected1.format('DD/MM/YYYY')}</b>.
          </p>

          <div className='calendar'>
            <Calendar
              date={this.state.selected1}
              onChange={selected1 => this.setState({ selected1 })}
            />
          </div>
        </section>

        <section>
          <h2>Custom Styling</h2>

          <p>
            This example show how to customize a calendar. (<em>See source code in example/index.js</em>).
          </p>

          <div className='calendar custom'>
            <Calendar
              date={this.state.selected2}
              onChange={selected2 => this.setState({ selected2 })}
              theme={customTheme}
            />
          </div>
        </section>

        <section>
          <h2>Activated Intervals</h2>

          <p>
            In this example only days from 01/01/2017 - 07/01/2017 and 01/02/2017 - 15/02/2017 will be clickable.
          </p>

          <div className='calendar'>
            <Calendar
              date={this.state.selected3}
              onChange={selected3 => this.setState({ selected3 })}
              activatedIntervals={[{
                from: moment('01/01/2017', 'DD/MM/YYYY'),
                to: moment('07/01/2017', 'DD/MM/YYYY')
              }, {
                from: moment('01/02/2017', 'DD/MM/YYYY'),
                to: moment('15/02/2017', 'DD/MM/YYYY')
              }]}
            />
          </div>
        </section>

        <section>
          <h2>Disabled intervals</h2>

          <p>
            In this example days from 01/01/2017 - 07/01/2017 and 01/02/2017 - 15/02/2017 wont be clickable.
          </p>

          <div className='calendar'>
            <Calendar
              date={this.state.selected4}
              onChange={selected4 => this.setState({ selected4 })}
              disabledIntervals={[{
                from: moment('01/01/2017', 'DD/MM/YYYY'),
                to: moment('07/01/2017', 'DD/MM/YYYY')
              }, {
                from: moment('01/02/2017', 'DD/MM/YYYY'),
                to: moment('15/02/2017', 'DD/MM/YYYY')
              }]}
            />
          </div>
        </section>
      </div>
    )
  }
}

render(
  <Example />, document.querySelector('#app')
)
