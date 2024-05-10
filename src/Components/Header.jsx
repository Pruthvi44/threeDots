import React, { useState } from "react";
import "./Header.css";
import {HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
                Home
              
            </li>
            <li className="nav-item">
              
                About
              
            </li>
            <li className="nav-item">
              
                Blog
           
            </li>
            <li className="nav-item">
              
                Contact Us
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;