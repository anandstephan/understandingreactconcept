import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    }
    changeMessage=()=>{
        console.log(this);
        this.setState({
            message:'Thanks for you giving your time'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Click Me</button>
            </div>
        )
    }
}
