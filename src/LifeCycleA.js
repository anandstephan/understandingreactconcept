import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"steve"
         }
         console.log("Consturctor of LifeCycle A")
     }
     static getDerivedStateFromProps(props,state){
         console.log("LifeCycle A get Derived State");
         return null;
     }

     componentDidMount(){
         console.log("Life Cycle A Did Mount");
     }
    render() {
        console.log("Life Cyclee A render")
        return (
            <div>
            <h1>Life Cycle A</h1>  
            <LifeCycleB/>          
            </div>
        )
    }
}

export default LifeCycleA
