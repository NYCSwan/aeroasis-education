import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import SingleTextInput from "../forms/SingleTextInput";
import logo from "./../../aeFullLogo.png";
import ErrorMessage from "../ErrorMessage";
import { validateEmail, validateHumanity } from "../../utils/helpers";

import "./AuthContainer.css";

class AuthContainer extends Component {
  state = {
    email: "",
    errorMessage: "",
    recaptchaResponse: ""
  };

  componentDidMount() {
    this.recaptcha = React.createRef();
  }

  componentWillUnmount() {
    // this.recaptcha.reset();
  }

  handleEmail = e => {
    const { email, recaptchaResponse } = this.state;
    e.preventDefault();
    const validated = validateEmail(email);
    if (!validated) {
      // this.recaptcha.reset();
      this.setState({ errorMessage: "Please enter a valid email address." });
    } else if (recaptchaResponse !== "") {
      debugger;

      const res = {
        response: recaptchaResponse,
        secret: process.env.REACT_APP_CAPTCHA_SECRET
      };
      validateHumanity(res);
      this.props.handleEmail(email);
    } else {
      this.props.handleEmail(email);
    }
  };

  handleCaptchaResponseChange(response) {
    // debugger;
    this.setState({
      recaptchaResponse: response
    });
  }

  render() {
    const { email, errorMessage } = this.state;

    return (
      <div className="auth-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1:</h2>
          <h4>Student Questionnaire</h4>
        </header>
        <div className="auth-body">
          {errorMessage !== "" && <ErrorMessage message={errorMessage} />}
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
            <div className="recaptcha">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_CAPTCHA_SITEKEY}
                onChange={this.handleCaptchaResponseChange}
              />
            </div>
            <input type="submit" value="Submit" className="auth btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default AuthContainer;
