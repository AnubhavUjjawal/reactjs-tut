import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
            age : props.age,
            link: props.linkName,
        }
    }
    makeMeOlder(){
        this.setState({
            age: this.state.age + 2,
        })
        console.log(this.state.age);
    }

    changeHeaderLink(){
        console.log(this.state.link);
        this.props.changeLink(this.state.link);
    }

    onHandleChange(event){
        this.setState({
            link: event.target.value,
        })
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
                <br/><br/>
                <input type='text' value={this.state.link} onChange = {(event) => this.onHandleChange(event)}/>
                <br/>
                <button className = 'btn btn-success'  onClick = {this.changeHeaderLink.bind(this)}> change Header</button>
            </div>
        )
    };
}
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
}