import React,{Component} from 'react'
import {render} from 'react-dom'

//2nd way to define a component: use class, inherit React.Component
class App extends Component{
    render() {
        //console.log(this.props.title);
        return(
            <div>
                <h1>class component</h1>
                <p>{this.props.title}</p>
            </div>

        )
            ;
    };

}
//the theory of class component
// const app = new App({
//     title:"class component extends React.Component"
// }).render();


//render is provided by ReactDOM, just used once
render(
    <App title={"class component extends React.Component"} x="abc"/>,
    document.querySelector('#root')
);

//before react 16, use this way to create
// React.createClass({
//     render(){
//         return <h1>xxx</h1>
//     }
// })