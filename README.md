# React-Light-Calendar[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

> A minimalistic calendar picker for React.

## Install

```console
$ npm install --save moment # required
$ npm install --save react-light-calendar
```
## Features

* **Controlled Input** - *to keep it in sync with your app*
* **Customizable** - *Plug your own theme (More themes to come)*
* **i18n** - *Based on your moment configuration*

## Usage

```js
import Calendar from 'react-light-calendar'

// ...

<Calendar
  date={this.state.selected} // Required: moment instance
  onChange={selected => this.setState({ selected })} // Required: callback function
  theme={...} // Optional: see theming section for more details
  activatedIntervals={[...]} // Optional: see intervals section for more details
  disabledIntervals={[...]} // Optional: see intervals section for more details
/>
```

## Theming

The following object can be passed to custmize your calendar:

```js
const theme = {
  // Header section (displays month)
  // Default:
  // text-transform: uppercase;
  // background-color: rgba(224, 224, 224);
  // border-bottom: 1px solid #d7d8d9;
  // text-align: center;
  // padding: 12px;
  //
  // Non overridable:
  // position: relative;
  header: {
    // ...
  },
  // Each day name
  // Default:
  // font-weight: bold;
  // padding: 12px 0;
  // text-align: center;
  dayName: {
    // ...
  },
  // Day cells that are not within current month range
  // Default:
  // padding: 12px 0;
  // text-align: center;
  // cusor: pointer;
  // border-radius: 2px;
  // color: #a7a8a9;
  outOfMonth: {
    // ...
  },
  // Day cells that are within current month range
  // Default:
  // padding: 12px 0;
  // text-align: center;
  // cusor: pointer;
  // border-radius: 2px;
  // color: #313131;
  currentMonth: {
    // ...
  },
  // Today
  // Default:
  // padding: 12px 0;
  // text-align: center;
  // cusor: pointer;
  // border-radius: 2px;
  // color: #313131;
  // font-style: italic;
  today: {
    // ...
  },
  // Selected date
  // Default:
  // padding: 12px 0;
  // text-align: center;
  // cusor: pointer;
  // border-radius: 2px;
  // color: #fff;
  // background-color: #323a45;
  selected: {
    // ...
  },
  // Disabled days for intervals
  // Default:
  // padding: 12px 0;
  // text-align: center;
  // cusor: not-allowed;
  // border-radius: 2px;
  // color: #ff003c;
  // opacity: .5;
  disabled: {
    // ...
  }
}
```

## Intervals

You can either provide a `activatedIntervals` or `disabledIntervals` property to the calendar to restrict available choices.
These properties are arrays and contain the following objects:

```js
// Only dates between Feb. 1st (included) and Feb. 14th (included) will be available.
const activatedIntervals = [{
  from: moment('01/02/2017', 'DD/MM/YYYY'),
  to: moment('14/02/2017', 'DD/MM/YYYY')
}]
```
