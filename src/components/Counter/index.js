import React, {Component} from 'react';
import {CounterConsumer} from "../../counterStore";

class Counter extends Component {
    render() {

        return(
            //use CounterConsumer to receive count

            <CounterConsumer>
                {
                    //must be a method. the parameter is the value of the Provider
                    ({count})=>{

                        return <span>{count}</span>
                    }
                }
            </CounterConsumer>
        )
    }
}

export default Counter;