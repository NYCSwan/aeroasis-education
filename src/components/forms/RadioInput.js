import React from "react";
import "./css/RadioInput.css";

const RadioGroup = props => (
  <div
    className={`radio-container-${props.type}`}
    key={`${props.id}${props.setName}`}
  >
    <label className="form-label">{props.setName}</label>
    <div className={`radio-group ${props.type}`}>
      {props.options.map((opt, idx) => {
        const check = props.selectedOptions.filter(opt => opt[props.setName]);

        return (
          <label key={opt} className="form-label capitalize">
            <input
              className={`form-radio ${props.id}`}
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={
                check.hasOwnProperty([0]) && check[0][props.setName] === opt
              }
              type={props.type}
            />{" "}
            {opt}
          </label>
        );
      })}
    </div>
  </div>
);

// type RadioGroup = {
// title: String,
// type: String,
// setName: String,
// options: <Array>,
// selectedOptions:<Array>,
// controlFunc: React.PropTypes.func.isRequired
// };

export default RadioGroup;
