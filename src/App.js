import React, {Component} from 'react';
import {
    CounterBtn, Counter
} from "./components";

class App extends Component {
    render() {
        return(
            <>
                <CounterBtn type={"decrement"}>-</CounterBtn>
                <Counter/>
                <CounterBtn type={"increment"}>+</CounterBtn>
            </>
        )
    }
}

export default App;