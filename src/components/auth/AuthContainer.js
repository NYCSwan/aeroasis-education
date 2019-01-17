import React, { Component } from "react";
import SingleTextInput from "../forms/SingleTextInput";
import logo from "./../../aeFullLogo.png";

import "./AuthContainer.css";

class AuthContainer extends Component {
  state = {
    email: ""
  };

  handleEmail = e => {
    e.preventDefault();
    // this.setState();
    // store email address
    this.props.handleEmail();
  };
  // enter email
  // captcha

  render() {
    const { email } = this.state;

    return (
      <div className="auth-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1:</h2>
          <h4>Student Questionnaire</h4>
        </header>
        <div className="auth-body">
          <h3 className="auth-info">
            In order to access the Aeroasis quiz, please enter either your or
            your teacher's email address below according to their instructions.
          </h3>
          <form className="auth-form" onSubmit={this.handleEmail}>
            <label className="auth-label">Email Address</label>
            <SingleTextInput
              name="email address"
              type="text"
              value={email}
              controlFunc={e => this.setState({ email: e.target.value })}
              placeholder="Enter email"
            />
            <input type="submit" value="Submit" className="auth btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default AuthContainer;
