import React,{Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from "styled-components"

import './index.css'
console.log(styled);
const Title = styled.h1`
color:#d00
`;
class App extends Component {
    render() {
        const style = {color:'#F00'};
        return(
            <div>
                <h1 style={style}>the style of the element</h1>
                <Title> styled</Title>
                <ol>
                    <li>use inline style </li>
                    <li className='has-text-red'> use class but in react class is coded as className</li>
                    <li className={classNames('a',{'b':true, 'c':false})}>add classNames dynamically using classNames </li>
                    <li>classNames only have a and b</li>
                </ol>
            </div>
        )
    }
}



//render is provided by ReactDOM, just used once
render(
    <App />,
    document.querySelector('#root')
);

