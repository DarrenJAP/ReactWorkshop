
import React, { Component } from "react";
import UserCountDisplay from "./UserCountDisplay.js";
import LoginDisplay from "./LoginDisplay.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserCountDisplay/>
        <LoginDisplay/>
      </div>
    )
  }
}

export default App;
