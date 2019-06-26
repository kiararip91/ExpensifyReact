import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

 const expenses = [{
     id: '1',
     description: 'Gum',
     note: '',
     createdAt: 0,
     amount: 192
 },
 {
    id: '2',
    description: 'Rent',
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    amount: 1222333
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf(),
    amount: 1932
}]

 test('Should filter by text value', () => {
     const filters = {
         text: 'e',
         sortBy: 'date',
         startDate: undefined,
         endDate: undefined
     }
     const result = selectExpenses(expenses, filters)
     expect(result).toEqual([expenses[2], expenses[1]])
     
 })

test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
    
})

test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
    
})

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
    
})

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
    
})

