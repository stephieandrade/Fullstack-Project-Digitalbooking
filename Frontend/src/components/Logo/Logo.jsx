import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

import "./logo.scoped.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <p>Rent your car</p>
    </div>
  );
};
export default Logo;
