import React from 'react'
import FormApp from '../../containers/Form/FormApp'
import SigninApp from '../../containers/Signin/SigninApp'
import Complete from '../Submission/Complete'
import Nav from '../Nav'
class Submit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUserName: this.props.isUserName
        }
    }
 
    render(){
        if(this.props.complete){
            return(
            <div>
                <Complete/>
            </div>)
        }
        else{
            return(
                <div>
                    <input type = 'button' value = 'Retry' onClick = {this.props.retry}  />
                    <input style = {{display: this.props.isUserName ? 'block' : 'none'}} type = 'submit' onClick = {this.props.sendScore} />
                </div>
            )
            }
        
    }
}

export default Submit