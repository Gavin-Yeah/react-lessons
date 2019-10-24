import React,{Component} from 'react'
import {render} from 'react-dom'



//2nd way to define a component: use class, inherit React.Component
// class App extends Component{
//     render() {
//         //console.log(this.props.title);
//         return(
//             <div className="app" id='appRoot'>
//                <h1 className="title">JSC theory</h1>
//                 <p>class component extends React.Component</p>
//             </div>
//
//         )
//             ;
//     };
//
// }


//react original component creation
class App extends Component{
    render() {
        //console.log(this.props.title);
        return(
            //React.createElement is a function to create an element, having infinite parameters, but the first two must be :
            // tag name and attribute object
            //the rest are the children elements
           React.createElement(
               'div',
               {
                   className:'app',
                   id:'root'
               },
               React.createElement(
                   'h1',
                   {
                       className:'title'
                   },
                   'jsx theory'
               ),
               React.createElement(
                   'p',
                   null,
                   'class component extends React.Component'
               )
           )

        )
            ;
    };

}




//js original component creation
// const appDom =
// {
//     tag:'div',
//         attrs:{
//         className:'app',
//             id:'appRoot'
//
// },
//     children:[
//         {
//         tag:'h1',
//     attrs:{
//     className:'title',
//
// },
//     children:[
//         'JSX theory'
//     ]},{
//             tag:'p',
//             attrs: null,
//             children:[
//                 'class component extends React.Component'
//             ]
//         },
//
//     ]
// };

//render is provided by ReactDOM, just used once
render(
    <App />,
    document.querySelector('#root')
);

