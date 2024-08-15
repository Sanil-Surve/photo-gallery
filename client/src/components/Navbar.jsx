import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Photo Gallery</h1>
      </div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/upload">Upload Image</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
