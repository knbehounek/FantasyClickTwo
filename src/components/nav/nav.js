import React from "react";
import "./nav.css";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" id="rightWrong">{props.rightWrong}</li>

      <li className="nav-item" id="currrentScore">Current Score: {props.score}</li>

      <li className="nav-item" id="topScore">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;

