
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], loading : true };
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: ["Hello there!", "How are you?"],
        loading: false
      });
    }, (10000));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  renderProfile() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      )
    }

    if (this.state.messages && this.state.messages.length > 0) {
      return (
        <ul>
          {this.state.messages.map((message, index) => <li key={`${index}`}>{message}</li>)}
        </ul>
      )
    } else {
      return (
        <p>No messages !</p>
      )
    }
  }

  render() {
    return (
      <div className="App">
        User Profile
        {this.renderProfile()}
      </div>
    )
  }
}

export default App;
