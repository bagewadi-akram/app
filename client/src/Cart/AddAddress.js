import { TextField } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function AddAddress() {
  const [stateName, setStateName] = useState([]);
  const [stateNameTo, setStateNameTo] = useState();
  const url =
    "https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6";
  const api_key = "579b464db66ec23bdd0000011556a9e6254d4fea4089432643e3f116";
  const querystring = `?api-key=${api_key}&format=json&offset=0&limit=155570`;

  fetch(url + querystring)
    .then((response) => response.json())
    .then((data) => {
      const states = data.records.map((item) => item.statename);
      const uniqueArr = [...new Set(states)];
      setStateName(uniqueArr);
    })
    .catch((error) => console.error(error));
  const handleChange = (event) => {
    setStateNameTo(event.target.value);
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="border-bottom p-2">Shipping Address</h3>
      <form>
        <div className="d-flex justify-content-between">
          <TextField
            sx={{ width: 460, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="fname"
            label="First Name *"
          />
          <TextField
            sx={{ width: 400, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="lname"
            label="Last Name *"
          />
        </div>
        <div className="d-flex flex-column  justify-content-between">
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="address1"
            label="Address *"
          />
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="address2"
            label="Apartment, suit, etc,(optional)"
          />
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="address2"
            label="Phone *"
          />
        </div>
        <div className="d-flex justify-content-between">
          <FormControl sx={{ width: 300, margin: 2 }}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stateNameTo}
              label="State Name"
              onChange={handleChange}
            >
              {stateName.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ width: 300, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="address1"
            label="City *"
          />
          <TextField
            sx={{ width: 300, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="pinCode"
            label="Pin Code *"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button
            margin="normal"
            variant="contained"
            size="small"
            sx={{
              letterSpacing: 1.5,
              fontWeight: 700,
              color: "#111",
              background: "#2abc",
              padding: "10px 35px 3px",
              margin: 2,
              fontSize: 14,
            }}
            // onClick={}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddAddress;
