import React from 'react'
import Signin from '../../components/Signin/Signin'
import Nav from '../../components/Nav'

class SigninApp extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                <Nav/>
                <Signin />
            </div>
        )
    }
}

export default SigninApp