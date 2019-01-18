import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = props => (
  <div className="error-message-container">
    <h4 className="error-message">{props.message}</h4>
  </div>
);

export default ErrorMessage;
