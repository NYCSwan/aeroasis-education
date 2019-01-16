import React, { Component } from "react";
import Amplify from "aws-amplify";
import logo from "./aeFullLogo.png";
import FormContainer from "./components/forms/FormContainer";
import Questionnaire from "./Questionnaire.json";
import awsmobile from "./aws-exports";
import ProfileContainer from "./components/profiles/ProfileContainer";
import { calculateQuizScore } from "./utils/helpers";
import "./App.css";

Amplify.configure(awsmobile);

class App extends Component {
  state = {
    value: "",
    toggleForm: false,
    scores: [3, 5]
  };

  componentDidMount() {
    Amplify.Logger.LOG_LEVEL = "INFO";
    // console.log("amplify", Amplify.API);
  }

  handleSubmit = response => {
    const score = calculateQuizScore(response);
    debugger;
    this.setState({ scores: score });

    this.toggleForm();
  };

  toggleForm() {
    const { toggleForm } = this.state;

    this.setState({ toggleForm: !toggleForm });
  }

  render() {
    const { toggleForm, scores } = this.state;

    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1:</h2>
          <h4>Student Questionnaire</h4>
        </header>

        {toggleForm && scores.hasOwnProperty([0]) ? (
          <ProfileContainer score={scores[0]} />
        ) : (
          <FormContainer
            questions={Questionnaire}
            handleSubmit={this.handleSubmit}
          />
        )}
        <footer className="App-link">(C)2019 Aeroasis</footer>
      </main>
    );
  }
}

export default App;
