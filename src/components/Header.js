import React from "react";
import earth from "../assets/earth.gif";
const Header = props => (
  <header>
    <div className="title">
      <img src={earth} width="25" height="25" alt="logo" />
      <h2>All Country Information</h2>
    </div>
  </header>
);
export default Header;
