import React, {Component} from 'react';  //use Fragment to create an empty tag or use <></>

import  {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'


class App extends Component {
    // state ={
    //     title:'TodoList'
    // }
    constructor(props){
        super(props)
        this.state={
            title:'TodoList',
            desc:'do as many as you can',

            article:'<div>gsdfgdfsgsgs<i>gfgsgvtsbs</i></div>',
            todos:[
                {
                    id:1,
                    title:'eat',
                    assignee:'Leo',
                    isCompleted:true
                },{
                id: 2,
                    title: 'sleep',
                    assignee:'nick',
                    isCompleted: false
                }]
        }
}
    render() {
        return (
            <>
                {/*
                   <div dangerouslySetInnerHTML={{__html:this.state.article}}/>
               */ }


                {/*
                   //this.state.todos[0].isCompleted?"finished":'unfinished'
                    this.state.todos.map(todo=>{
                        return <div key={todo.id}>{todo.title}</div>
                    })
              */ }


                        <TodoHeader x={1} y={2}>
                            <i>backlog</i>
                            {this.state.title}
                        </TodoHeader>
                         <TodoInput />

                <TodoList todos={this.state.todos}/>




            </>
            // <Fragment>
            // <TodoInput/>
            // <TodoHeader/>
            // <TodoList/>
            // <Fragment/>
        );
    }
}

export default App;

