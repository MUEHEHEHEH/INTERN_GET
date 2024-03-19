import React from "react";

const Label = (props) => {
    const { htmlFor, children ,text = "text-sm font-medium text-gray-900" } = props;
    return (
        <label 
            htmlFor={htmlFor}
            className={`block mb-2 ${text}`}
        >
            {children}
        </label>
    );
};

export default Label;
