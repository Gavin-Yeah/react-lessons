import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.title} {this.props.isCompleted?'finished':'unfinished'}
            </li>
        );
    }
}

export default TodoItem;