import React from "react";

const BackGround = (props) => {
  const { children } = props;
  return (
    <div className="w-auto h-auto bg-gradient-to-b from-white via-white-1200 to-red-300">
      {children}
    </div>
  );
};

export default BackGround;
