import React from "react";
import "./Footer.css";
import svg from "../../images/icon-facebook.svg";
import svg1 from "../../images/icon-instagram.svg";
import svg2 from "../../images/icon-pinterest.svg";
import svg3 from "../../images/icon-twitter.svg";
// import img from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="img-gallery">
          {props.Data.map((data) => (
            <img className="image" src={data.pic} />
          ))}
          {/* <img className="image" src={props.Data[0].pic} alt="" /> */}
          {/* <img className="image" src={img} alt="" />
          <img className="image" src={img} alt="" />
          <img className="image" src={img} alt="" /> */}
        </div>
        <div className="actual">
          <h2 className="footer-heading">sunnyside</h2>
          <div className="links">
            <span>About</span>
            <span>Services</span>
            <span>projects</span>
          </div>
          <div className="socail-media">
            <img src={svg} alt="fb" />
            <img src={svg1} alt="fb" />
            <img src={svg2} alt="fb" />
            <img src={svg3} alt="fb" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Footer;
