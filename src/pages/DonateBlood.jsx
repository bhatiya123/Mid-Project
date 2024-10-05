import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, FormGroup } from "react-bootstrap";
import { Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DonateBlood = ({ setIsDonateFormShow }) => {
  const navigate = useNavigate();
  const bloodtypeoption = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [formData, setFormData] = useState({
    bloodType: "",
    bloodQty: "",
    age: "",
    height: "",
    weight: "",
  });
  const [isDisease, setIsDisease] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButtonClick = () => {
    if (isDisease) {
      toast.warning("You are not able to donate blood!");
      return;
    }

    const getToken = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:8000/api/blood/create",
        {
          blood: formData.bloodQty,
          blood_type: formData.bloodType,
          age: formData.age,
          weight: formData.weight,
          height: formData.height,
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
          setIsDonateFormShow(false);
          toast.success("Request sent successfully.");
          navigate("/Donate-request");
          console.log("response", res);
        }
      });
  };

  return (
    <div className="requestmain mt-3">
      <div className="container requestcontainer">
        <p className="requesthead">
          A single drop of your blood could be a drop of life for someone else!!
        </p>
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
          id="age"
          name="age"
          label="Age"
          variant="outlined"
          className="requestinput"
          value={formData.age}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <TextField
          id="height"
          name="height"
          label="Height(inch)"
          variant="outlined"
          className="requestinput"
          value={formData.height}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <TextField
          id="weight"
          name="weight"
          label="weight(kg)"
          variant="outlined"
          className="requestinput"
          value={formData.weight}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDisease}
                onChange={() => {
                  setIsDisease(!isDisease);
                }}
              />
            }
            label="Have you any disease?"
            className="requestinput"
          />
        </FormGroup>
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

export default DonateBlood;
