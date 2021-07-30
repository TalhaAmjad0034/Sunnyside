import React, { useState } from "react";
import "./Nav.css";
import Bars from "../../images/icon-hamburger.svg";
import Cross from "../../images/cross.svg";
import { Data } from "./Data";

const Nav = () => {
  const [hidden, setHidden] = useState(false);

  const onHandler = () => {
    setHidden(true);
  };
  const crossHandler = () => {
    setHidden(false);
  };

  return (
    <div className="nav">
      <div className="logo">Sunny Side</div>
      <img
        onClick={onHandler}
        className={`bars ${hidden ? "hidden" : ""}`}
        src={Bars}
        alt=""
      />
      <img
        onClick={crossHandler}
        className={`cross ${hidden ? "" : "hidden"}`}
        src={Cross}
        alt=""
      />
      <div className={`list ${hidden ? "" : "hidden"}`}>
        <ul>
          {Data.map((item, index) => {
            return (
              <li>
                <a href="#" key={index}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
