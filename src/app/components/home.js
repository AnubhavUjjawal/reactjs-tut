import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.age = props.age;

    }
    makeMeOlder(){
        this.age += 2;
        console.log(this.age);
    }
    render(){
        //console.log(this.props);
        return(
            <div className = "container">
                    Your name is {this.props.name} and your age is {this.age}<br/>
                <button className='btn btn-primary' onClick = {() => this.makeMeOlder()}>Make me older!</button>
            </div>
        )
    };
}