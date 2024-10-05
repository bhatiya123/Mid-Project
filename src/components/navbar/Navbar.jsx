import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  console.log("check", window.location.pathname);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
             href="#"
            role="button"
            aria-expanded="false"
          >
            My Requests
          </a>
          <ul class="dropdown-menu">
            <li
              onClick={() => {
                navigate("/Donate-request");
              }}
              style={{ cursor: 'pointer' }}
              className="px-2 "
              >
              Donate Request
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li
              onClick={() => {
                navigate("/Required-request");
              }}
              style={{ cursor: 'pointer' }}
              className="px-2 "
            >
              Required Blood
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/Campaign"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      {window.location.pathname === "/Login" ? (
        <></>
      ) : localStorage.getItem("token") ? (
        <div className="btn-donate">
          <button
            className="donatebtn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/Login");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="btn-donate">
          <button
            className="donatebtn"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
