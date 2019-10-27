import React, {Component} from 'react'


const withCopyright  = (YourComponent)=>{
    return class WithoutCopyright extends Component{
        render() {
            console.log(this.props)
            return(
                <>
                    {/*for pass the value of the component*/}
                    <YourComponent {...this.props}/>
                    <div>&copy; 2019 &emsp; G&nbsp;avin</div>
                </>
            )
        }
    }
}

export default withCopyright