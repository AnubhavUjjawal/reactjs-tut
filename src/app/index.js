import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Home } from "./components/home";
class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            nav_link: 'Home',
        };
    }
    onGreet(){
        alert('Hello');
        console.log('Hello');
    }

    onChangeLink(new_link){
        this.setState({
            nav_link: new_link,
        });
        console.log(this.state.nav_link);
    }
    
    render(){
        
        //var hobby = ['coding', 'hacking', 'fucking', 'painting'];
        return (
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-xs-10 col-xs-offset-1' >
                       <Header linkName = {this.state.nav_link}>
                       </Header>    
                    </div>
                </div> 
                <div className = 'row'>
                    <div className = 'col-xs-10 col-xs-offset-1' >
                       <Home name = {'Anubhav'} age = {18} greet = {this.onGreet} changeLink = {this.onChangeLink.bind(this)}>
                       </Home>    
                    </div>
                </div>            
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'))