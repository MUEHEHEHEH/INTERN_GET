import React from "react";

const Label = (props) => {
  const { htmlFor, children, text } = props;
  return (
    <label htmlFor={htmlFor} className={`block mb-2 ${text}`}>
      {children}
    </label>
  );
};

export default Label;
