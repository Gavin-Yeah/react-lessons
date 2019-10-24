import React, {Component} from 'react';  //use Fragment to create an empty tag or use <></>

import  {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'


class App extends Component {
    render() {
        return (
            <>
            <TodoInput/>
            <TodoHeader/>
            <TodoList/>
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