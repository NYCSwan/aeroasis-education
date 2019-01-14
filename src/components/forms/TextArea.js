import React from "react";

const TextArea = props => (
  <div className="form-group">
    <label className="form-label">{props.name}</label>
    <textarea
      className={`form-txtrea-${props.id}`}
      style={props.resize ? null : { resize: "none" }}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
