import React from 'react'

class Characters extends React.Component{
    constructor(){
        super();
        this.state = {}
    }



    render(){
        return(
            
        <div onClick ={this.props.handleChars}  className="dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 grow shadow-5 ">
            <div className="db dtc-ns v-mid-ns">
                <img src= {this.props.robo} alt = "robos" className=" w-100 mw7 w5-ns" />
            </div>
            <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
                <div>
                    <h1>Hero:{this.props.name}</h1>
                    <h1>Power:{this.props.power}</h1>
                </div>
                <p className="lh-copy">
                    Coming Soon
                </p>
            </div>
            <input
                type = "hidden"
                value = {this.props.number} 
            />
                 
        </div>
            
            
        )
    }
}

export default Characters;