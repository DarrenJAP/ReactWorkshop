
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      questions: [{
        question: "What animal barks?",
        possibleAnswers: ["Dog", "Cat"],
        rightAnswer: "Dog",
        playerChoice: null
      },{
        question: "What animal is more closely related to a tiger?",
        possibleAnswers: ["Dog", "Cat"],
        rightAnswer: "Cat",
        playerChoice: null
      },{
        question: "What animal is more closely related to a wolf?",
        possibleAnswers: ["Dog", "Cat"],
        rightAnswer: "Dog",
        playerChoice: null
      },{
        question: "What animal is best known for playing fetch?",
        possibleAnswers: ["Dog", "Cat"],
        rightAnswer: "Dog",
        playerChoice: null
      }]
    }
  }

  displayResult(index) {
    if (this.state.questions[index].playerChoice == this.state.questions[index].rightAnswer) {
      return (
        <div>
          <p className="result-correct">You are correct!</p>
        </div>
      )
    } else if (this.state.questions[index].playerChoice == null) {
      return (<div></div>)
    } else {
      return (
        <div>
          <p className="result-incorrect">You are incorrect!</p>
        </div>
      )
    }
  }

  displayQuestion(index) {
    const question = this.state.questions[index];
    return (
      <div className="question-display" key={`${index}`}>
        <p className="question">{question.question}</p>
        <br/>
        {
          question.possibleAnswers.map((answer, answerIndex) => (<button key={`q-${index}-a-${answerIndex}`}
          onClick={() => this.answerQuestion(index, question.possibleAnswers[answerIndex])}
          className="question-choice">{question.possibleAnswers[answerIndex]}</button>))
        }
        <br/>
        {this.displayResult(index)}
        <br/>
      </div>
    )
  }

  updatePlayerScore() {
    let newScore = 0;
    for (let i = 0; i < this.state.questions.length; i++) {
      if (this.state.questions[i].playerChoice == this.state.questions[i].rightAnswer) {
        newScore += 1;
      }
    }
    this.setState({playerScore: newScore});
    console.log(newScore);
  }

  answerQuestion(index, choice) {
    const question = this.state.questions[index];
    question.playerChoice = choice;
    let allQuestions = this.state.questions;
    allQuestions[index] = question;
    this.setState({questions: allQuestions}, ()=>this.updatePlayerScore());
  }

  renderQuestions() {
    return (
      <div>
        {this.state.questions.map((question, index) => this.displayQuestion(index))}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Animal Quiz</h1>
        <hr/>
        {this.renderQuestions() }
      </div>
    )
  }
}

export default App;
