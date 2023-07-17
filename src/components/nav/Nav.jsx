import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-title">Portfolio</span>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
