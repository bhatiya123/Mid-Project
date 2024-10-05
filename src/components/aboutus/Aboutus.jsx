import React from "react";
import "./aboutus.css";
import about1 from "../assets/aboutus.png";
import about2 from "../assets/aboutus1.png";
const Aboutus = () => {
  return (
    <div className="about container">
      <div className="images">
        <img className="image1" src={about2} alt="aboutus1" />
        <img className="image2" src={about1} alt="aboutus" />
      </div>
      <div className="content1">
        <p className="contentheading">About Us</p>
        <p className="contentblack">
          Together We Can Make
          <br />
          World More Health Better
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          mollitia doloremque ab recusandae odio molestias, tempora dignissimos.
          Laboriosam in magni rem officiis ex debitis? Voluptate odit dolores
          velit rem libero?
        </p>
        <div className="list">
          <div className="sidebar1">
            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">Good Service</span>
            </div>

            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">Help People</span>
            </div>

            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">Hygine Tools</span>
            </div>
          </div>
          <div className="sidebar">
            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">24h Service</span>
            </div>

            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">Health Check</span>
            </div>

            <div className="list-item">
              <span className="check-mark">✓</span>
              <span className="text">Blood Bank</span>
            </div>
          </div>
        </div>
        <button className="contentbtn">About Us </button>
      </div>
    </div>
  );
};

export default Aboutus;
