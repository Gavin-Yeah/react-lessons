import React from 'react'
import {render} from 'react-dom'
import App from './App'
//if you want global prototype of React.Component, like ajax function to the global module's this, you cau use the following way
// import all ajax requests
// import * as service from "./services"
//attach http to prototype of component, then you can use this.http.xxx(function name) to execute some function
// React.Component.prototype.http = service




render(
    <App/>,
    document.querySelector('#root')

)