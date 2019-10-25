//use index,js. when import this file, we input the directory name and the index.js will be applied automatically
import React from 'react'
import PropTypes from 'prop-types'
export default function TodoHeader(props){
    console.log(props);
    return  (
        <>
        <h1>
            {props.children}
        </h1>
            <h3>
                {props.title}
            </h3>
            <p>{props.x+props.y}</p>
        </>
        )





}
TodoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,

}
TodoHeader.defaultProps = {
    title:'hi'
}