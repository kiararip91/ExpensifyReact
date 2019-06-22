
import React from 'react'
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ExpenseListItem = ({dispatch,id, description, amount, createdAt}) => (
    <div>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <Link to={`edit/${id}`}>Edit</Link>
    </div>
)

export default connect()(ExpenseListItem)