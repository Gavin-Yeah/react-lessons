import React from 'react'
import ReactDOM from 'react-dom'
//create a simple react element
// const createApp = (props) => {
//     return (<div>
//         {/*if you want to insert js code to jsx,you should add {}*/}
//         <h1>Welcome {props.title}!!!</h1>
//         <p>React is A JavaScript library for building user interfaces</p>
//         <p>great {props.title}</p>
//     </div>);
// }
// const app = createApp({
//     title:'React 16.8'
// });


//the 1st way to create a component: use arrow function. the name starts with capital
const App = (props) => {
    return (<div>
        {/*if you want to insert js code to jsx,you should add {}*/}
        <h1 title={props.title}>Welcome {props.title}!!!</h1>
        <p>React is A JavaScript library for building user interfaces</p>
        <p>great {props.title}</p>
    </div>);
};

ReactDOM.render(
    <App title='1901'/>,
    document.querySelector('#root')
);