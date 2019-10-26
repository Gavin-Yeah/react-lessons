import React, {Component} from 'react';  //use Fragment to create an empty tag or use <></>

import  {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

import {getTodos} from './services'

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
            ]
            ,isLoading: false
        }
}
getData = ()=>{
        this.setState({
            isLoading:true
        })
    getTodos().then(resp =>{
        console.log(resp)
        if (resp.status === 200){
            this.setState(
                {todos:resp.data}
            )

        }else{
            //process error

        }
    })
        .catch(err=>{
            console.log(err)
        }).finally(()=>{
        this.setState({
            isLoading:false
        })
    })
}
componentDidMount() {
  this.getData()
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
        completed: false
    })
    this.setState({
        todos:newTodos
    })
}


onCompletedChange = (id)=>{

    this.setState((prevState)=>{
        return {
            todos:prevState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
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
                {
                    this.state.isLoading?
                        <div>loading...</div>:
                        (<TodoList todos={this.state.todos}
                                   onCompletedChange={ this.onCompletedChange}
                    />)
                }


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

