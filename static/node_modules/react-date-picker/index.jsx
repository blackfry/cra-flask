'use strict'

// require('./index.css')
// require('./theme/hackerone.css')
//
require('./style/index.scss')

import {findDOMNode} from 'react-dom'

global.findDOMNode = findDOMNode
import DateFormatInput from './src/DateFormatInput'
import MonthView from './src/MonthView'

import DatePicker from './src/Calendar'
import TimePicker from './src/TimePicker'
import TimeInput from './src/TimeInput'

import TransitionView from './src/TransitionView'
import DecadeView from './src/DecadeView'
import YearView from './src/YearView'
import HistoryView from './src/HistoryView'
import NavBar from './src/NavBar'
import Calendar from './src/Calendar'
import Footer from './src/Footer'
import MultiMonthView from './src/MultiMonthView'
import BasicMonthView from './src/BasicMonthView'
import DateField from './src/DateField'
import Clock from './src/Clock'
import DateFormatSpinnerInput from './src/DateFormatSpinnerInput'
import { Flex, Item } from 'react-flex'

var moment = require('moment');
var React      = require('react')

var render = require('react-dom').render

var range = ['2016-05-01', '2016-05-09']
var date = moment().add(-10, 'days')

var LOCALE = 'en'

var TODAY = {
    en: 'Today',
    fr: 'Aujourd\'hui',
    de: 'Heute',
    es: 'Hoy',
    ro: 'Azi'
}

class F extends React.Component {
  render(){
    const onClick = () => {
      this.props.selectDate({dateMoment: moment('14/10/2016','DD/MM/YYYY')})
    }
    return <div onClick={onClick}>
      Select
    </div>
  }
}

F.defaultProps = {
  isDatePickerFooter: true
}
var GO2SELECTED = {
    en: 'Go to selected',
    es: 'Vaya a Favoritos',
    de: 'Zum ausgewählten',
    fr: 'Aller a la liste',
    ro: 'Mergi la selectie'
}

function emptyFn(){}

let R = range
var App = React.createClass({
    displayName: 'App',

    onLocaleChange: function(event) {
        LOCALE = event.target.value

        this.setState({})
    },

    getInitialState(){
      return {
        date: '2016-10-03',
        text: 'atext',
        time: '03:45:21 pm'
      }
    },

    onTimeChange(time){
      // console.log('time', time)
      this.setState({ time })
    },

    onChange(date){
      this.setState({
        date
      })
    },

    onTextChange(text){
      this.setState({
        text
      })
    },

    render: function(){
        range = this.props.range || range
        date = this.props.date || date

        return <div style={{margin: 10}}>
        {/*<DateField pattern={false} dateFormat="YYYY MM DD" />
        <TransitionView transitionDuration="0.1s">
          <MonthView dateFormat="DD/MM/YYYY" defaultDate="20/04/2016" onChange={() => {}}/>
        </TransitionView>


        <br />
        */}
        {/*<TimeInput format="hh:mm:ss A" xonChange={this.onTimeChange} defaultValue={this.state.time}/>*/}
        {/*<DateField
            defaultValue={"2016-05-30"}
            dateFormat="YYYY-MM-DD"
          />

        <br />
        <TimePicker timeFormat="HH:mm:ss" defaultTime style={{minHeight: 200, minWidth: 200}}/>
        <br />*/}
        <HistoryView maxDate={Date.now()} />
            <MonthView

      dateFormat="YYYY-MM-DD"
      onChange={(dateFormat, {dateMoment}) => {
        console.log(dateFormat, '!!!');
      }}
      placeholder="test"
      defaultRange={[]}
      isDisabledDay={() => false}
    >
    </MonthView>

            {<TransitionView>
            <MultiMonthView highlightRangeOnMouseMove defaultRange={[]} size={4}
            /></TransitionView>}

        <br />


        </div>
    },

    onRangeChange: function(range, r){

      if (r.length){
        if (r[1].timestamp - r[0].timestamp < 1000 * 60 *60*24 * 3)
        return range[0]
      }
      // console.log(range)
      R = range
      this.setState({})
        //range = rangeValue
        //date = rangeValue
        //this.setState({})
    }
})

render(<App />, document.getElementById('content'))
