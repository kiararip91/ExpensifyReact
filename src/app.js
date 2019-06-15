import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css' 
import './styles/styles.scss'

//Componenti Stateless sono piu veloci perche non devono gestire lo stato
//Non gestiscono il lifecycle del componente (fire some methods ecc..)

ReactDOM.render(<p>This is the new app</p>, document.getElementById("app"))