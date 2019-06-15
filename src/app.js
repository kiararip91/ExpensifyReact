import ReactDOM from 'react-dom'
import React from 'react'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css' 
import './styles/styles.scss'

//Componenti Stateless sono piu veloci perche non devono gestire lo stato
//Non gestiscono il lifecycle del componente (fire some methods ecc..)

ReactDOM.render(<AppRouter />, document.getElementById("app"))