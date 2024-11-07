
import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import "../../App.css";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="navbar">
      <span className="navbar-brand">Portfolio</span>
      <ul className={`navbar-links ${menu ? "active" : ""}`}>
        <a href="#About">
          <li className="navbar-item">About</li>
        </a>
        <a href="#Skills">
          <li className="navbar-item">Skills</li>
        </a>
        <a href="#Experience">
          <li className="navbar-item">Experience</li>
        </a>
        <a href="#Projects">
          <li className="navbar-item">Projects</li>
        </a>
        <a href="#Contact">
          <li className="navbar-item">Contact</li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="navbar-icon"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="navbar-icon"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
