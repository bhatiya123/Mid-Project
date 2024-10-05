import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import registration123 from "../components/assets/loginblood2.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = { email: "", name: "", password: "", cpassword: "" };
    let isValid = true;

    // Name validation
    if (!registerFormData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (registerFormData.name.length < 3) {
      newErrors.name = "Name should be at least 3 characters.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(registerFormData.email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    // Password validation
    if (registerFormData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters.";
      isValid = false;
    }

    // Confirm Password validation
    if (registerFormData.password !== registerFormData.cpassword) {
      newErrors.cpassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegisterButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      // If validation is successful, make API call
      axios
        .post("http://localhost:8000/api/user/register", {
          email: registerFormData.email,
          name: registerFormData.name,
          password: registerFormData.password,
          c_password: registerFormData.cpassword,
        })
        .then((response) => {
          console.log("Registration successful", response);
          toast.success({message: response.data.message})
          // Handle successful registration, e.g., redirect to login page
          navigate("/login")
        })
        .catch((err) => {
          console.log(err.response?.data?.message || "An error occurred");
          alert("Error: " + (err.response?.data?.message || "An error occurred"));
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 regicol1">
          <h2 className="regih11">Registration Form</h2>
          <form onSubmit={handleRegisterButtonClick}>
            <div className="form-group regipad">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control regiin"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={registerFormData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group regipad">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control regiin"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={registerFormData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group regipad">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control regiin"
                id="password"
                name="password"
                placeholder="Password"
                value={registerFormData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div className="form-group regipad">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                className="form-control regiin"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                value={registerFormData.cpassword}
                onChange={handleChange}
              />
              {errors.cpassword && <p className="error-text">{errors.cpassword}</p>}
            </div>

            <br />
            <button
              type="submit"
              className="loginbtn34"
            >
              Register
            </button>
          </form>
        </div>
        <div className="col-6">
          <img src={registration123} alt="Registration" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
