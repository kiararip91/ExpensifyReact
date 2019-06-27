import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should set dafult state', () => {
    const state = expensesReducer(undefined, {type: '@@INT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {id: expenses[1].id}
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id does not exists', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {id: 'doesn not exists'}
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const expense = {
        id: 6,
        description: 'amazon',
        amount: 50,
        createdAt: 12345,
        note: ''
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const description = 'edited description'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {description}
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test('Should not edit the expense', () => {
    const description = 'edited description'
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'not existing id',
        updates: {description}
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})