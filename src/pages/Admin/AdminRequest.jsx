import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminRequest = () => {
  const [myRequest, setMyRequest] = useState([]);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [error, setError] = useState("");
  const [dateError, setDateError] = useState("");
  const maxLength = 50;

  const getMyRequestApi = () => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .get("http://localhost:8000/api/admin/blood", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => {
        setMyRequest(res.data.data);
        localStorage.setItem("totalRequestCount", res.data.data.length);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  useEffect(() => {
    getMyRequestApi();
  }, []);

  const handleSaveButtonClick = () => {
    setError("");
    setDateError("");

    if (message.length > maxLength) {
      setError(`Message must be ${maxLength} characters or less.`);
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate < today) {
      setDateError("Date cannot be in the past.");
      return;
    }

    const getToken = localStorage.getItem("adminToken");

    axios
      .post(
        `http://localhost:8000/api/admin/blood/status-update/${selectedRow}`,
        {
          status: "approve",
          message_by_admin: message,
          date: date,
          time: time,
        },
        { headers: { Authorization: `Bearer ${getToken}` } }
      )
      .then((response) => {
        toast.success("Request Approved");
        setMessage("");
        setDate("");
        setTime("");

        document.getElementById("cancle-btn")?.click();

        getMyRequestApi();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  const handleRejectButtonClick = (requestId) => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .post(
        `http://localhost:8000/api/admin/blood/status-update/${requestId}`,
        {
          status: "reject",
        },
        { headers: { Authorization: `Bearer ${getToken}` } }
      )
      .then((response) => {
        toast.success("Request Rejected.");
        getMyRequestApi();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  const handleDonateStatusClick = (requestId, currentStatus) => {
    const newStatus = currentStatus === "not_donated" ? "donated" : "not_donated";
    const getToken = localStorage.getItem("adminToken");

    axios
      .post(
        `http://localhost:8000/api/admin/blood/donatestatus-update/${requestId}`,
        { donateStatus: newStatus },
        { headers: { Authorization: `Bearer ${getToken}` } }
      )
      .then((response) => {
        toast.success("Donate status updated.");
        getMyRequestApi(); // Refresh the data after update
      })
      .catch((err) => {
        console.error(err.response.data.message);
        toast.error("Error updating donate status.");
      });
  };

  return (
    <div>
      <h2 className="text-center my-3">My Request</h2>
      {myRequest.length === 0 ? (
        <div className="text-center my-3">Request not found!</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col">Name</th>
              <th scope="col" className="text-center">
                Blood Type
              </th>
              {/* <th scope="col">Blood Qty.</th> */}
              <th scope="col">Age</th>
              <th scope="col">Height(inch)</th>
              <th scope="col">Weight(Kg.)</th>
              <th scope="col">Request Date</th>
              <th scope="col"> Rquest Status</th>
              <th scope="col">Actions</th>
              <th scope="col">Donate Status</th>
            </tr>
          </thead>
          <tbody>
            {myRequest.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.user_id.name}</td>
                  <td className="text-center">{item.blood_type}</td>
                  {/* <td>{item.blood} ml.</td> */}
                  <td>{item.age}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>{item.createdAt.split("T")[0]}</td>
                  <td
                    className={`text-capitalize badge ${
                      item.status === "pending"
                        ? "bg-warning"
                        : item.status === "approve"
                        ? "bg-success text-white"
                        : item.status === "reject"
                        ? "bg-danger text-white"
                        : ""
                    }`}
                  >
                    {item.status}
                  </td>
                  <td>
                    {item.status === "pending" ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            setSelectedRow(item._id);
                          }}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            handleRejectButtonClick(item._id);
                          }}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      "Action taken"
                    )}
                  </td>
                  <td>
                  {item.status === "approve" ? (
                    <button
                      className={`btn ${item.donateStatus === "not_donated" ? "btn-warning" : "btn-success"}`}
                      onClick={() => handleDonateStatusClick(item._id, item.donateStatus)}
                    >
                      {item.donateStatus === "not_donated" ? "Not Donated" : "Donated"}
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
            <div class="modal-body d-flex flex-column gap-4">
              <TextField
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                id="messageBox"
                name="messageBox"
                error={!!error}
                helperText={error}
                fullWidth
              />
              <TextField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                error={!!dateError}
                helperText={dateError}
                fullWidth
              />
              <TextField
                type="time"
                value={time}
                onChange={(e) => {
                  console.log("sdfsdfsd", e.target);
                  setTime(e.target.value);
                }}
                id="time"
                name="time"
              />
            </div>
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
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRequest;
