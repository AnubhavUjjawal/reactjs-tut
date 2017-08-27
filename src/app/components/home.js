import React from "react";

export class Home extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div className = "container">
                
                    your name is {this.props.name} and your stream is {this.props.stream}<br/>
                    <h4><b>Hobbies</b></h4>
                
                <div>
                    <ul>
                        {this.props.hobbies.map((hobby, i)=> <li key = {i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
                 
            </div>
        )
    };
}

Home.propTypes = {
    name: React.PropTypes.string,
    hobbies: React.PropTypes.array,
    stream: React.PropTypes.string,
    children: React.PropTypes.any,
};