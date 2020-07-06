import React from 'react'

class SigninForm extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                            <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            name="isUserName"
                            id="isUserName"
                            onChange = {this.props.onUserNameChange}
                            
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            onChange = {this.props.onPasswordChange}
                            
                            />
                        </div>
                        </fieldset>

                        <span style = {{color: 'red', display: this.props.isWrong ? 'block' : 'none' }}>username or password is incorrect</span>
                        
                        <div className="">
                        <input
                            
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                            onClick = {this.props.onSubmit}
                        />
                        </div>
                    </div>
                    </main>
                </article>     
            </div>
        )
    }
}
export default SigninForm