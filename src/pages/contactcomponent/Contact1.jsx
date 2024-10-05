import React from "react";
import "./contact1.css";
import { Link } from "react-router-dom";
import contacta from "../../components/assets/contacta.png";
const Contact1 = () => {
  return (
    <div className="contact1">
      <img src={contacta} alt="contacta" />
      <div className="b-content">
        <p className="bp-content">Contact</p>
        <p className="bp1-content">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home{" "}
          </Link>
          /Contact
        </p>
      </div>
    </div>
  );
};

export default Contact1;
