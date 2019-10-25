//in react we get component or dom by ref. we should import React.createRef
import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types'
class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    static defaultProps = {
        btnText: 'add todo'
    }
    constructor(){
        super();
        this.state = {
            inputValue:''
        }
        //create ref in constructor
        this.inputDom = createRef();

    }
    handleInputChange=(e)=>{
        this.setState({
            inputValue:e.currentTarget.value
        })
    }
    handleAddClick=(e)=>{

        //check value
        if(this.state.inputValue===''){
            alert("null")
            return
        }
        console.log(this.inputDom)
        this.props.addTodo(this.state.inputValue);
        //console.log(e.keyCode)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus()
        })
    };
    handleKeyUp = (e)=>{
        if(e.keyCode===13){ //return keycode=13
            this.handleAddClick();
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput ;
