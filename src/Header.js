import React, { Component } from 'react'

class Header extends Component {
  changeMonth (numberOfMonthToAdd) {
    const { currentMonth, onChange } = this.props

    return () => {
      const nextMonth = currentMonth.clone()
      nextMonth.add(numberOfMonthToAdd, 'month')

      onChange(nextMonth)
    }
  }

  render () {
    const {
      currentMonth,
      style = {}
    } = this.props
    const { headerStyle = {} } = style
    const arrowBaseStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer'
    }

    return (
      <div
        style={Object.assign({
            // Default style
          textTransform: 'uppercase',
          borderBottom: '1px solid #d7d8d9',
          textAlign: 'center',
          padding: '12px'
        },
        // Custom user-defined style
        headerStyle, {
          // Required styles
          position: 'relative'
        })}
      >
        <div
          style={Object.assign({},
            // Arrow default style
            arrowBaseStyle, {
              left: '8px'
            }
          )}
          onClick={this.changeMonth(-1)}
        >
          {'<'}
        </div>

        <div>{currentMonth.format('MMMM YYYY')}</div>

        <div
          style={Object.assign({},
            // Arrow default style
            arrowBaseStyle, {
              right: '8px'
            }
          )}
          onClick={this.changeMonth(1)}
        >
          {'>'}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  currentMonth: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  style: React.PropTypes.object
}

export default Header
