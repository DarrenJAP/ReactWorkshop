
import React, { Component } from "react";
import Comment from "./Comment.js"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.jsonData = require('./comments.json');
  }

  render() {
    // console.log(this.jsonData.comments[0].name);

    return (
      <div className="App">
        <h1>Comments</h1>
        <hr/>
        {
          this.jsonData.comments.map((comment, index) => <Comment name={this.jsonData.comments[index].name} 
          image={this.jsonData.comments[index].image} text={this.jsonData.comments[index].text}
          time={this.jsonData.comments[index].time} comments={this.jsonData.comments[index].comments} />)
        }
      </div>
    )
  }
}

export default App;
