import React from "react";
import "./aboute.css";
import w1 from "../../components/assets/w1.png";
import w2 from "../../components/assets/w2.png";
import w3 from "../../components/assets/w3.png";
import w4 from "../../components/assets/w4.png";
import w5 from "../../components/assets/w5.png";
const Aboute = () => {
  return (
    <div>
      <main className="aboutemain">
        <p className="aboutehead">Our Work</p>
        <p className="description">
          Red Cross volunteers and staff work to deliver vital services – from
          providing relief and support to those in crisis, to helping you be
          prepared to respond in emergencies.
        </p>
        <div className="aboutes">
          <div className="aboute">
            <div className="service-icon">
              <img src={w1} alt="Disaster Relief" />
            </div>
            <h3>Disaster Relief</h3>
            <p>
              Learn how we help families and communities recover from disasters
            </p>
          </div>
          <div className="aboute">
            <div className="service-icon">
              <img src={w2} alt="International Services" />
            </div>
            <h3>International Services</h3>
            <p>
              Learn how we deliver aid and support programs around the world
            </p>
          </div>
          <div className="aboute">
            <div className="service-icon">
              <img src={w3} alt="Lifesaving Blood" />
            </div>
            <h3>Lifesaving Blood</h3>
            <p>
              Learn about our blood donation processes, requirements, hosting
              opportunities and more
            </p>
          </div>
          <div className="aboute">
            <div className="service-icon">
              <img src={w4} alt="Military Families" />
            </div>
            <h3>Military Families</h3>
            <p>
              Learn how we help service members, veterans and their families
            </p>
          </div>

          <div className="aboute ">
            <div className="service-icon">
              <img src={w5} alt="Training & Certification" />
            </div>
            <h3>Training & Certification</h3>
            <p>
              Learn about our health & safety courses for individuals and
              organizations
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboute;
