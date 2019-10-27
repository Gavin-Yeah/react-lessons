//need to import useState useEffect
import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'

//react hooks makes function have own state
const Counter = ()=>{
    //useState is a function, parameter is the initial state. this function returns an array [state,setState]
    const [count,setCount] = useState(0);
    //useEffect is a callback function. when update ot load, it will be called, like the combination of componentMount and componentUpdate
    useEffect(()=>{
        console.log('update')
        document.title = `当前的数量为${count}`;
    })
    return(
        <div>
            <p>当前的数量为{count}</p>

            <button onClick={()=>{setCount(count-1)}}>-</button>

            <span>{count}</span>

            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}

render(
    <Counter/>,
    document.querySelector('#root')
)