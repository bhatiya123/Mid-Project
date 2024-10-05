import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, FormGroup } from "react-bootstrap";
import { Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RequestBlood = ({ setIsRequestFormShow }) => {
  const navigate = useNavigate();
  const bloodtypeoption = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [formData, setFormData] = useState({
    bloodType: "",
    bloodQty: "",
    requiredDate: "",
    reason: "",
  });
  const [isDisease, setIsDisease] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButtonClick = () => {
    const getToken = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:8000/api/requestblood/create",
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
            bloodQty: "",
            bloodType: "",
            requiredDate: "",
            reason: "",
          });
          setIsRequestFormShow(false);
          toast.success("Request sent successfully.");
          navigate("/Required-request");
          console.log("response", res);
        }
      });
  };

  return (
    <div className="requestmain mt-3">
      <div className="container requestcontainer">
        <p className="requesthead">A Request form!</p>
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
        <button
          className="loginbtn34 bbttn"
          onClick={() => {
            handleSubmitButtonClick();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RequestBlood;
