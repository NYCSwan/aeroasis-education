import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    console.log("handle submit");
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aeroasis Education Lesson 1: Student Questionnaire</h2>
          <h4>
            Answer the following questions about your eating habits and food
            generally. There are no right answers when it comes to this quiz.
            It's a chance to learn more about yourself!
          </h4>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            How many times a day do you typically eat?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Where does most of your meals come from each week?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            If you looked in your fridge, would you see more
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            What is your favorite type of food to eat?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Where would you go to buy the ingredients for a hamburger? Choose
            all that apply.
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            If you are at lunch, and are given milk, a chicken sandwich (or
            veggie if you're a vegetarian), some pickles, and an apple, what do
            you do with this food? Anything you don’t eat?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            If your family makes dinner at home, and there are lots of
            leftovers, what does your family do with them?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            What is yourHow far do you think the average tomato will travel to
            reach your supermarket?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            How does the food you eat affect you throughout your day?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Have you ever grown any plants before this class? If so tell us
            about it?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            On a scale of 1 to 5, how much interest do you have in the following
            subjects?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
