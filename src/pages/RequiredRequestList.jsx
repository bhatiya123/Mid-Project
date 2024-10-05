import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./page.css";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import issuedImage from '../components/assets/Bloor ISSUED.png'
// import { FormControl, FormGroup } from "react-bootstrap";
// import { Checkbox, FormControlLabel } from "@mui/material";

const RequiredRequestList = () => {
  const [myRequest, setMyRequest] = useState([]);
  const bloodtypeoption = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [formData, setFormData] = useState({
    bloodType: "",
    bloodQty: "",
    requiredDate: "",
    reason: "",
  });
  const [selectedId, setSelectedId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const getMyRequestApi = () => {
    const getToken = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/api/requestblood", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => {
        setMyRequest(res.data.data);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  useEffect(() => {
    getMyRequestApi();
  }, []);

  const handleDeleteButtonClick = (requestId) => {
    const getToken = localStorage.getItem("token");

    axios
      .get(`http://localhost:8000/api/requestblood/delete/${requestId}`, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) => {
        toast.success("Reqeust Deleted Successfully.");
        getMyRequestApi();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  const handleSaveButtonClick = () => {
    const getToken = localStorage.getItem("token");

    axios
      .post(
        `http://localhost:8000/api/requestblood/update/${selectedId}`,
        {
          blood_quantity: formData.bloodQty,
          blood_type: formData.bloodType,
          required_date: formData.requiredDate,
          reason: formData.reason,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          setFormData({
            age: "",
            bloodQty: "",
            bloodType: "",
            height: "",
            weight: "",
          });
          document.getElementById("cancle-btn")?.click();
          toast.success("Request updated successfully.");
          getMyRequestApi();
        }
      });
  };

  const getAllRequired = () => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .get("http://localhost:8000/api/admin/requestblood", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => {
        localStorage.setItem("totalRequiredBloodCount", res.data.data.length);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  useEffect(() => {
    getAllRequired();
  }, []);

  return (
    <div>
      <h2 className="text-center my-3">My Required Blood Request</h2>
      {myRequest.length === 0 ? (
        <div className="text-center my-3">Request not found!</div>
      ) : (
        <>
          {/* <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col">Name</th>
                <th scope="col" className="text-center">
                  Blood Type
                </th>
                <th scope="col">Blood Qty.</th>
                <th scope="col">Request Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {myRequest.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.user_id.name}</td>
                    <td className="text-center">{item?.blood_type}</td>
                    <td>{item?.blood} ml.</td>
                    <td>{item?.createdAt.split("T")[0]}</td>
                    <td
                      className={`text-capitalize badge ${
                        item?.status === "pending"
                          ? "bg-warning"
                          : item?.status === "approve"
                          ? "bg-success text-white"
                          : item?.status === "reject"
                          ? "bg-danger text-white"
                          : ""
                      }`}
                    >
                      {item?.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          <div className="myrequestmain container">
            {myRequest.map((item, index) => {
                const requestBoxClass = item?.issueStatus === "issued" ? "requestbox issued-bg" : "requestbox";

              return (
                <div className="requestbox">
                  {item?.status === "pending" && (
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary position-absolute end-0"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "black",
                          fontSize: "30px",
                          fontWeight: "700",
                          marginTop: "-20px",
                        }}
                        // aria-expanded="false"
                      >
                        :
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <button
                            className="dropdown-item btn"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              setSelectedId(item._id);
                              setFormData({
                                bloodType: "A+",
                                bloodQty: item.blood_quantity,
                                requiredDate: item.required_date,
                                reason: item.reason,
                              });
                            }}
                          >
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item btn"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure to delete this request?"
                                )
                              ) {
                                handleDeleteButtonClick(item?._id);
                              }
                            }}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                  <table>
                    <tr>
                      <td className="requesttitle">Name:</td>
                      <td>{item?.user_id?.name || "Unknown User"}</td>
                    </tr>
                    <tr>
                      <td className="requesttitle">Blood Type:</td>
                      <td>{item?.blood_type}</td>
                    </tr>
                    <tr>
                      <td className="requesttitle">Blood Qty:</td>
                      <td>{item?.blood_quantity} ml.</td>
                    </tr>
                    <tr>
                      <td className="requesttitle">Request Date:</td>
                      <td>{item?.createdAt.split("T")[0]}</td>
                    </tr>
                    <tr>
                      <td className="requesttitle">Reason:</td>
                      <td>{item?.reason} ml.</td>
                    </tr>
                    <tr>
                      <td className="requesttitle">Status:</td>
                      <td
                        className={`text-capitalize badge ${
                          item?.status === "pending"
                            ? "bg-warning text-black"
                            : item?.status === "approved"
                            ? "bg-success text-white"
                            : item?.status === "rejected"
                            ? "bg-danger text-white"
                            : ""
                        }`}
                      >
                        {item?.status}
                      </td>
                    </tr>
                    {item?.status === "approved" && (
                      <>
                        <tr>
                          <td className="requesttitle">Issued Status:</td>
                          <td>
                            {item?.issueStatus}
                          </td>
                        </tr>
                      </>
                    )}
                  </table>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Request Approval
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <Autocomplete
              disablePortal
              id="bloodType"
              name="bloodType"
              options={bloodtypeoption}
              sx={{ width: 400, marginBottom: 3 }}
              onChange={(e) => {
                setFormData({ ...formData, bloodType: e.target.textContent });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="bloodType"
                  name="bloodType"
                  label="Blood Type"
                  className="requestinput"
                  value={formData.bloodType}
                />
              )}
            />
            <TextField
              id="bloodQty"
              name="bloodQty"
              label="Blood Quantity(ml)"
              variant="outlined"
              className="requestinput"
              value={formData.bloodQty}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <TextField
              type="date"
              value={formData.requiredDate}
              onChange={(e) =>
                setFormData({ ...formData, requiredDate: e.target.value })
              }
              id="requiredDate"
              className="requestinput"
            />
            <br />
            <TextField
              id="reason"
              name="reason"
              label="Reason"
              variant="outlined"
              className="requestinput"
              value={formData.reason}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="cancle-btn"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  handleSaveButtonClick();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredRequestList;
