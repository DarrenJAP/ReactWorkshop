
import React, { Component } from "react";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false
    }
    this.toggleMessageVisibility = this.toggleMessageVisibility.bind(this);
  }

  toggleMessageVisibility() {
    this.setState({showMessage: !this.state.showMessage});
  }

  messageVisibility() {
    if (!this.state.showMessage) {return;}
    return (
      <div>
        I am the secret message !
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleMessageVisibility}>Click to toggle visibility!</button>
        {this.messageVisibility()}
      </div>
    )
  }
}

export default App;