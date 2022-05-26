import React from "react";

type FloatProps = {
  float: "left" | "right";
};

const Float: React.FC<FloatProps> = ({ children }) => {
  return <div className="sm:float-right sm:ml-4 mt-0">{children}</div>;
};

export default Float;
