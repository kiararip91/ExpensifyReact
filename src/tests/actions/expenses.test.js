import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {id:'123abc'}
    })
})

test('should setup edit expense object', () => {
    const action = editExpense('123abc',{note: 'new note'} )
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        expense: {note: 'new note'}
    })
})

test('should setup add expense object with provided values', () => {
    const providedData = {
        description: 'My expense',
        amount: 123,
        createdAt: 1000,
        note: 'this is the rent'
    }
    const action = addExpense(providedData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...providedData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense object with default values', () => {
    const defaultData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    })
})