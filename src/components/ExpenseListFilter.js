import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocus: null 
    }
    render(){
        return (
        <div>
            <input type="text" value={this.props.filters.text} onChange= {(e) => {this.props.dispatch(setTextFilter(e.target.value))}} />
            <select value={this.props.filters.sortBy} onChange= {(e) => {e.target.value === 'date' ? this.optionprops.dispatch(sortByDate()) : props.dispatch(sortByAmount())}}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)

