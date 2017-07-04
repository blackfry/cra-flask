import MonthView from './MonthView'

import TimePicker from './TimePicker'
import TimeInput from './TimeInput'

import TransitionView from './TransitionView'
import MultiMonthView from './MultiMonthView'

import HistoryView from './HistoryView'
import YearView from './YearView'
import DecadeView from './DecadeView'

import NavBar from './NavBar'
import Footer from './Footer'

import Clock from './Clock'
import ClockInput from './ClockInput'

import DateField from './DateField'
import Calendar from './Calendar'
import DateFormatInput from './DateFormatInput'
import DateFormatSpinnerInput from './DateFormatSpinnerInput'

export default MonthView

// allow people to import with other aliases as well
export const DatePicker = Calendar
export const DateEditor = DateField

export {
  MonthView,
  YearView,
  DecadeView,
  HistoryView,

  DateFormatInput,
  DateFormatSpinnerInput,

  TransitionView,
  MultiMonthView,
  NavBar,
  Footer,

  Clock,
  ClockInput,

  DateField,
  Calendar,
  TimePicker,
  TimeInput
}
