import React from 'react'
import './campaingn.css'
import about from '../../components/assets/about.png'
import { Link } from "react-router-dom";

const Campaign1 = () => {
  return (
    <div className="abouta1">
      <img src={about} alt="about" />
      <div className="a-content">
        <p className="ap-content">Campaign</p>
        <p className="ap1-content">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home{" "}
          </Link>
          / Campaign
        </p>
      </div>
    </div>
  )
}

export default Campaign1
