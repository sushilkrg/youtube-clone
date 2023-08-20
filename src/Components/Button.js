import React from "react";

const Button = ({ item }) => {
  return (
    <div className="px-2 py-1 bg-slate-300 m-2 border rounded cursor-pointer">{item}</div>
  );
};

export default Button;
