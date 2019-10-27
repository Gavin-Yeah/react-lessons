
//createContext is a method to pass  values in different components
import React,{Component, createContext} from 'react'

//createContext() returns an object with Provider and Consumer
//Provider is used to provide states
//Consumer is used to receive states

const{
    Provider,
    Consumer: CounterConsumer   //deconstruct to  CounterConsumer
} = createContext();





// encapsulate Provider into ConuterProvider
class CounterProvider extends Component{
    constructor(){
        super();
        //the states here are shared,
        this.state = {
            count:100
        }
    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count +1
        })
    }

    decrementCount = () =>{
        this.setState({
            count: this.state.count-1
        })
    }



    render() {
        return(
            //use provider with value, in which pass any data
            <Provider value={
                {count: this.state.count,
                    onIncrementCount:this.incrementCount,
                    onDecrementCount:this.decrementCount
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}
export {
    CounterConsumer,
    CounterProvider
}