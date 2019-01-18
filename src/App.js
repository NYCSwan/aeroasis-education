import React, { Component } from "react";
import Amplify from "aws-amplify";
import logo from "./aeFullLogo.png";
import FormContainer from "./components/forms/FormContainer";
import Questionnaire from "./assets/libs/Questionnaire.json";
import awsmobile from "./aws-exports";
import ProfileContainer from "./components/profiles/ProfileContainer";
import AuthContainer from "./components/auth/AuthContainer";
import { calculateQuizScore } from "./utils/helpers";

import "./App.css";
Amplify.configure(awsmobile);

class App extends Component {
  state = {
    toggleForm: false,
    auth: false,
    email: "",
    scores: [
      {
        type: "energy",
        score: 0
      },
      {
        type: "consumer",
        score: 0
      }
    ]
  };

  componentDidMount() {
    // Amplify.Logger.LOG_LEVEL = "INFO";
    // console.log("amplify", Amplify.API);
  }

  handleEmail = async e => {
    this.setState({ auth: true, email: e });
  };

  handleSubmit = response => {
    const score = calculateQuizScore(response);

    // debugger;
    this.setState({ scores: score });

    this.toggleForm();
  };

  toggleForm() {
    const { toggleForm } = this.state;

    this.setState({ toggleForm: !toggleForm });
  }

  render() {
    const { toggleForm, scores, auth, email } = this.state;

    if (auth === false) {
      return <AuthContainer handleEmail={this.handleEmail} />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1:</h2>
          <h4>Student Questionnaire</h4>
        </header>

        {toggleForm === true && scores[0].score > 0 ? (
          <ProfileContainer scores={scores} />
        ) : (
          <FormContainer
            questions={Questionnaire}
            handleSubmit={this.handleSubmit}
            email={email}
          />
        )}
        <footer className="App-link">(C)2019 Aeroasis</footer>
      </div>
    );
  }
}

export default App;
