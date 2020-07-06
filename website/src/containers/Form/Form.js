import React from 'react'
import Characters from '../../components/Forms/Characters'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        
        return(
            <div> 

                    <input 
                        type = "hidden" 
                        onChange = {this.props.handleChange}
                    />
                    <Characters handleChars = {this.props.handleChars}  robo = "./Images/cat.png" name = "Cat" number = "1"/>
                    <Characters handleChars = {this.props.handleChars} robo = "./Images/yellow.png" name = "Robo" number = "2" />
                    <Characters handleChars = {this.props.handleChars} robo = "./Images/mojo.png" name = "Mojo" number = "3"/>
                
            </div>
        )
    }
}

export default Form