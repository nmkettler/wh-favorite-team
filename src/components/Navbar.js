import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useWindowSize } from "@react-hook/window-size/";

const Navbar = () => {
  const [width] = useWindowSize({ fps: 60 });
  const { team } = useGlobalContext();
  console.log(team)
  console.log(width)
  const renderLinks = () => {
    return (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
      </React.Fragment>
    )
  }
  
  const renderMobileMenu = () => {
    return (
        <ul className="navbar-dropdown__categories">
          <li className="navbar-dropdown__category">
            <span>Menu</span>
            <ul className="navbar-dropdown__menu">
              {renderLinks()}
            </ul>
          </li>
        </ul>
    )
  }
  
  const renderDesktopMenu = () => {
    return (
      <React.Fragment>
          <Link to="/">
            <img src={team.logo} alt="" className="logo"></img>
          </Link>
          <ul className="nav-links">
          {renderLinks()}
          </ul>
      </React.Fragment>
    )
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        {width >= 600 ? renderDesktopMenu() : renderMobileMenu()}
      </div>
    </nav> 
  )
};

export default Navbar;
