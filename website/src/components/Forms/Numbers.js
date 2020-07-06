import React from 'react'

class Numbers extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(
            <div onClick = {this.props.handleNum}>
                <input type = "hidden" value = {this.props.numValues} />
                <button className="pa5 mr2 bg-light-green dib br3 pa3 ma2 grow shadow-5">
                    <span>{this.props.num}</span>
                </button>               
            </div>
        )
    }
}

export default Numbers;