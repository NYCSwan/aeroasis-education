import React from "react";

import "./css/SingleTextInput.css";

const SingleTextInput = props => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  </div>
);

export default SingleTextInput;
