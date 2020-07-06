import React from 'react'

class Ranking extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
        
              <div>
                <span>{this.props.num}</span>
                <span>{this.props.name}</span>
                <span>{this.props.score}</span> 
               
              </div>
              
            
        )
    }
}

export default Ranking