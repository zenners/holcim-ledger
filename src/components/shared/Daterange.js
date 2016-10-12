import React from 'react'
import moment from 'moment'
import DateRangePicker from 'react-bootstrap-daterangepicker/lib/index'
require('react-bootstrap-daterangepicker/css/daterangepicker.css')

const momentObj = {
  'Today': [moment(), moment()],
  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}


export default React.createClass({
  propTypes: {
    changeDate: React.PropTypes.func,
    classNames: React.PropTypes.string,
  },

  getInitialState(){
    return {
      ranges: momentObj,
			startDate: moment().subtract(1, 'month').startOf('month'),
			endDate: moment().endOf('month')
    }
  },

  changeDate(event, picker) {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate
		});
    this.props.changeDate(picker.startDate, picker.endDate)
	},

  render() {
    var start = this.state.startDate.format('MMMM DD, YYYY');
  	var end = this.state.endDate.format('MMMM DD, YYYY');
  	var label = start + ' - ' + end + ' ';
  	if (start === end) {
  		label = start;
    }
    var defaultClasses = "col-md-6";
    var classNames = this.props.classNames
    ? this.props.classNames + defaultClasses
    : defaultClasses

    return(
      <DateRangePicker startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        ranges={this.state.ranges}
                        onEvent={this.changeDate}
                        alwaysShowCalendars={true}
                        linkedCalendars={false}
                        className={classNames}>
        <button className="selected-date-range-btn form-control">
          <div className="pull-left"><i className="fa fa-calendar" /></div>
          <span className="text-center">{label}</span>
          <div className="pull-right">
            <span><i className="fa fa-caret-down" /></span>
          </div>
        </button>
      </DateRangePicker>
    )
  }
})