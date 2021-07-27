

//--------------- This Component is not in use ----------------


/* //import { React } from 'react';/*
import { Link } from "react-router-dom"
import * as Yup from "yup";
import { Formik } from "formik";

import api from "../api/api";

import back_img from "../images/back_image.jpg";
import logo from "../images/logo.jpg";
import "../css/login.css";

function AdminLogin() {

    const AdminLoginScehma = () => {
        return Yup.object().shape({
            Admin_Email: Yup.string().required("Email is required").email(),
            Admin_Password: Yup.string().required("Password is required").min(6).max(20),
        });
    };
    const handleAdminLogin = async (values) => {
        try {
            console.log(values);
            const response = await api.AdminLogin(values);
            console.log(response.data);

        } catch (error) { }
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
                            <h1 className="login-heading my-4">Admin Sign-In</h1>
                            <Formik
                                initialValues={{
                                    Admin_Email: "",
                                    Admin_Password: "",
                                }}
                                onSubmit={(values) => handleAdminLogin(values)}
                                validationSchema={AdminLoginScehma}
                            >
                                {({
                                    handleChange,
                                    setFieldTouched,
                                    handleSubmit,
                                    errors,
                                    touched,
                                }) => <>
                                        <div className="mb-2">
                                            <label htmlFor="email" style={{ display: "block", fontSize: "1.1rem" }}>Username</label>
                                            <input type="text" id="adminEmail" onBlur={() => setFieldTouched("Admin_Email")} className="username" onChange={handleChange("Admin_Email")}></input>
                                            {touched.Admin_Email === true ? <span style={{ color: "red" }}>{errors.Admin_Email}</span> : null}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" style={{ display: "block", fontSize: "1.1rem" }}>Password</label>
                                            <input type="password" onBlur={() => setFieldTouched("Admin_Password")} id="adminPassword" className="password" onChange={handleChange("Admin_Password")}></input>
                                            {touched.Admin_Password === true ? <span style={{ color: "red" }}>{errors.Admin_Password}</span> : null}
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg my-2 px-5" style={{ width: "100%" }}
                                            onClick={handleSubmit} disabled={(errors.Admin_Email || errors.Admin_Password) ? true : false}>Login</button>
                                    </>}
                            </Formik>
                            {/*
                            <Link to="/help" style={{ textDecoration: "none" }}>
                                <p className="my-3" style={{ fontSize: "1.1rem" }} >Need Help?</p>
                            </Link> }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={back_img} alt="College " style={{ width: "100%", height: "100%", position: "fixed", zIndex: -1, top: 0, objectFit: "cover" }} />
            </div>
        </div>
    );
}

export default AdminLogin */