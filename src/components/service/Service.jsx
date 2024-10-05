import React from "react";
import "./service.css";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
const Service = () => {
  return (
    <div className="service">
      <div className="servicecontent">
        <p className="servicetext">WHAT WE DO</p>
        <p className="servicename">Our Best Services</p>
      </div>
      <div className="services container">
        <div className="service1">
          {/* <div className="service-wrapper"> */}
            <img src={service1} alt="our" className="s-img" />
          {/* </div> */}

          <div className="servi">
            <h1>01</h1>
            <p className="serhead">Blood Donation</p>
            <p className="servicep">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
              blanditiis debitis quas, a molestiae magni. Pariatur doloribus
              sint animi?
            </p>
            <button className="servicebtn">Read More</button>
          </div>
        </div>
        <div className="service2">
          <div className="servi1">
            <h1 className="servi11">02</h1>
            <p className="serhead1">Health Check</p>
            <p className="servicep">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
              blanditiis debitis quas, a molestiae magni. Pariatur doloribus
              sint animi?
            </p>
            <button className="servicebtn">Read More</button>
          </div>
          <img src={service2} alt="" />
        </div>
        <div className="service1">
          <img src={service3} alt="" />
          <div className="servi">
            <h1>03</h1>
            <p className="serhead">Blood Bank</p>
            <p className="servicep">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
              blanditiis debitis quas, a molestiae magni. Pariatur doloribus
              sint animi?
            </p>
            <button className="servicebtn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
