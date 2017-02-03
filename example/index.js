import React, { Component } from 'react'
import { render } from 'react-dom'
import Calendar from '../src'

class Example extends Component {
  render () {
    return (
      <div>
        <section>
          <h2>Example title</h2>

          <div className='calendar'>
            <Calendar />
          </div>
        </section>
      </div>
    )
  }
}

render(
  <Example />, document.querySelector('#app')
)
