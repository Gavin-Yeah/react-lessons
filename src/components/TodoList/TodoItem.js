//PureComponent only compare the 1st layer of the component. we can use it to avoid multi render
import React, {PureComponent} from 'react';
//define an empty func
const noop = ()=>{}
class TodoItem extends PureComponent {
   //old version: initialize state by props in constructor, then through update, state will not be updated
    // constructor(props){
    //     super(props);
    //     this.state={
    //         completedText:props.isCompleted?'finished':'unfinished'
    //     }
    // }
    // use componentWillReceiveProps to update
    // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({
    //         completedText: nextProps.isCompleted?'finished':'unfinished'
    //     })
    // }

    //new version
    constructor(){
        super();
        this.state ={
            completedText:''
        }
    }
    static getDerivedStateFromProps(props){
            return ({
                        completedText: props.completed?'finished':'unfinished'
                    })
}


    handleCheckboxChange = ()=>{
      // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id);

        //simpler way
        const {
            onCompletedChange= noop,
            id
        } = this.props;
        onCompletedChange(id);



    }
// componentWillMount() {
//         console.log('willMount');
// }





// shouldComponentUpdate(nextProps, nextState, nextContext) {
//
//         return (nextProps.isCompleted !== this.props.isCompleted);
// }






    render() {
        console.log(`todoItem ${this.props.title} render`)
        const{
            completed,
            title
        } = this.props;

        return (
            <li>
                <input type="checkbox"
                checked={completed}
                       onChange={this.handleCheckboxChange}
                />
                <span>{title} {this.state.completedText}</span>
            </li>
        );
    }
}

export default TodoItem;