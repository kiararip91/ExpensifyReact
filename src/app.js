import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css' 
import configureStore from './store/configureStore'
import './styles/styles.scss'
import {addExpense} from './actions/expenses'
import getVisibleExpense from './selectors/expenses'

const store = configureStore()

// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

store.dispatch(addExpense({description:'Water Bill', amount: 500, createdAt: 123}))
store.dispatch(addExpense({description:'Gas Bill',amount: 35, createdAt: 44}))
store.dispatch(addExpense({description:'Rent',amount: 3522112, createdAt: 2339230923}))

const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))