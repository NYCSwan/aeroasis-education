import React from "react";
import CheckboxOrRadioGroup from "./RadioInput";
import RadioGridInput from "./RadioGridInput";

import TextArea from "./TextArea";
import SingleTextInput from "./SingleTextInput";
import Select from "./Select";

import "./css/FormContainer.css";

class FormContainer extends React.Component {
  state = {
    q0: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: [],
    q6: [],
    q7: "",
    q8: "",
    q9: [],
    q10: [],
    q11: []
  };

  componentDidMount() {}

  componentWillUnmount() {}

  handleInput = e => {
    console.log("handle input");
    e.preventDefault();
    const len = e.target.className.length - 2;
    const question = e.target.className.slice(len);
    // debugger;
    this.setState({ [question]: e.target.value });
  };

  // handleRadioClick = e => {
  //   console.log("handle radio click");
  //   e.preventDefault();
  //   const response = e.target.value;
  //   const question = e.target.className.slice(14);
  //   // debugger;
  //   this.setState({ [question]: response });
  // };

  handleRadioGridClick = e => {
    console.log("handle radio grid click");
    const { q5, q10, q11 } = this.state;

    // e.preventDefault();
    const response = e.target.value;
    const question = e.target.className.slice(14);
    const subAnswer = e.target.name;
    let answers = [];
    if (question === "q5") {
      answers = q5;
    } else if (question === "q10") {
      answers = q10;
    } else {
      answers = q11;
    }
    answers.push({ [subAnswer]: response });
    debugger;

    this.setState({ [question]: answers });
  };

  handleCheckboxClick = e => {
    console.log("handle checkbox click");
    const { q6, q9 } = this.state;

    // e.preventDefault();
    const response = e.target.value;
    const question = e.target.className.slice(14);
    // debugger;
    this.setState({ [question]: response });
  };

  handleSubmit = () => {
    console.log("handleSubmit");
    this.props.handleSubmit();
  };

  render() {
    const { questions } = this.props;
    const { q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11 } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <Select
          name={questions[0].q0.question}
          options={questions[0].q0.options}
          controlFunc={this.handleInput}
          selectedOption={q0}
          placeholder="I love..."
          id="q0"
        />
        <SingleTextInput
          title={questions[1].q1.question}
          content={q1}
          controlFunc={e => this.setState({ q1: e.target.value })}
          placeholder="Yes when ..."
          name="name"
          inputType="text"
        />
        <TextArea
          id="q2"
          resize={true}
          name={questions[2].q2.question}
          rows={3}
          content={q2}
          controlFunc={this.handleInput}
        />
        <Select
          name={questions[3].q3.question}
          options={questions[3].q3.options}
          controlFunc={this.handleInput}
          selectedOption={q3}
          placeholder="Pick the best fit"
          id="q3"
        />
        <Select
          name={questions[4].q4.question}
          options={questions[4].q4.options}
          controlFunc={this.handleInput}
          selectedOption={q4}
          placeholder="mostly..."
          id="q4"
        />
        <RadioGridInput
          id="q5"
          setName={questions[5].q5.question}
          options={questions[5].q5.options}
          controlFunc={this.handleRadioGridClick}
          selectedOption={q5}
        />
        <CheckboxOrRadioGroup
          setName={questions[6].q6.question}
          options={questions[6].q6.options}
          controlFunc={this.handleCheckboxClick}
          selectedOptions={q6}
          type="checkbox"
          id="q6"
        />
        <Select
          name={questions[7].q7.question}
          options={questions[7].q7.options}
          controlFunc={this.handleInput}
          selectedOption={q7}
          placeholder="Pick the best option"
          id="q7"
        />
        <Select
          name={questions[8].q8.question}
          options={questions[8].q8.options}
          controlFunc={this.handleInput}
          selectedOption={q8}
          placeholder="Pick the best option"
          id="q8"
        />
        <CheckboxOrRadioGroup
          setName={questions[9].q9.question}
          options={questions[9].q9.options}
          controlFunc={this.handleCheckboxClick}
          selectedOptions={q9}
          type="checkbox"
          id="q9"
        />
        <RadioGridInput
          id="q10"
          setName={questions[10].q10.question}
          options={questions[10].q10.options}
          controlFunc={this.handleRadioGridClick}
          selectedOption={q10}
        />
        <RadioGridInput
          id="q11"
          setName={questions[11].q11.question}
          options={questions[11].q11.options}
          controlFunc={this.handleRadioGridClick}
          selectedOption={q11}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormContainer;
