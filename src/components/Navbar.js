import React from "react";
import { NavLink } from "react-router-dom";
import "../components/components.scss";

const NavBar = () => {
  return (
    <header className="header">
      <ul className="nav">
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
