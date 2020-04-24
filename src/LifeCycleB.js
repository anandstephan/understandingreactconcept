import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"steve"
         }
         console.log("Consturctor of LifeCycle B")
     }
     static getDerivedStateFromProps(props,state){
         console.log("LifeCycle B get Derived State");
         return null;
     }

     componentDidMount(){
         console.log("Life Cycle B Did Mount");
     }
    render() {
        console.log("Life Cyclee B render")
        return (
            <div>
            <h1>Life Cycle B</h1>            
            </div>
        )
    }
}

export default LifeCycleB
