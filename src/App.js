import React, { Component } from "react";
import logo from "./aeFullLogo.png";
import FormContainer from "./components/forms/FormContainer";
import Questionnaire from "./Questionnaire.json";
import "./App.css";

class App extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    // console.log(Questionnaire);
    // const q = Questionnaire[0];
    // try {
    // return fetch("./public/Questionnaire.json")
    //   .then(res => {
    // debugger;
    //     console.log("res", res);
    //   })
    //   .catch(e => {
    //     console.log("e", e);
    //   });
    // } catch (e) {
    //   console.log("e", e);
    // } finally {
    // }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    console.log("handle submit");
    e.preventDefault();
    debugger;
  };

  render() {
    return (
      <div className="App">
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
        <FormContainer
          questions={Questionnaire}
          handleSubmit={this.handleSubmit}
        />
        <footer className="App-link">(C)2019 Aeroasis</footer>
      </div>
    );
  }
}

export default App;

// Type of eater:
// Question 1, give yourself 1 point if you marked answer 1 or 2. Give yourself 3 points if you marked answer 3, 4 or 5. Give yourself 4 points if you answered 6.
// Question 2, give yourself 1 point if you marked answer 1. Give yourself 2 points if you marked answer 2. Give yourself 3 points if you marked answer 4 or 5.
// Question 3, give yourself 1 point if you marked answer 1 or 2. Give yourself 2 points if you marked answer 3 or 4. Give yourself 3 points if you marked answer 5.
// Question 5, give yourself 2 points if you marked answer 1,2 or 4. Give yourself 1 point if you marked answer 2 or 5.
// Question 6, give yourself 3 points if you answered mostly ‘Eat it’. Give yourself 1 point if you answered mostly ‘Throw it away’. Give yourself 2 points if you answered mostly ‘Share with someone’.
// Question 7 give yourself 3 points if you marked answer 1. Give yourself 1 point if you marked answer 2 or 5. Give yourself 2 points if you answered 3 or 4.
//
// Finally, add up all the points!
//
// Footprint:
// Question 2:
// 1 -- 4pts
// 2 -- 4pts
// 3 -- 1pt
// 4 -- 2pts
//
// Question 3:
// 1 -- 3pts
// 2 -- 1pt
// 3 -- 3pts
// 4 -- 3pts
//
// Question  4:
// 1 -- 2pts
// 2 -- 4pts
// 3 -- 1pt
// 4 -- 4pts
// 5 -- 3pts
// 6 -- 4pts
//
// Question  5:
// 1 -- 3pts
// 2 -- 2pts
// 3 -- 1pt
// 4 -- 1pt
// 5 -- 4pts
//
// Question 7:
// 1 -- 1pt
// 2 -- 4pts
// 3 -- 1pt
// 4 -- 1pt
// 5 -- 1pt
