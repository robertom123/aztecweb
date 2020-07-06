import React from 'react'
import LeftApi from './API/LeftApi'
import News from './API/News'

class Left extends React.Component{
    render(){
        return(
            <div>
                
                <LeftApi rando = {Math.floor(Math.random() * 10)}/>
                <News/>
                
            </div>
        )
    }
}
export default Left