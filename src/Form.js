import React, { Component } from 'react'

    
 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:''
         }
     }
     handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })

     }
     handleSubmit = ()=> alert(`${this.state.username}`)
     
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    {this.state.username}
                    <input type="submit" value="submit"/>
                </div>
            </form>
        )
    }
}

export default Form
