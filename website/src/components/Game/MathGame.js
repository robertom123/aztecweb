import React from 'react'

class MathGame extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
        <div>
            <h1>{this.props.randomProb}</h1>
            <h1>x</h1>
            <h1>{this.props.userChoice}</h1>
            <input type = "number" name = "answer" onChange = {this.props.handleChangeInput}/>
        </div>
        )
    }
}

export default MathGame;