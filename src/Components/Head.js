import React from "react";
import Hamburger from "../assets/images/Hamburger.png";
import Logo from "../assets/images/youtube_logo.png";
import userLogo from "../assets/images/user-icon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src={Hamburger}
          alt="hamburger"
        />
        <a href="/">
          <img className="h-8 cursor-pointer mx-2" src={Logo} alt="logo" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full p-2 px-3">
          🔍
        </button>
      </div>
      <div className="col-span-1 cursor-pointer">
        <img className="h-8" src={userLogo} alt="user" />
      </div>
    </div>
  );
};

export default Head;
