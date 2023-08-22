import React, { useEffect, useState } from "react";
import Hamburger from "../assets/images/Hamburger.png";
import Logo from "../assets/images/youtube_logo.png";
import userLogo from "../assets/images/user-icon.png";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchSuggestons } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheSearchSuggestons({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    // <div className="sticky top-0 right-0 bg-white">
    <div className="sticky top-0 right-0 bg-white grid grid-flow-col p-2 shadow-lg ">
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 rounded-r-full p-2 px-3">
          🔍
        </button>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 cursor-pointer">
        <img className="h-8" src={userLogo} alt="user" />
      </div>
    </div>
    // </div>
  );
};

export default Head;
