import React, { Component } from "react";
import Amplify from "aws-amplify";
import logo from "./aeFullLogo.png";
import FormContainer from "./components/forms/FormContainer";
import Questionnaire from "./Questionnaire.json";
import awsmobile from "./aws-exports";
import ProfileContainer from "./components/profiles/ProfileContainer";
import "./App.css";

Amplify.configure(awsmobile);

class App extends Component {
  state = {
    value: "",
    toggleForm: false,
    score: ""
  };

  componentDidMount() {
    Amplify.Logger.LOG_LEVEL = "INFO";
    // console.log("amplify", Amplify.API);
  }

  handleSubmit = score => {
    this.setState({ score });
    this.toggleForm();
  };

  toggleForm() {
    const { toggleForm } = this.state;

    this.setState({ toggleForm: !toggleForm });
  }

  render() {
    const { toggleForm, score } = this.state;

    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1:</h2>
          <h4>Student Questionnaire</h4>
        </header>
        <h4>
          Answer the following questions about your eating habits and food
          generally. There are no right answers when it comes to this quiz. It's
          a chance to learn more about yourself!
        </h4>
        {toggleForm ? (
          <ProfileContainer score={score} />
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
