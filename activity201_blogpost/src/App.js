
import React, { Component } from "react";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextLength: 0
    }
    this.textAreaOnKeyUp = this.textAreaOnKeyUp.bind(this);
    this.submitButtonOnClick = this.submitButtonOnClick.bind(this);
  }

  textAreaOnKeyUp(event) {
    let textString = event.target.value;
    let textLength = textString.length;
    this.setState({inputTextLength: textLength});
  }

  displayCurrentCharacters() {
    return (
      <div>
        <p>{this.state.inputTextLength} character(s)!</p>
      </div>
    )
  }

  submitButtonOnClick() {
    let alertText = "";
    if (this.state.inputTextLength >= 100) {
      alertText = "Submitting the blog post!";
    } else {
      alertText = "Must be at least 100 characters!"
    }
    alert(alertText);
  }

  render() {
    return (
      <div>
        <h1>Blog Post Writer</h1>
        <hr/>
        <h2>Write your post here</h2>
        <p>Must be atleast 100 characters!</p>
        <textarea cols="50" rows="10" className="textArea" onKeyUp={this.textAreaOnKeyUp}></textarea>
        <br/> {this.displayCurrentCharacters()}
        <button onClick={this.submitButtonOnClick}>Submit</button>
      </div>
    )
  }
}

export default App;
