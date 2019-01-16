import React from "react";
import Amplify, { graphqlOperation } from "aws-amplify";

import RadioGridInput from "./RadioGridInput";
import TextArea from "./TextArea";
import SingleTextInput from "./SingleTextInput";
import Select from "./Select";
import CheckboxGroup from "./CheckboxInput";
import ErrorMessage from "../ErrorMessage";
import * as mutations from "../../graphql/mutations";

import "./css/FormContainer.css";

class FormContainer extends React.Component {
  state = {
    q0: "Candy and sweets",
    q1: "yes",
    q2: "ghjgjhgh",
    q3: "",
    q4: "",
    q5: [],
    q6: [],
    q7: "",
    q8: "",
    q9: [],
    q10: [],
    q11: [],
    errorMessage: ""
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

  handleRadioGridClick = e => {
    console.log("handle radio grid click");
    const { q5, q10, q11 } = this.state;

    // e.preventDefault();
    const response = e.target.value;
    const question = e.target.className.split(" ")[1];
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

    this.setState({ [question]: answers });
  };

  handleCheckboxClick = e => {
    console.log("handle checkbox click");
    const { q6, q9 } = this.state;
    const response = e.target.value;
    const question = e.target.className.slice(14);
    let answers = [];

    if (question === "q6") {
      answers = q6;
    } else {
      answers = q9;
    }
    answers.push(response);
    // e.preventDefault();
    this.setState({ [question]: answers });
  };

  handleSubmit = async e => {
    console.log("handleSubmit");
    const { q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11 } = this.state;
    e.preventDefault();
    // debugger;
    const response = {
      q0: q0,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9,
      q10: q10,
      q11: q11
    };

    if (
      q0 === "" ||
      q1 === "" ||
      q2 === "" ||
      q3 === "" ||
      q4 === "" ||
      !q5.hasOwnProperty([0]) ||
      q6 === "" ||
      q7 === "" ||
      q8 === "" ||
      !q10.hasOwnProperty([0]) ||
      !q11.hasOwnProperty([0])
    ) {
      this.setState({
        errorMessage:
          "You forgot to answer one or more of the questions. Please review your answers and enter any missing responses."
      });
    } else {
      return await Amplify.API.graphql(
        graphqlOperation(mutations.createResponses, {
          input: response
        })
      )
        .then(res => {
          console.log("create item res", res);

          // debugger;
          this.props.handleSubmit(response);
          // return res.data["createResponses"];
        })
        .catch(err => {
          console.log("Problem creating item in db", err);
          this.setState({ errorMessage: err });
          return err;
        });
      // return graphql
    }
  };

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
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
    });
  }

  render() {
    const { questions } = this.props;
    const {
      q0,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      errorMessage
    } = this.state;

    return (
      <div className="form">
        <h4>
          Answer the following questions about your eating habits and thoughts
          on food generally. There are no right answers when it comes to this
          quiz. It's a chance to learn more about yourself!
        </h4>
        <form onSubmit={this.handleSubmit} className="form-container">
          {errorMessage !== "" && <ErrorMessage message={errorMessage} />}
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
            name={questions[1].q1.question}
            inputType="text"
          />
          <TextArea
            id="q2"
            resize={true}
            name={questions[2].q2.question}
            rows={5}
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
          <CheckboxGroup
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
          <SingleTextInput
            title={questions[8].q8.question}
            content={q8}
            controlFunc={e => this.setState({ q8: e.target.value })}
            placeholder="I think..."
            name={questions[8].q8.question}
            inputType="text"
          />
          <Select
            name={questions[9].q9.question}
            options={questions[9].q9.options}
            controlFunc={this.handleInput}
            selectedOption={q9}
            placeholder="Pick the best option"
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
          <input type="submit" value="Submit" className="btn" />
          <button onClick={this.handleClearForm} className="clear">
            Clear form
          </button>
        </form>
      </div>
    );
  }
}

export default FormContainer;

// Photo by Bruno Thethe on Unsplash -- bread
// Photo by rawpixel on Unsplash -- sweets
// Photo by Zac Cain on Unsplash -- meat
// Photo by Kimberly Nanney on Unsplash -- Fruit
// Photo by Anna Pelzer on Unsplash --veggie
