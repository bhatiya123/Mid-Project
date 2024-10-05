import React from "react";
import "./abouta1.css";
import about from "../../components/assets/about.png";
import { Link } from "react-router-dom";
const Abouta1 = () => {
  return (
    <div className="abouta1">
      <img src={about} alt="about" />
      <div className="a-content">
        <p className="ap-content">About Us</p>
        <p className="ap1-content">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home{" "}
          </Link>
          / About Us
        </p>
      </div>
    </div>
  );
};

export default Abouta1;
