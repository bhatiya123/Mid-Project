import React from "react";
import "./client.css";
import client from "../assets/client.png";
const Client = () => {
  return (
    <div className="client">
      <div className="clients container">
        <div className="clientcontent">
          <p className="clientname">TESTIMONIALS</p>
          <p className="clienttext">What Our Clients Say</p>
        </div>
        <div className="clientmain">
          <p className="qut">~</p>
          <p className="qutt">Professional services all the way</p>
          <div className="textspecial">
            <p>
              These cases are perfactly simple and easy to deatinguish.In a free
              hour, when our power of choice is untrammelled and when nothing
              prevents our being able to do what we like best, every pleasure is
              to be welcomed and every pain avoided.
            </p>
          </div>
          <img src={client} alt="client" />
          <p className="cliname">John Alexis</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
