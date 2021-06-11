import { React, useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import jwtDecode from "jwt-decode";

import AuthContext from "./../auth/context";
import api from "../api/api";

import back_img from "../images/back_image.jpg";
import logo from "../images/logo.jpg";
import "../css/login.css";

function Login({ history }) {
  const [error, setError] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.User !== null) {
      history.replace("/home");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const LoginScehma = () => {
    return Yup.object().shape({
      Email: Yup.string().required("Email is required").email(),
      Password: Yup.string().required("Password is required").min(6).max(20),
    });
  };

  const handleLogin = async (values) => {
    try {
      const response = await api.Login(values);
      if (response.ok) {
        localStorage.setItem("auth-token", response.data);
        const token = jwtDecode(response.data);
        authContext.SetUser(token);
        history.replace("/home");
      } else {
        setError(response.data);
      }
    } catch (error) {
      setError("Server Error...");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="home-box">
          <div className="logo">
            <img src={logo} className="logo-img" alt="IIITM Logo"></img>
          </div>
          <div className="login-side">
            <div className="login-content">
              <h1 className="login-heading my-4">Sign-In</h1>
              <Formik
                initialValues={{
                  Email: "",
                  Password: "",
                }}
                onSubmit={(values) => handleLogin(values)}
                validationSchema={LoginScehma}
              >
                {({
                  handleChange,
                  setFieldTouched,
                  handleSubmit,
                  errors,
                  touched,
                }) => (
                  <>
                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        style={{ display: "block", fontSize: "1.1rem" }}
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="email"
                        autoFocus
                        onBlur={() => setFieldTouched("Email")}
                        className="username"
                        onChange={handleChange("Email")}
                      ></input>
                      {touched.Email === true ? (
                        <span style={{ color: "red" }}>{errors.Email}</span>
                      ) : null}
                      {error !== null ? (
                        <span style={{ color: "red" }}>{error}</span>
                      ) : null}
                    </div>
                    <div className="mb-3">
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mt-4 px-5"
                      style={{ width: "100%" }}
                      onClick={handleSubmit}
                      disabled={errors.Email || errors.Password ? true : false}
                    >
                      Login
                    </button>
                  </>
                )}
              </Formik>

              <Link to="/help" style={{ textDecoration: "none" }}>
                <p className="my-3" style={{ fontSize: "1.1rem" }}>
                  Need Help?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={back_img}
          alt="College "
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: -1,
            top: 0,
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default Login;
