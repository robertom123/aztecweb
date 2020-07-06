import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css'
import Home from './containers/Tab/Home'
import FormApp from './containers/Form/FormApp'
import Option from './components/Options/Option'
import SigninApp from './containers/Signin/SigninApp'
import Resources from './components/Tab/Resources'
import Contact from './components/Tab/Contact'
import {HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <HashRouter basename = '/'>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/Option" component = {Option} />
        <Route path = "/Resources" exact component = {Resources}/>
        <Route path = "/Contact" component = {Contact} />
    </HashRouter>, document.getElementById('root'));



