import React from "react";

export class User extends React.Component{

    constructor(props){
        super();
        goHome: this.goHome.bind(this); 
    }

    goHome(){
        this.props.history.push('/home');
    }

    render(){
        console.log("in userjs.");
        console.log(this.props);
        
        return(
            <div>
                <h3>The User Page</h3>
                <h5>User id:{this.props.match.params.id}</h5>
                <button className="btn btn-primary" onClick={()=> this.goHome()}>Go Home</button>

            </div>
        )
    };
}