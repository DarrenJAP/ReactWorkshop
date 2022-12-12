
import React, { Component } from "react";

function Greeting(props)
{
  return (<p>Hello {props.name}!</p>);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.title = "React App";
    this.clicks = 0;
  }

  renderClickCount() {
    return (<p>I have been clicked {this.clicks} times!</p>);
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <br/>
        <Greeting name="User"></Greeting>
        {this.renderClickCount()}
      </div>
    );
  }
}

export default App;