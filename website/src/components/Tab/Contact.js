import React from 'react'
import Nav from '../Nav'

class Contact extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <Nav/>
                
                <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4  shadow-hover">
                <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">Mendota Mccabe Elementray School </h1>
                    <div className="pa3 bt b--black-10">
                        <h4>Mendota Mccabe Elementray School</h4>
                        <h5>Address</h5>
                        <p>250 South Derrick Street</p>
                        <p>Mendota, CA 93640</p>
                        <h5>Phone</h5>
                        <p>(559)655-4262</p>
                        <h5>Email</h5>
                        <p><span className = "email">myramartinez@mendotaschools.org</span></p>
                    </div>
                </article>
            </div>
        )
    }
}

export default Contact