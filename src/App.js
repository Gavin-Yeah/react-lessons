import React, {Component} from 'react';  //use Fragment to create an empty tag or use <></>

import  {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
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

addTodo = (todoTitle) =>{
        // console.log(todoTitle);
        // this.setState({
        //     //3 is not an array,the return value of push() is the length
        //     todos: this.state.todos.concat({
        //         id:Math.random(),
        //         title: todoTitle,
        //         isCompleted:false
        //     })
        // })

    const newTodos = this.state.todos.slice();
    newTodos.push({
        id: Math.random(),
        title: todoTitle,
        isCompleted: false
    })
    this.setState({
        todos:newTodos
    })
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

                        </TodoHeader>
                         <TodoInput
                         addTodo = {this.addTodo}/>

                <TodoList todos={this.state.todos}/>

                <Like/>


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

