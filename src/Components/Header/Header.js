import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Arrow from "../../images/icon-arrow-down.svg";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="content">
        <h1>We Are creatives</h1>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Header;
