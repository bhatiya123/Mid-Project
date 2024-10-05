import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = ({
  isDonateFormShow,
  setIsDonateFormShow,
  isRequestFormShow,
  setIsRequestFormShow,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="hero">
          <div className="container h-100">
            <div className="heroimg">
              <p className="firstletter ">Donate Blood, Save Life!</p>
              <p className="secondletter">
                Donate Blood And,
                <br />
                Inspires Other
              </p>
              <button
                className="learnmorebtn"
                onClick={() => {
                  navigate("/AboutUs");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mainrequest">
            <div className="requestnow">
              <p className="title1">Donate Now</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                voluptate. Similique velit rerum necessitatibus porro!
              </p>
              <button
                className="btnrm"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    setIsDonateFormShow(!isDonateFormShow);
                    setIsRequestFormShow(false);
                  } else {
                    toast.warning("Please login to request blood.");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-right herosvg1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div className="donatenow">
              <p className="title1">Need A Blood</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                voluptate. Similique velit rerum necessitatibus porro!
              </p>
              <button
              className="btnrm"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    setIsRequestFormShow(!isRequestFormShow);
                    setIsDonateFormShow(false);
                  } else {
                    toast.warning("Please login to request blood.");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-right herosvg1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
