import React from 'react'
import Numbers from '../../components/Forms/Numbers'
import Timer from '../../components/Forms/Timer'

class Test extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        if (this.props.currentStep !== 2) {
            return null
          } 
        return(
            <div> 
                <h1 className = "tc">Set Time</h1>
                <div className="flex justify-around ">
                    <Timer time = "2" timerVal = "2" handleTimer= {this.props.handleTimer}/>
                    <Timer time = "3" timerVal = "3" handleTimer= {this.props.handleTimer}/> 
                    <Timer time = "4" timerVal = "4" handleTimer= {this.props.handleTimer}/>   
                </div>
                <h1 className = "tc">Set Number</h1>
                <div className="flex flex-wrap flex justify-around">
                    <Numbers num = "2" numValues = "2" handleNum = {this.props.handleNum}/>
                    <Numbers num = "3" numValues = "3" handleNum = {this.props.handleNum}/>
                    <Numbers num = "4" numValues = "4" handleNum = {this.props.handleNum}/>
                    <Numbers num = "5" numValues = "5" handleNum = {this.props.handleNum}/>
                    <Numbers num = "6" numValues = "6" handleNum = {this.props.handleNum}/>
                    <Numbers num = "7" numValues = "7" handleNum = {this.props.handleNum}/>
                    <Numbers num = "8" numValues = "8" handleNum = {this.props.handleNum}/>
                    <Numbers num = "9" numValues = "9" handleNum = {this.props.handleNum}/>
                    <Numbers num = "10" numValues = "10" handleNum = {this.props.handleNum}/>
                </div>
                                                       
            </div>
        )
    }
}

export default Test

/**
 *  <input
                        type = "hidden"
                        className="form-control"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                    />
 * 
 */