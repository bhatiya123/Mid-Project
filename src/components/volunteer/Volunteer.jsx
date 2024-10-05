import React from "react";
import "./volunteer.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
const Volunteer = () => {
  return (
    <div className="volunteer">
      <div className="volunteercontent">
        <p className="volunteerhead">Team Members</p>
        <p className="volunteertext">OUR VOLUNTEERS</p>
      </div>
      <div className="carddetails container">
        <div className="card">
        <div className="image-wrapper">
            <img src={card1} alt="card1" className="c-img" />
        </div>
        
          <p className="cardname">Alex Jone Deo</p>
          <p className="cardtext">Co-Founder</p>
        </div>
        <div className="card pr-{20px}">
          <div className="card-wrapper">
            <img src={card2} alt="card2" className="c-img" />
          </div>
          <p className="cardname">Alex Jone Deo</p>
          <p className="cardtext">Co-Founder</p>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <img src={card3} alt="card3" className="c-img" />
          </div>
          <p className="cardname">Alex Jone Deo</p>
          <p className="cardtext">Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
