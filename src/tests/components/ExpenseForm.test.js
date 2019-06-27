import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'
import ExpenseForm from '../../components/ExpenseForm'
import moment from 'moment'

test('Should render ExpenseForm component', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should render ExpenseForm component with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot() 
}) 

test('Should show an error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should set description on input change', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

// test('Should set new date on date change', () => {
//     const now = moment()
//     const wrapper = shallow(<ExpenseForm />)
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now)
//     expect(wrapper.state('createdAt')).toEqual(now)
// }) 

// test('Should set calendar focus on change', () => {
//     const focused = true
//     const wrapper = shallow(<ExpenseForm />)
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
//     expect(wrapper.state('calendarFocused')).toBe(focused)
// }) 

test('Should set note on textarea change', () => {
    const value = 'My note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should set amount with valid input', () => {
    const value = '123.45'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should not set amount with invalid input', () => {
    const value = '123.453'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should call onSubmit prop for valid form sumbission', () => {
    const onSumbitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSumbitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSumbitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
}) 