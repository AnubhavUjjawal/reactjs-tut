import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
            age : props.age,
        }
    }
    makeMeOlder(){
        this.setState({
            age: this.state.age + 2,
        })
        console.log(this.age);
    }
    render(){
        //console.log(this.props);
        return(
            <div className = "container">
                    Your name is {this.props.name} and your age is {this.state.age}<br/>
                <button className='btn btn-primary' onClick = {() => this.makeMeOlder()}>Make me older!</button>
            </div>
        )
    };
}