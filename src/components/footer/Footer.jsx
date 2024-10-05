import React from "react";
import "./footer.css";
import latest1 from "../assets/Rectangle 100.png";
import latest2 from "../assets/Rectangle 101.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="aboutus">
              <p className="title">About Us </p>
              <p className="aboutparagraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                consectetur possimus itaque nulla, nisi impedit ut illum
                suscipit dolore totam similique, accusantium amet!
              </p>
              <p>
                <b className="textdecor">Phone :</b> +91 12121 12221
                <br />
                <b>Email :</b> demo123@gmail.com
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="quicklinks">
              <p className="title">Quick Links</p>
              <ul>
                <li>Services</li>
                <li>About Us</li>
                <li>New Campaign</li>
                <li>Latest News</li>
                <li>Contact</li>
                <li><Link to={"/admin/login"}>Admin Panel</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="ourservices">
              <p className="title">Our Services</p>
              <ul>
                <li>Blood Donation</li>
                <li>Health Check</li>
                <li>Blood Bank</li>
                <li>Donate Process</li>
                <li>Blood Info</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="latestnews">
              <p className="title">Latest News</p>
              <img src={latest1} alt="reactangle100" />
              <img src={latest2} alt="reactangle101" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
