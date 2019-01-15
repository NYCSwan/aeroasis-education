import React from "react";
import "./css/CheckboxInput.css";

const CheckboxGroup = props => (
  <div
    className={`checkbox-container-${props.type}`}
    key={`${props.id}${props.setName}`}
  >
    <label className="checkbox-label">{props.setName}</label>
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
              checked={props.selectedOptions.includes(opt)}
              type={props.type}
            />{" "}
            {opt}
          </label>
        );
      })}
    </div>
  </div>
);

// type CheckboxGroup = {
// title: String,
// type: String,
// setName: String,
// options: <Array>,
// selectedOptions:<Array>,
// controlFunc: React.PropTypes.func.isRequired
// };

export default CheckboxGroup;
