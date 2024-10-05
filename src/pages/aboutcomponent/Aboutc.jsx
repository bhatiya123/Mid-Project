import React from "react";
import "./aboutc.css";
import donation from "../../components/assets/donation_1.png";
import check from "../../components/assets/check.png";
import bank from "../../components/assets/bank.png";
const Aboutc = () => {
  return (
    <div className="aboutcmain container-fluid">
      <div className="aboutc container">
        <div className="aboutc1">
          <img src={donation} alt="" />
          <p className="abcontent1">Blood Donation</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            adipisci blanditiis ducimus amet perferendis natus! 
          </p>
        </div>
        <div className="aboutc2">
          <img src={check} alt="" />
          <p className="abcontent2">Health Check</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            adipisci blanditiis ducimus amet perferendis natus! 
          </p>
        </div>
        <div className="aboutc3">
          <img src={bank} alt="" />
          <p className="abcontent3">Blood Bank</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            adipisci blanditiis ducimus amet perferendis natus! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutc;
