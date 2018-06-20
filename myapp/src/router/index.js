import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "../page/home";
import App from "../App.js";
import About from "../page/about";
import Topics from '../page/topics';
import Undeway from '../page/underway';
import Completed from '../page/completed';
import Details from '../page/detail';
import Char from '../page/chart';
import Register from '../page/register';
import Login from '../page/login';

const Routes = ()=>(
    <Router>
        <App>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/char" component={Char}/>
            <Route path="/about/:id" component={Details}/>
            <Route path="/topics" render={()=>{
                return(
                <Topics>
                    <Switch>
                        <Redirect exact from="/topics" to="/topics/underway"/>
                        <Route path="/topics/underway" component={Undeway}/>
                        <Route path="/topics/compeled" component={Completed}/>
                        
                    </Switch>
                </Topics>
                )
                }
            }/>
        </App>
    </Router>
)
export default Routes;