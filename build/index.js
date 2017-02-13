!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("moment")):"function"==typeof define&&define.amd?define(["React","moment"],t):"object"==typeof exports?exports.ReactLightCalendar=t(require("React"),require("moment")):e.ReactLightCalendar=t(e.React,e.moment)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=r(l),s=n(3),f=r(s),d=n(4),p=r(d),y=n(5),h=r(y),b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.props.date;return n.state={currentMonth:r||(0,f.default)()},n.handleDateChange=n.handleDateChange.bind(n),n}return i(t,e),u(t,[{key:"handleDateChange",value:function(e){var t=this.props.onChange,n=this.state.currentMonth;e.month()!==n.month()&&this.setState({currentMonth:e}),t(e)}},{key:"render",value:function(){var e=this,t=this.state.currentMonth,n=this.props,r=n.date,o=n.theme,a=void 0===o?{}:o,i=n.activatedIntervals,u=n.disabledIntervals,l=a.header,s=a.dayName,f=a.outOfMonth,d=a.currentMonth,y=a.today,b=a.selected,v=a.disabled;return c.default.createElement("div",null,c.default.createElement(p.default,{currentMonth:t,onChange:function(t){return e.setState({currentMonth:t})},style:{headerStyle:l}}),c.default.createElement(h.default,{active:r,currentMonth:t,onChange:this.handleDateChange,activatedIntervals:i,disabledIntervals:u,style:{nameStyle:s,outOfMonthStyle:f,currentMonthStyle:d,todayStyle:y,selectedStyle:b,disabledStyle:v}}))}}]),t}(l.Component);b.propTypes={date:c.default.PropTypes.object,onChange:c.default.PropTypes.func.isRequired,activatedIntervals:c.default.PropTypes.array,disabledIntervals:c.default.PropTypes.array},t.default=b},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=r(l),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"changeMonth",value:function(e){var t=this.props,n=t.currentMonth,r=t.onChange;return function(){var t=n.clone();t.add(e,"month"),r(t)}}},{key:"render",value:function(){var e=this.props,t=e.currentMonth,n=e.style,r=void 0===n?{}:n,o=r.headerStyle,a=void 0===o?{}:o,i={position:"absolute",top:"50%",transform:"translateY(-50%)",cursor:"pointer"};return c.default.createElement("div",{style:Object.assign({textTransform:"uppercase",borderBottom:"1px solid #d7d8d9",textAlign:"center",padding:"12px"},a,{position:"relative"})},c.default.createElement("div",{style:Object.assign({},i,{left:"8px"}),onClick:this.changeMonth(-1)},"<"),c.default.createElement("div",null,t.format("MMMM YYYY")),c.default.createElement("div",{style:Object.assign({},i,{right:"8px"}),onClick:this.changeMonth(1)},">"))}}]),t}(l.Component);s.propTypes={currentMonth:c.default.PropTypes.object.isRequired,onChange:c.default.PropTypes.func.isRequired,style:c.default.PropTypes.object},t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=r(l),s=n(3),f=r(s),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.props,i=r.activatedIntervals,u=r.disabledIntervals;if(i&&u)throw new Error("React-Light-Calendar: you provided both activated and disabled intervals, which will result in no date being selectable.");return n}return i(t,e),u(t,[{key:"renderDayNames",value:function(){var e=this.props.style,t=void 0===e?{}:e,n=t.nameStyle,r=void 0===n?{}:n,o=f.default.weekdays().map(function(e){return e.substr(0,3)});return c.default.createElement("tr",null,o.map(function(e){return c.default.createElement("td",{key:e,style:Object.assign({},{fontWeight:"bold",padding:"12px 0",textAlign:"center"},r)},e)}))}},{key:"renderWeek",value:function(e){for(var t=this.props,n=t.active,r=t.currentMonth,o=t.style,a=void 0===o?{}:o,i=t.onChange,u=t.activatedIntervals,l=t.disabledIntervals,s=a.outOfMonthStyle,f=void 0===s?{}:s,d=a.currentMonthStyle,p=void 0===d?{}:d,y=a.todayStyle,h=void 0===y?{}:y,b=a.selectedStyle,v=void 0===b?{}:b,m=a.disabledStyle,g=void 0===m?{}:m,O=[],j=function(t){var o=e.clone().add(t,"day"),a=o.month()===r.month(),s=o.isSame(new Date,"day"),d=!!n&&o.isSame(n,"day"),y=Object.assign({},{padding:"12px 0",textAlign:"center",cursor:"pointer",borderRadius:"2px",color:"#313131"}),b=null,m=!1;u&&(m=!u.some(function(e){var t=e.from,n=e.to;return t.isSameOrBefore(o,"day")&&n.isSameOrAfter(o,"day")})),l&&(m=l.some(function(e){var t=e.from,n=e.to;return t.isSameOrBefore(o,"day")&&n.isSameOrAfter(o,"day")})),a?Object.assign(y,p):Object.assign(y,{color:"#a7a8a9"},f),s&&Object.assign(y,{fontStyle:"italic"},h),d&&Object.assign(y,{backgroundColor:"#323a45",color:"#fff"},v),m?Object.assign(y,{cursor:"not-allowed",color:"#ff003c",opacity:".5"},g):b=function(){return i(o)},O.push(c.default.createElement("td",{key:o.toString(),style:y,onClick:b},o.date()))},_=0;_<7;_+=1)j(_);return c.default.createElement("tr",{key:"month-"+e.toString()},O)}},{key:"renderWeeks",value:function(){for(var e=[],t=this.props.currentMonth,n=t.clone().startOf("month").add(-1,"week").day("Monday"),r=n.month(),o=0,a=!1;!a;){var i=n.clone();e.push(this.renderWeek(i)),n.add(1,"week"),a=o++>2&&r!==i.month(),r=i.month()}return e}},{key:"render",value:function(){return c.default.createElement("table",{style:{width:"100%"}},c.default.createElement("thead",null,this.renderDayNames()),c.default.createElement("tbody",null,this.renderWeeks()))}}]),t}(l.Component);d.propTypes={active:c.default.PropTypes.object,onChange:c.default.PropTypes.func.isRequired,currentMonth:c.default.PropTypes.object.isRequired,activatedIntervals:c.default.PropTypes.array,disabledIntervals:c.default.PropTypes.array,style:c.default.PropTypes.object},t.default=d}])});
//# sourceMappingURL=index.js.map