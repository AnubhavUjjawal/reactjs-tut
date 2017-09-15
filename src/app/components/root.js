import React from "react";


import {Header} from "./header";

export class Root extends React.Component{

    render(){
        //console.log(this.props.children);
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-xs-10  col-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-xs-10  col-offset-3">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}