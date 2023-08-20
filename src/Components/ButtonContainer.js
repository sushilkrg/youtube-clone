import React from "react";
import Button from "./Button";

const buttonItems = ["All", "React", "Redux", "Music", "Movies", "Gadar2", "Programming", "Live"];

const ButtonContainer = () => {
  return (
    <div className="flex">
    {buttonItems.map((item, index) => (
        <Button key={index} item={item}/>
    ))}
    </div>
  );
};

export default ButtonContainer;
