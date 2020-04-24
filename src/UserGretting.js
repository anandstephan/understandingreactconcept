import React, { Component } from 'react'

class UserGretting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {

        return this.state.isLogged?
        <h1>Welcome Steve</h1>:
        <h1>Welcome Guest</h1>
        // let message; // using element variable
        // if(this.state.isLogged)
        // message = <h1>Welcome Steve</h1>
        // else
        // message = <h1>Welcome Guest</h1>
        // return message;
        // if(this.state.isLogged){ // using if-else
        //     return <h1>Welcome Steve</h1>
        // }
        // else{
        //     return <h1>Welcome guest</h1>
        // }
        // return (
        //     <div>
        //         <h1>Welcome Steve</h1>
        //         <h1>Welcome Guest</h1>
        //     </div>
        // )
    }
}

export default UserGretting
