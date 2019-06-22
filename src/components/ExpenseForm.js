import React from 'react'
import moment from 'moment'
//import { SingleDatePicker } from 'react-dates'
//import 'react-dates/initialize'
//import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        console.log("cosntructor")

        this.state = {
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: false
        }
        console.log(props)
        console.log(props.description)
        console.log(this.state)
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if(!amount || amount.match(/^\d+\.?\d{0,2}$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }

    onFocusedChange = (focused) => {
        this.setState(() => ({calendarFocused:focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:true}))
        }else{
            this.setState(() => ({error:false}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: moment().valueOf(),
                notes: this.state.note
            })
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>Please provide valid input</p>}
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus 
                        value = {this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        type="text"
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm 

/*
<SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.focus}
                        onFocusChange = {this.onFocusedChange}
                        numberOfMonths={1}
                        isOutsideRange={false} //altrimenti passo una funzione
                        */