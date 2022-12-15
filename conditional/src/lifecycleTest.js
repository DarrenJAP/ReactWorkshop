
import React, { Component } from "react";
import './App.css';

class LifecycleTest extends Component {
    constructor(props) { 
        super(props);
        console.log("lifecycle constructor");
    }

    render() {
        return (
        <p>The conditional is true !</p>
        )
    }
}

export default LifecycleTest;
