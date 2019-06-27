import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p> 
            ) : (
                props.expenses.map((expense) =>
                    <ExpenseListItem key={expense.id} {...expense}/> )
            )
        }
    </div>
)

const mapStateToProp = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProp)(ExpenseList)