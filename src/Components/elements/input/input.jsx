import React from "react";

const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    width = "w-[408px]",
    onChange,
    required = false,
  } = props;
  return (
    <input
      type={type}
      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block ${width} p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light`}
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
