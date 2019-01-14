import React from "react";
import "./css/Select.css";

const Select = props => (
  <div className="form-group">
    <label className="form-label">{props.name}</label>
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
      className={`form-select ${props.id}`}
    >
      <option value="">{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
      })}
    </select>
  </div>
);

export default Select;
