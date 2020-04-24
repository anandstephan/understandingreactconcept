import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
    }
    greetParent = (child)=>{
        alert(`Hello ${this.state.parentName} ${child}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}
