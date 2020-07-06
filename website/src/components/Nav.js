import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(
            <div>
                <header>
                    <h1 className = "new-font title tc f-headline lh-solid">Mrs. Sanchez Classroom</h1>
                </header>
                <nav className="mb3 bb tc mw7 center">
                    <Link className = "nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to = '/'>Home</Link>
                    <Link className = "nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to = '/Option'>Game</Link>
                    <Link className = "nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to = '/Resources'>Resources</Link>
                    <Link className = "nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to = '/Contact'>Contact</Link>   
                    
                </nav>
            </div>
        )
    }
}

export default Nav;