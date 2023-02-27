import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
const url = "http://localhost:3003/address";

function AddAddress() {
  const [postal, setPostal] = useState([]); //State Consists of All Data
  const [states, setStates] = useState([]); //State Consists of only States Data
  const [button, setButton] = useState(true); //State Consists of only States Data

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    addressField1: "",
    addressField2: "",
    phone: "",
    state: "",
    district: "",
    pin_code: "",
  });
  useEffect(() => {
    //fetch States and Cities from Api
    axios.get(url).then((res) => {
      const data = res.data;
      setPostal(data);
      let temp = [];
      data.filter(function (item) {
        let i = temp.findIndex((x) => x.state === item.state);
        if (i <= -1) {
          temp.push(item);
        }
        return null;
      });
      setStates(temp);
    });
  }, []);

  //Show All Cities Of The State ...
  let city = [];
  postal.forEach((element) => {
    if (element.state === formData.state) {
      city.push(element.district);
    }
  });
  city = city.filter((item, i, ar) => ar.indexOf(item) === i);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = () => {
    let result = !Object.values(formData).every((o) => o === "");
    if (result === true) {
      setButton(false);
      console.log("formData :>> ", formData);
    } else {
      alert("Please Enter Values");
    }
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
            value={formData.fname}
            onChange={handleChange}
          />
          <TextField
            sx={{ width: 400, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="lname"
            label="Last Name *"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column  justify-content-between">
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="addressField1"
            value={formData.addressField1}
            onChange={handleChange}
            label="Address *"
          />
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="addressField2"
            value={formData.addressField2}
            label="Apartment, suit, etc,(optional)"
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="phone"
            value={formData.phone}
            label="Phone *"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <FormControl sx={{ width: 300, margin: 2 }}>
            <InputLabel id="demo-multiple-name-label">State *</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              label="State Name *"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              {states.map((item) => (
                <MenuItem value={item.state} key={item.state}>
                  {item.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 300, margin: 2 }}>
            <InputLabel id="demo-multiple-name-label">City *</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              label="City *"
              value={formData.district}
              onChange={handleChange}
              name="district"
            >
              {city.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            sx={{ width: 300, margin: 2 }}
            margin="normal"
            variant="outlined"
            id="outlined"
            name="pin_code"
            label="Pin Code *"
            value={formData.pin_code}
            onChange={handleChange}
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
            onClick={handleClick}
          >
            Submit{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddAddress;
