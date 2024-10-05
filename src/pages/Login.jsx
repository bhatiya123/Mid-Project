// import React, { useState } from "react";
// import "./page.css";
// import logoinpic from "../components/assets/loginblood2.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLoginButtonClick = () => {
//     //after email and password validation
//     axios
//       .post("http://localhost:8000/api/user/login", {
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log("checkresponse", response);
//         localStorage.setItem("token", response.data.data.token); // for storing token in localstorage
//         toast.success(response.data.message);
//         navigate("/"); // for navigating on home page after successfully login
//       })
//       .catch((err) => {
//         console.log(err.response.data.message);
//         toast.error(err.response.data.message);
//       });
//   };
//   return (
//     <div className="login-container">
//       <section className="vh-100">
//         <div className="container ">
//           <div className="row ">
//             <div className="col-sm-6 text-black logincolumn">
//               {/* <div className="px-5 ms-xl-4">
//           <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
//           <span className="h1 fw-bold mb-0">Logo</span>
//         </div> */}

//               <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 ">
//                 <form style={{ width: "23rem" }}>
//                   <h3
//                     className="fw-normal login34head"
//                     style={{ letterspacing: " 1px" }}
//                   >
//                     {" "}
//                     Log in
//                   </h3>
//                   <div data-mdb-input-init className="form-outline mb-4">
//                     <input
//                       type="email"
//                       id="form2Example18"
//                       className="form-control form-control-lg"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       required
//                       placeholder="Enter Email"
//                     />
//                     <label className="form-label" htmlFor="form2Example18">
//                       Email address
//                     </label>
//                   </div>

//                   <div data-mdb-input-init className="form-outline mb-4">
//                     <input
//                       type="password"
//                       id="form2Example28"
//                       placeholder="Enter Password"
//                       className="form-control form-control-lg"
//                       value={password}
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                     />
//                     <label className="form-label" htmlFor="form2Example28">
//                       Password
//                     </label>
//                   </div>

//                   <div className="pt-1 mb-4">
//                     <button
//                       className="loginbtn34"
//                       type="submit"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleLoginButtonClick();
//                       }}
//                     >
//                       Login
//                     </button>
//                   </div>

//                   <p className="small mb-4 pb-lg-2">
//                     <a className="text-muted" href="#!">
//                       Forgot password?
//                     </a>
//                   </p>
//                   <p>
//                     <Link to="/admin/login">Admin Login</Link>
//                   </p>
//                   <p>
//                     Don't have an account?{" "}
//                     <Link to="/Registration">Register Here</Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//             <div className="col-sm-6 px-0 d-none d-sm-block">
//               <img src={logoinpic} alt="Login" className="w-60 vh-60" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./page.css";
import logoinpic from "../components/assets/loginblood2.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginButtonClick = async () => {
    try {
      // Make the API request to login
      const response = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      // Store the token in local storage
      localStorage.setItem("token", response.data.data.token);
      toast.success(response.data.message);
      navigate("/"); // Navigate to home page after successful login
    } catch (err) {
      // Handle different error cases
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data.message;

        if (status === 404) {
          // User not found or account deleted
          toast.error(message);
        } else if (status === 400) {
          // Invalid password
          toast.error(message);
        } else {
          // Generic error message for other server issues
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        // Handle network errors or other errors
        toast.error("Server not responding. Please check your connection.");
      }
    }
  };

  return (
    <div className="login-container">
      <section className="vh-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-black logincolumn">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h3 className="fw-normal login34head" style={{ letterSpacing: "1px" }}>
                    Log in
                  </h3>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter Email"
                    />
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      placeholder="Enter Password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="loginbtn34"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLoginButtonClick();
                      }}
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-3 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/Registration">Register Here</Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={logoinpic} alt="Login" className="w-60 vh-60 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
