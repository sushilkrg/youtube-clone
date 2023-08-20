import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Trending</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
        <li>Youtube Kids</li>
        <li>Youtube Music</li>
        <li>Youtube Live</li>
      </ul>
      <h1 className="font-bold pt-5">Settings</h1>
      <h1 className="font-bold">Help</h1>
    </div>
  );
};

export default Sidebar;
