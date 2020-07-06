import React from 'react'
import Nav from '../Nav'

class Resources extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
            <Nav/>
            <h3 className = "tc">Math</h3>
            <ul className="list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover">
                <a href="https://math.imaginelearning.com/users/sign_in" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/ImagineMath.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Imagina Matemáticas/Imagine Math</span>
                    </div>
                    </li>
                </a>
                <a href="https://bigbrainz.com/login/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/MathFacts.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Multiplication/Multiplicacion</span>
                    </div>
                    </li>
                </a>
                <a href="https://www.mathsisfun.com/numbers/math-trainer-multiply.html" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/MathFun.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Math Trainer</span>
                    </div>
                    </li>
                </a>
                <a href="https://www.prodigygame.com/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/Prodigy.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Prodigy</span>
                    </div>
                    </li>
                </a>
                <a href="https://swunmath.com/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/swun.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Swun Math</span>
                    </div>
                    </li>
                </a>
            </ul>
            <h3 className = 'tc'>Lectura Y Lenguaje</h3>
            <ul className="list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover">
                <a href="https://api.imaginelearning.com/signin?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DDirectLoginClient%26redirect_uri%3Dhttps%253A%252F%252Fapi.imaginelearning.com%252FproductSelection%26response_type%3Did_token%2520token%26scope%3Dapi.transfer%2520api.assessment%2520api.manager%2520api.permissions%2520openid%26state%3Dc799e1e2b1d248b390781595ff08a062%26nonce%3Deb7f806591334ae998846052baa613f4" 
                    className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/ImagineMath.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Imagine Learning</span>
                    </div>
                    </li>
                </a>
                <a href="https://readtheory.org/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/ReadTheory.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Read Theory: Lectura</span>
                    </div>
                    </li>
                </a>
                <a href="http://myfcoeportal.org/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/FOD.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">My FCOE Portal</span>
                    </div>
                    </li>
                </a>
                <a href="https://www.getepic.com/students" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/Epic.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Get epic </span>
                    </div>
                    </li>
                </a>
                <a href="https://www.storylineonline.net/" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/Story.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">StoryOnline </span>
                    </div>
                    </li>
                </a>
            </ul>
            <h3 className = "tc">ELA/Literatura</h3>
            <ul className="list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover">
                <a href="https://classroom.google.com/u/0/h" className="f6 link blue hover-dark-gray">
                    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 grow">
                    <img className="w2 h2 w3-ns h3-ns br-100" src='./Images/classroom.png' alt = "icon"/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">Google Classroom</span>
                    </div>
                    </li>
                </a>
            </ul>
            </div>
        )
    }
}

export default Resources