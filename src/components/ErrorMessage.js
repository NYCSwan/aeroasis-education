import React from "react";

const ErrorMessage = props => (
  <div className="error-message-container">
    <text className="error-message">{props.message}</text>
  </div>
);

export default ErrorMessage;
