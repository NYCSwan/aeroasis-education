import React from "react";
import "./css/RadioInput.css";

const CheckboxOrRadioGroup = props => (
  <div
    className={`checkbox-container-${props.type}`}
    key={`${props.id}${props.setName}`}
  >
    <label className="form-label">{props.setName}</label>
    <div className={`checkbox-group ${props.type}`}>
      {props.options.map((opt, idx) => {
        // debugger;
        return (
          <label key={opt} className="form-label capitalize">
            <input
              className={`form-checkbox ${props.id}`}
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={
                props.selectedOptions[idx] &&
                props.selectedOptions[idx][props.setName] === opt
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

// type CheckboxOrRadioGroup = {
// title: String,
// type: String,
// setName: String,
// options: <Array>,
// selectedOptions:<Array>,
// controlFunc: React.PropTypes.func.isRequired
// };

export default CheckboxOrRadioGroup;
