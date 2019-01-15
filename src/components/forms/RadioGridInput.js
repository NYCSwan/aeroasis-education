import React from "react";
import { keys } from "lodash";
import "./css/RadioGridInput.css";
import RadioGroup from "./RadioInput";

class RadioGridInput extends React.Component {
  renderItem() {
    const { options } = this.props;

    const questions = [];

    options.map(opt => {
      const key = keys(opt)[0];
      // debugger;
      questions.push(key);
      return key;
    });

    return (
      <div className="grid-group">
        {options.map((opt, idx) => {
          // debugger;
          return (
            <RadioGroup
              key={`${this.props.id}${questions[idx]}`}
              setName={questions[idx]}
              options={opt[questions[idx]]}
              controlFunc={this.props.controlFunc}
              selectedOptions={this.props.selectedOption}
              type="radio"
              id={this.props.id}
            />
          );
        })}
      </div>
    );
  }
  render() {
    // const indx = keys(this.props.options);

    return (
      <div className="form-group grid">
        <label className="grid-label">{this.props.setName}</label>
        {this.renderItem()}
      </div>
    );
  }
}

export default RadioGridInput;
