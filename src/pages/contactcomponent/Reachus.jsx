import React, { useRef } from "react";
import Swal from 'sweetalert2';
import "./reachus.css";

const Reachus = () => {
  const formRef = useRef(null); // Create a ref for the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3028fd22-2d52-41fa-9b4c-7489ac7f70b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
      
      // Clear the form fields after submission
      formRef.current.reset();
    }
  };

  return (
    <div className="reachus container">
      <div className="row">
        <div className="col-md-4">
          <p className="reachhead">Reach Us</p>
          <p className="reachhead1">Get in Touch</p>
          <p className="reachtext"> 
            Which is the same as saying through shrinking from toil and pain.
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when untrammelled and when nothing prevents
          </p>
          <button className="reachbtn">Contact Us</button>
        </div>
        <div className="col" className="col1">
          <form ref={formRef} onSubmit={onSubmit}>
            <div className="reachcontect">
              <div className="form-group">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobile-number"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                required
              ></textarea>
            </div>
            <button type="submit" className="reachformbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reachus;
