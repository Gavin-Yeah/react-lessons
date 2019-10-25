import React, {Component} from 'react';
//define an empty func
const noop = ()=>{}
class TodoItem extends Component {

    handleCheckboxChange = ()=>{
      // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id);

        //simpler way
        const {
            onCompletedChange= noop,
            id
        } = this.props;
        onCompletedChange(id);



    }

    render() {
        const{
            isCompleted,
            title
        } = this.props;

        return (
            <li>
                <input type="checkbox"
                checked={isCompleted}
                       onChange={this.handleCheckboxChange}
                />
                <span>{title} {isCompleted?'finished':'unfinished'}</span>
            </li>
        );
    }
}

export default TodoItem;