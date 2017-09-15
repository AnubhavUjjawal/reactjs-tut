import React from "react";
import { render } from "react-dom";
//import { Router, Route, browserHistory } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Root } from "./components/root";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Hello } from "./components/hello";
import { User } from "./components/user";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Route  path = '/' component = {Header}/>
                <Switch>
                    <Route path='/user' component={User}/>
                    <Route path='/hello' component={Hello}/>
                    <Route path='/home' component={Home}/>
                </Switch>   
            </div>    
            </BrowserRouter>
        )
    };
}

render(<App/>, window.document.getElementById('app'));