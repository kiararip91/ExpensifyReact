import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {id}
})

// EDIT_EXPENSE
const editExpense = (id, expense) => ({
    type: 'EDIT_EXPENSE',
    id,
    expense
})

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//  Expense Reducer
const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((el) => el.id !== action.expense.id)
        case 'EDIT_EXPENSE':
            return state.map((el) => el.id == action.id ? {...el, ...action.expense} : el)
        default:
            return state
    }
}

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate:  undefined
}

const filterReducer = (state = filterReducerDefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}
        case 'SORT_BY_AMOUNT':
                return {...state, sortBy:'amount'}
        case 'SORT_BY_DATE':
                return {...state, sortBy:'date'}
        case 'SET_START_DATE':
            return {...state, startDate:action.startDate}
        case 'SET_END_DATE':
              return {...state, endDate:action.endDate}
        
        default:
            return state
    }
}

// Get visilble expense
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate 
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount > b.amount ? 1 : -1
        }
    })
}

// text = '' sortBy = date startDate = undefined endDate = undefined
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters : filterReducer
    }
))

// Chiamata ogni volta che cambia lo stato ?
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000}))
const expense2 = store.dispatch(addExpense({ description: 'Coffe', amount: 3, createdAt: -1000}))

//store.dispatch(removeExpense({id:expense1.expense.id}))
store.dispatch(editExpense(expense2.expense.id, {amount:5}))
//store.dispatch(setTextFilter("Re"))

store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

//store.dispatch(setStartDate(10))
//store.dispatch(setEndDate("456"))

const demoState = {
    expenses: [{
        id: 'qeqrewgdsf',
        description: 'this is my description',
        note: 'this is my note',
        amount: 200,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate:  undefined
    }
}