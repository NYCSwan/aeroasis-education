"use strict";

import React from "react";
import "./css/RadioInput.css";

const CheckboxOrRadioGroup = props => (
  <div>
    <label className="form-label">{props.question}</label>
    <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={props.selectedOptions.indexOf(opt) > -1}
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
