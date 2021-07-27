import React from "react";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import api from "../api/api";

import "../css/register.css";
import "react-phone-input-2/lib/bootstrap.css";
import logo from "../images/logo.jpg";

function EditDetails({ history, location }) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#0d6efd",
            },
        },
    });

    const EditDetailsScehma = () => {
        return Yup.object().shape({
            Name: Yup.string().required("Name is required"),
            Phone: Yup.string().required("Phone Number is required"),
            Email: Yup.string().required("Email is required").email(),
            ProfilePhoto: Yup.string(),
            AccountType: Yup.string().required("You must select a value"),
        });
    };

    const handleEditDetails = async (values) => {
        try {
            const result = await api.EditUserDetails(values);
            if (result.ok) {
                toast.success(result.data);
            }
            else {
                toast.alert(result.data);
            }
            window.location = "/allusers";

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <ToastContainer />
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
                            Name: location.state.user.Name,
                            Phone: location.state.user.Phone,
                            Email: location.state.user.Email,
                            ProfilePhoto: location.state.user.ProfilePhoto,
                            AccountType: location.state.user.AccountType,
                        }}
                        onSubmit={(values) => handleEditDetails(values)}
                        validationSchema={EditDetailsScehma}
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
                                        value={location.state.user.Name}
                                        onChange={handleChange("Name")
                                        }
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
                                        value={location.state.user.Phone}
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
                                        value={location.state.user.Email}
                                        onChange={handleChange("Email")}
                                    ></input>
                                    {touched.Email === true ? (
                                        <span style={{ color: "red" }}>{errors.Email}</span>
                                    ) : null}
                                </div>
                                <div className="my-2register-div">
                                    <MuiThemeProvider theme={theme}>
                                        <RadioGroup
                                            row
                                            aria-label="Admin"
                                            defaultValue={location.state.user.AccountType}
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
                                            errors.Name ||
                                            errors.Phone
                                            ? true
                                            : false
                                    }
                                >
                                    Save Changes
                                </button>
                            </>
                        )}
                    </Formik>
                    <button className="btn btn-danger btn-lg mt-3 px-5"
                        style={{ width: "100%" }}
                        onClick={() => { history.push("/allUsers") }}
                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default EditDetails;
