import React from 'react'
import SignForm from './SigninForm'
import Signout from './Signout'
import FormApp from '../../containers/Form/FormApp'

class Signin extends React.Component{
    constructor(){
        super()
        this.state = {
            isUserName: '',
            isPassword: '',
            isWrong: false,
            isLogged: false

        }
        
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleOut = this.handleOut.bind(this);
        
    }
    handleOut(){
        this.setState({
            isLogged: false,
            isUserName: ''
        })
        console.log(this.state.isUserName)
    }
    onUserNameChange(e){
        this.setState({
            isUserName: e.target.value
        })
    }

    onPasswordChange(e){
        this.setState({
            isPassword: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.isUserName)
        console.log(this.state.isPassword)
        console.log('iswrong', this.state.isWrong)
        fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.isUserName,
                password: this.state.isPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('sign in', data)
            if(data === 'Username Found'){
               this.setState({
                   isLogged: true 
               })
            }
            else{
                console.log('hello')
                console.log('iswrong', this.state.isWrong)
                this.setState({
                    isWrong: true
                })
            }
        })
        console.log('is wrong end', this.state.isWrong)
        
    }  

    render(){
        if(this.state.isLogged){
            return(
                <div>
                    <Signout handleOut = {this.handleOut} />
                    <FormApp isUserName = {this.state.isUserName}/>
                    
                </div>
            )
        }
        else{
        return(
            <div>
                <SignForm onUserNameChange = {this.onUserNameChange}
                         onPasswordChange = {this.onPasswordChange}
                         isWrong = {this.state.isWrong}
                         onSubmit = {this.onSubmit}
                />

            </div>
        )
        }
    }
}

export default Signin