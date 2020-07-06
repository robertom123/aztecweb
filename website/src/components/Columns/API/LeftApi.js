import React from 'react'

class LeftApi extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        const url = 'https://raw.githubusercontent.com/robertom123/Quote/master/Quote.json'
        fetch(url)
        .then(res=> res.json())
        .then(
            res => {
                console.log(res)
                this.setState({
                    isLoaded: true,
                    items: res[this.props.rando].text
                })
            }
        )
    }
    render(){
        if(!this.state.isLoaded){
            return<div>Loading...</div>
        }
        else{
            return (
                <div>
                    <h3 className = "tc bb bw2">Wall of Encouragement</h3>
                    <p className = "tc f5 f4-m f3-l lh-copy measure mt0">{this.state.items}</p>
                    
                </div>
            )
        }
    }
}

export default LeftApi;