
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []
    }
  
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  validateNotEmpty(fieldName, value) {
    if (value.length == 0) {
      return `${fieldName} is empty.`;
    }
  }

  validateEmailFormat(fieldName, value) {
    let [left, right] = value.split("@");
    if (left.length <= 0 || right.length <= 0) {
      return `${fieldName} is empty.`;
    }
  }

  validateUsernameOnBlur(event) {
    let username = event.target.value;
    let errors = this.state.errors;
    this.state.errors.push(this.validateNotEmpty("Username", event.target.value));
    this.setState({ username, errors });
  }

  validatePasswordOnBlur(event) {
    let password = event.target.value;
    let errors = this.state.errors;
    this.state.errors.push(this.validateNotEmpty("Password", event.target.value));
    this.setState({ password, errors });
  }

  validateEmailOnBlur(event) {
    let email = event.target.value;
    let errors = this.state.errors;
    this.state.errors.push(this.validateEmailFormat("Email", event.target.value));
    this.setState({ email, errors });
  }
  
  validatePasswordConfirmationOnBlur(event) {
    let passwordConfirmation = event.target.value;
    let errors = this.state.errors;
    if (event.target.value != this.state.password) {
      this.state.errors.push(`Passwords do not match.`);
    }
    this.setState({ passwordConfirmation, errors });
  }

  submitForm(event) {
    console.log("Submitting the form...");
    console.log(event);
    this.setState({errors: []});
  }

  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur}/><br/>
        Password: <input type="text" onBlur={this.validatePasswordOnBlur}/><br/>
        Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur}/><br/>
        Email: <input type="text" onBlur={this.validateEmailOnBlur}/><br/>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((err, i) => <p key={`err-${i}`}>{err}</p>)}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Login Form</h1>
        {this.displayErrors()}
        <hr></hr>
        {this.displayForm()}
      </div>
    )
  }
}

export default App;
