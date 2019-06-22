import React from 'react'
import ConnectedExpenseList  from './ExpenseList'
import ExpenseListFilter from '../components/ExpenseListFilter'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ConnectedExpenseList />
    </div>
)

export default ExpenseDashboardPage