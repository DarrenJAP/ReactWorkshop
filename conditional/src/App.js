
import React, { Component } from "react";
import LifecycleTest from "./lifecycleTest";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Conditional
        <hr/>
        {true && <LifecycleTest/>}
      </div>
    )
  }
}

export default App;
