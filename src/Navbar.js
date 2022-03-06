import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h4>ikwuh Jeffery</h4>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Projects</button>
          </li>
          <li>
            <button className="link-btn">About</button>
          </li>
          <li>
            <button className="link-btn">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
