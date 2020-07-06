import React from 'react'

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(
            <div onClick = {this.props.handleTimer}> 
                <input type = "hidden" value = {this.props.timerVal}/>
                <button className="pa5 bg-light-green br3 grow shadow-5">
                <span>{this.props.time}</span>
                </button>       
            </div>
        )
    }
}

export default Timer;