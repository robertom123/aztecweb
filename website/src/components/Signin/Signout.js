import React from 'react'

class Signout extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                <button onClick = {this.props.handleOut}>Sign out</button>      
            </div>
        )
    }

}
export default Signout