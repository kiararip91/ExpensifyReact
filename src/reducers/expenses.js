//  Expense Reducer
const expensesReducerDefault = []

export default (state = expensesReducerDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((el) => el.id !== action.expense.id)
        case 'EDIT_EXPENSE':
            return state.map((el) => el.id == action.id ? {...el, ...action.updates} : el)
        default:
            return state
    }
}