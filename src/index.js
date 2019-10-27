
import React,{Component} from 'react'
import {render} from 'react-dom'

class Counter extends



class App extends Component{
    render() {
        return(
            <>
                <CountBtn type={"decrement"}/>
                <Counter/>
                <CountBtn type={"increment"}/>
            </>
        )
    }
}

render(
    <Counter/>,
    document.querySelector('#root')
)