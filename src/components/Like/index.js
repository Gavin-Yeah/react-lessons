import React, {Component} from 'react';

class Like extends Component {
    constructor(){
        super()
        this.state ={
            isLiked:false
        }
    }
    handleLikedClick = ()=>{
        //cannot use this.state.isLike=!this.state.isLike. the data will change but the website will not render, is an async function
        //1. an object
        // this.setState({
        //     isLiked:!this.state.isLiked
        // })

        //2. a function
        this.setState((prevState,props)=>{
            console.log(prevState,props);
            console.log('this.state.isLiked inside setState:', this.state.isLiked);
            return {
                isLiked: !this.state.isLiked
            }
        },()=>{
            //because setState is async, if want to get the newest state, we should obtain it in callback function
            console.log('this.state.isLiked inside callback:', this.state.isLiked);
        })
        console.log('this.state.isLiked outside setState:', this.state.isLiked);
    }

    render() {

        return (
            <div>
                <span onClick={this.handleLikedClick}>
                {
                    this.state.isLiked?'cancel 💙':'like 🖤'
                }
                </span>
            </div>
        );
    }
}

export default Like;