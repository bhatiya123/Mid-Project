import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminRequiredRequest = () => {
  const [myRequest, setMyRequest] = useState([]);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [error, setError] = useState("");
  const [dateError, setDateError] = useState("");
  const maxLength = 50;

  const getMyRequestApi = () => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .get("http://localhost:8000/api/admin/requestblood", {
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
        `http://localhost:8000/api/admin/requestblood/status-update/${selectedRow}`,
        {
          status: "approved",
          message: message,
          issueDate: date,
          // time: time,
        },
        { headers: { Authorization: `Bearer ${getToken}` } }
      )
      .then((response) => {
        toast.success("Request Approved");
        setMessage("");
        setDate("");
        // setTime("");

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
        `http://localhost:8000/api/admin/requestblood/status-update/${requestId}`,
        {
          status: "rejected",
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

  const handleIssueStatusClick = async (requestId, currentStatus) => {
    const getToken = localStorage.getItem("adminToken");
    const newStatus = currentStatus === "not_issued" ? "issued" : "not_issued";

    try {
      const response = await axios.post(
        `http://localhost:8000/api/admin/requestblood/issuestatus-update/${requestId}`,
        {
          issueStatus: newStatus,
        },
        { headers: { Authorization: `Bearer ${getToken}` } }
      );
      toast.success(response.data.message);
      getMyRequestApi(); 
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
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
              <th scope="col">Blood Qty.</th>
              {/* <th scope="col">Age</th>
              <th scope="col">Height(inch)</th>
              <th scope="col">Weight(Kg.)</th> */}
              <th scope="col">Request Date</th>
              <th scope="col">Request Status</th>
              <th scope="col">Actions</th>
              <th scope="col">Issued Status</th>
            </tr>
          </thead>
          <tbody>
            {myRequest.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.user_id.name}</td>
                  <td className="text-center">{item.blood_type}</td>
                  <td>{item.blood_quantity} ml.</td>
                  {/* <td>{item.age}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td> */}
                  <td>{item.createdAt.split("T")[0]}</td>
                  <td
                    className={`text-capitalize badge ${
                      item.status === "pending"
                        ? "bg-warning"
                        : item.status === "approved"
                        ? "bg-success text-white"
                        : item.status === "rejected"
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
                  {item.status === "approved" ? (
                    <button
                      className="btn btn-info"
                      onClick={() => handleIssueStatusClick(item._id, item.issueStatus || "not_issued")}
                    >
                      {item.issueStatus === "issued" ? "Issued" : "Not Issued"}
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
              {/* <TextField
                type="time"
                value={time}
                onChange={(e) => {
                  console.log("sdfsdfsd", e.target);
                  setTime(e.target.value);
                }}
                id="time"
                name="time"
              /> */}
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

export default AdminRequiredRequest;
