import React, {Component} from 'react';
import {increment, decrement} from '../../actions/cart'
class CartList extends Component {

    constructor(){
        super();
        this.state = {
            cartList:[]
        }
    }

    getState = () =>{
        this.setState({
            cartList:this.props.store.getState().cart
        })
    }
    componentDidMount() {
       this.getState()
        this.props.store.subscribe(this.getState)
    }

    render() {
        console.log(this.state)
        return (
           <table>
               <thead>
               <tr>
                   <th>id</th>
                   <th>product name</th>
                   <th>price</th>
                   <th>amount</th>
                   <th>operate</th>
               </tr>
               </thead>
               <tbody>

              {
                  this.state.cartList.map(item => {
                  return (
                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>
                              <button onClick={()=>{
                                  this.props.store.dispatch(decrement(item.id))
                              }}>-</button>
                              <span>{item.amount}</span>
                              <button onClick={()=>{
                                  this.props.store.dispatch(increment(item.id))
                              }}>+</button>
                          </td>
                          <td></td>
                      </tr>
                  );
              })}
               </tbody>
           </table>
        );
    }
}

export default CartList;