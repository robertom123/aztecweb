import React from 'react'

class News extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
        <div>
            <h3 className = "tc bb bw2">News</h3>
            <p className = "tc f5 f4-m f3-l lh-copy measure mt0">Bring your stuff to class</p>
        </div>)
    }
}

export default News 