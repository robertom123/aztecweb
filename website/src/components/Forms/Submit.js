import React from 'react'

class Submit extends React.Component{
    constructor(){
        super()
        this.state = {
            isFilled: false
        }
    }
    
   

    render(){
        if (this.props.currentStep !== 3) {
            return null
          } 
        return(
            <div>
                <h1 className="tc f1 lh-solid">{this.props.mins}:{this.props.secs}</h1>
                <h1 className = 'tc f2 lh-solid'>Bar Goes Here</h1>
                <div className = "db center mw5 tc black">
                    <div className = "f4 card dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 shadow-5">
                        <h1>{this.props.randomProb}</h1>
                        <h1>x</h1>
                        <h1>{this.props.userChoice}</h1>
                        <form onSubmit = {this.props.keyPressed}>
                            <input value = {this.props.empty} type = "number" name = "answer" onChange = {this.props.handleChangeInput}/>
                            <input type = "submit" name = "submit" onClick = {this.props.Clicker} />  
                        </form>
                    </div>   
                </div>
            </div>
        )
    }
}


export default Submit