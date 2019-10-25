import React, {Component} from 'react';
import PropTypes from 'prop-types'
class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    static defaultProps = {
        btnText: 'add todo'
    }
    render() {
        return (
            <div>
                <input type="text"/>
                <button>{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput ;
