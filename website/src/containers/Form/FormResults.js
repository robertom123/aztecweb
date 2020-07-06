import React from 'react'
import Submit from '../../components/Submission/Submit'
import FormApp from './FormApp'
import Nav from '../../components/Nav'

class FormResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            back: false,
            score: this.props.CorrectAns/50*100,
            isUserName: this.props.isUserName,
            complete: false
        }
        this.retry = this.retry.bind(this)
        this.sendScore = this.sendScore.bind(this)
    }
    retry(){
        this.setState({
            back: true
        })
    }
    sendScore(e){
        console.log('username',this.state.isUserName)
        e.preventDefault();
        fetch('http://localhost:5000/updateScore', {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.isUserName, 
                score: this.state.score
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('updated', data)
            console.log('score updated')
        })
        this.setState({
            complete: true
        })
        
    }
    render(){
        //let score = this.props.CorrectAns/50*100
        if(this.state.back){
            return(<FormApp/>)
        }
        else{
        return(
            <div>
                {!this.state.isUserName ? <Nav/> : null}
                <div className = "dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 grow shadow-5">
                    <h1>Completed</h1>
                    <h1>Correct:{this.state.score}%</h1>
                </div>
                <div className = 'dt mw6 center '>
                    <Submit isUserName = {this.state.isUserName}  retry = {this.retry} sendScore = {this.sendScore} complete = {this.state.complete}/>
                </div>
            </div>
        )
    }
    }
}

export default FormResults