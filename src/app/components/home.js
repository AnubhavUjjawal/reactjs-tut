import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
            age : props.age,
            link: 'New Link',
        }
    }
    makeMeOlder(){
        this.setState({
            age: this.state.age + 2,
        })
        console.log(this.state.age);
    }

    changeHeaderLink(){
        this.props.changeLink(this.state.link);
    }

    render(){
        //console.log(this.props);
        return(
            <div className = "container">
                    Your name is {this.props.name} and your age is {this.state.age}<br/>
                <button className='btn btn-primary' onClick = {() => this.makeMeOlder()}>Make me older!</button>
                <button className = 'btn btn-danger' onClick = {() => this.props.greet()}>Greet!</button>
                <hr/>
                <button className = 'btn btn-primary' onClick = {this.changeHeaderLink.bind(this)}>Change Header</button>
            </div>
        )
    };
}
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
}