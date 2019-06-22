import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <div>
        <header>Expensify</header>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName="is-active">New Expense</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </div>
)

export default Header