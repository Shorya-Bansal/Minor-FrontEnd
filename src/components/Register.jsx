import React, { useEffect, useContext } from "react";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import api from "../api/api";
import AuthContext from "./../auth/context";

import "../css/register.css";
import "react-phone-input-2/lib/bootstrap.css";
import logo from "../images/logo.jpg";

function Register({ history }) {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.User !== null) {
      history.replace("/home");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0d6efd",
      },
    },
  });

  const RegisterScehma = () => {
    return Yup.object().shape({
      Name: Yup.string().required("Name is required"),
      Phone: Yup.string().required("Phone Number is required"),
      Email: Yup.string().required("Email is required").email(),
      Password: Yup.string().required("Password is required").min(6).max(20),
      ConfirmPassword: Yup.string().oneOf(
        [Yup.ref("Password"), null],
        "Passwords must match"
      ),
      AccountType: Yup.string().required("You must select a value"),
    });
  };

  const handleRegister = async (values) => {
    try {
      const result = await api.Register(values);
      localStorage.setItem("auth-token", result.data);
      const token = jwtDecode(result.data);
      authContext.SetUser(token);
      history.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="register-head">
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <h2 style={{ textAlign: "center" }}>
            <img src={logo} alt="college logo" className="register-logo" />
            Minor Project
          </h2>
        </Link>
      </div>
      <div className="register-user">
        <div className="register-details">
          <h3 className="my-4">Create Account</h3>
          <Formik
            initialValues={{
              Name: "",
              Phone: "",
              Email: "",
              Password: "",
              ConfirmPassword: "",
              AccountType: "Not Admin",
            }}
            onSubmit={(values) => handleRegister(values)}
            validationSchema={RegisterScehma}
          >
            {({
              handleChange,
              setFieldTouched,
              handleSubmit,
              errors,
              touched,
              values,
            }) => (
              <>
                <div className="mb-2 register-div">
                  <label
                    htmlFor="name"
                    style={{ display: "block", fontSize: "1.1rem" }}
                  >
                    FullName
                  </label>
                  <input
                    type="text"
                    id="name"
                    onBlur={() => setFieldTouched("Name")}
                    className="name"
                    onChange={handleChange("Name")}
                  ></input>
                  {touched.Name === true ? (
                    <span style={{ color: "red" }}>{errors.Name}</span>
                  ) : null}
                </div>
                <div className="mb-2 register-div">
                  <label
                    htmlFor="phone"
                    style={{ display: "block", fontSize: "1.1rem" }}
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    inputProps={{
                      name: "PhoneNo",
                      required: true,
                      id: "phone",
                    }}
                    country={"in"}
                    inputStyle={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      width: "100%",
                      marginTop: "5px",
                    }}
                    onChange={handleChange("Phone")}
                    onBlur={() => setFieldTouched("Phone")}
                    className="phone"
                  ></PhoneInput>
                  {touched.Phone === true ? (
                    <span style={{ color: "red" }}>{errors.Phone}</span>
                  ) : null}
                </div>
                <div className="mb-2 register-div">
                  <label
                    htmlFor="email"
                    style={{ display: "block", fontSize: "1.1rem" }}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    onBlur={() => setFieldTouched("Email")}
                    className="email"
                    onChange={handleChange("Email")}
                  ></input>
                  {touched.Email === true ? (
                    <span style={{ color: "red" }}>{errors.Email}</span>
                  ) : null}
                </div>
                <div className="mb-3 register-div">
                  <label
                    htmlFor="password"
                    style={{ display: "block", fontSize: "1.1rem" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onBlur={() => setFieldTouched("Password")}
                    id="password"
                    className="password"
                    onChange={handleChange("Password")}
                  ></input>
                  {touched.Password === true ? (
                    <span style={{ color: "red" }}>{errors.Password}</span>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="confirm_password"
                    style={{ display: "block", fontSize: "1.1rem" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onBlur={() => setFieldTouched("ConfirmPassword")}
                    id="confirm_password"
                    className="password"
                    onChange={handleChange("ConfirmPassword")}
                  ></input>
                  {touched.ConfirmPassword === true ? (
                    <span style={{ color: "red" }}>
                      {errors.ConfirmPassword}
                    </span>
                  ) : null}
                </div>
                <div className="my-2register-div">
                  <MuiThemeProvider theme={theme}>
                    <RadioGroup
                      row
                      aria-label="Admin"
                      defaultValue="Not Admin"
                      name="Admin"
                      onChange={handleChange("AccountType")}
                    >
                      <FormControlLabel
                        value="Admin"
                        control={<Radio color="primary" />}
                        label="Admin"
                      />
                      <FormControlLabel
                        value="Not Admin"
                        control={<Radio color="primary" />}
                        label="Not Admin"
                      />
                    </RadioGroup>
                  </MuiThemeProvider>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-4 px-5"
                  style={{ width: "100%" }}
                  onClick={handleSubmit}
                  disabled={
                    errors.Email ||
                    errors.Password ||
                    errors.ConfirmPassword ||
                    errors.Name ||
                    errors.Phone ||
                    values.ConfirmPassword !== values.Password
                      ? true
                      : false
                  }
                >
                  Register
                </button>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
