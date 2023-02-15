import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Style.css";
import { useStateValue } from "../Context/StateProvider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "@mui/material";

function SignIn() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
 const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data :>> ", data);
    dispatch({
      type: "SET_USER",
      user: { email: data.get("email"), password: data.get("pass") },
    });
    navigate('/profile')
  };

  return (
    <div className="loginPage d-flex flex-column ">
      <div className="m-4 pb-3 align-self-center">
        <Link to="/">
          <img
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
            width="170"
            height="50"
          />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column p-3">
          <h4 className="ms-2 mb-2">Log IN </h4>
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <TextField
            id="fullWidth"
            label="Enter Your Email"
            variant="filled"
            fullWidth
            className="mb-3"
            name="email"
            required="true"
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Enter Your Password
            </InputLabel>

            <FilledInput
              id="filled-adornment-password"
              name="pass"
              variant="filled"
              type={showPassword ? "text" : "password"}
              required="true"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              className="mb-3"
            />
          </FormControl>
          <small>
            <Checkbox />
            Agree to all <strong>Terms & Conditions</strong>
          </small>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="loginPage-button"
          >
            Click Here To Proceed
          </button>
          <Link
            to="/signUp"
            style={{
              color: "#111",
              textAlign: "right",
              fontWeight: 400,
            }}
          >
            New to STORE? Create an account
          </Link>
        </div>
      </form>
      <span className="text-muted d-flex align-items-center align-self-center">
        Copyright <Link to="/"> store.com</Link>
        {new Date().getFullYear()}.
      </span>
    </div>
  );
}

export default SignIn;
