import React from 'react'
import SigninApp from '../../containers/Signin/SigninApp'
import FormApp from '../../containers/Form/FormApp'
import Nav from '../Nav'

class Option extends React.Component{
    constructor(){
        super()
        this.state = {
            modePrac: false,
            modeQuiz: false
        }
        this.modePrac = this.modePrac.bind(this)
        this.modeQuiz = this.modeQuiz.bind(this)
    }
    modePrac(){
        this.setState({
            modePrac : true
        })
    }
    modeQuiz(){
        this.setState({
            modeQuiz : true 
        })
    }
    render(){
        if(this.state.modePrac){
            return(<FormApp/>)
        }
        else if(this.state.modeQuiz){
            return(<SigninApp/>)
        }
        else{
        return(
            <div>
                <Nav/>
                <div className = 'flex items-center justify-center pa4 '  >
                    <input className = "f6 dim br2 ph3 pv2 mb2 dib white bg-dark-blue  " type = 'button' value = 'Practice' onClick = {this.modePrac} />
                    <input className = "f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green" type = 'button' value = 'Quiz' onClick = {this.modeQuiz} />
                </div>
            </div>
        )
    }
    }
}

export default Option