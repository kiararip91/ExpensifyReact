import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// - pure functions
// - never change status or action
const countReducers = (store = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: store.count + action.incrementBy
            }
        case 'DECREMENT':
             return {
                 count: store.count - action.decrementBy
             }
        case 'RESET':
             return {
                 count: 0
             }
        case 'SET':
             return {
                count: action.count
             }
        default:
            return store
    }
    
}

const store = createStore(countReducers)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Increment the count
store.dispatch(incrementCount({incrementBy:5}))

//unsubscribe()

store.dispatch(decrementCount({decrementBy:3}))

store.dispatch(decrementCount({decrementBy:10}))

store.dispatch(resetCount())

store.dispatch(setCount({count:3}))


