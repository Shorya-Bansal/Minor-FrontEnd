import React, { useContext, useState } from 'react';
import * as Yup from "yup";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "../components/NavBar";
import AuthContext from './../auth/context';
import api from "../api/api";

import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import ClearIcon from '@material-ui/icons/Clear';

import "../css/contactUs.css";

function ContactUs({ history }) {
    const authContext = useContext(AuthContext);
    const [problemImage, setProblemImage] = useState("");

    const ContactScehma = () => {
        return Yup.object().shape({
            Name: Yup.string().required("Name is required"),
            Email: Yup.string().required("Email is required").email(),
            Problem: Yup.string().required("Describe your problem").min(10),
            ProblemPhoto: Yup.string(),
        });
    };

    const handleProblemPhoto = (values) => {
        const file = values.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProblemImage(reader.result);
                }
            }
            reader.readAsDataURL(file);
        }
    }

    const handleImageRemove = () => {
        setProblemImage("");
    }

    const handleTicket = async (values) => {
        const data = {
            Name: values.Name,
            Email: values.Email,
            Problem: values.Problem,
            ProblemPhoto: problemImage
        };
        try {
            const response = await api.ContactUsDetails(data);
            if (response.ok) {
                toast.success(response.data);
                history.push("/home");
            }
            else {
                toast.error(response.data);
            }
        } catch (err) {
            toast.error("Client Error");
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar />
            <ToastContainer />
            <div className="contact-main">
                <Formik
                    initialValues={{
                        Name: authContext.User.Name,
                        Email: authContext.User.Email,
                        Problem: "",
                    }}
                    onSubmit={(values) => handleTicket(values)}
                    validationSchema={ContactScehma}
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
                            <div className="contact-details">
                                <h2>Contact Us</h2>
                                <div className="mb-2 mx-1 mt-3">
                                    <label
                                        htmlFor="name"
                                        style={{ display: "block", fontSize: "1.1rem" }}
                                    >
                                        FullName
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={values.Name}
                                        onBlur={() => setFieldTouched("Name")}
                                        className="name"
                                        onChange={handleChange("Name")}
                                    ></input>
                                    {touched.Name === true ? (
                                        <p style={{ color: "red" }}>{errors.Name}</p>
                                    ) : null}
                                </div>

                                <div className="mb-2 mx-1">
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
                                        value={values.Email}
                                        className="email"
                                        onChange={handleChange("Email")}
                                    ></input>
                                    {touched.Email === true ? (
                                        <p style={{ color: "red" }}>{errors.Email}</p>
                                    ) : null}
                                </div>

                                <div className="mb-2 mx-1">
                                    <label
                                        htmlFor="problem"
                                        style={{ display: "block", fontSize: "1.1rem" }}
                                    >
                                        Describe Your Problem
                                    </label>
                                    <textarea
                                        type="text"
                                        id="problem"
                                        cols="90"
                                        rows="4"
                                        style={{
                                            maxWidth: "99.5%",
                                            borderRadius: "4px",
                                            height: "100%",
                                            maxHeight: "120px",
                                            minHeight: "120px"
                                        }}
                                        onBlur={() => setFieldTouched("Problem")}
                                        className="problem"
                                        onChange={handleChange("Problem")}>
                                    </textarea>
                                    {touched.Problem === true ? (
                                        <p style={{ color: "red" }}>{errors.Problem}</p>
                                    ) : null}
                                </div>

                                <div className="mb-2 mx-1 contact-problem-image-div">
                                    <label htmlFor="problem-image"
                                        style={{ cursor: "pointer" }}>
                                        <InsertPhotoIcon fontSize="large" />
                                        Upload Photo(Max 1 image)
                                    </label>
                                    <input type="file"
                                        id="problem-image"
                                        onChange={handleProblemPhoto}
                                        style={{ display: "none" }}>
                                    </input>
                                </div>

                                {problemImage !== "" ?
                                    <div>
                                        <img src={problemImage} alt="problem" className="problem-img"></img>
                                        <button className="btn btn-danger btn-sm image-remove"
                                            onClick={handleImageRemove}>
                                            <ClearIcon fontSize="small"></ClearIcon>
                                        </button>
                                    </div>
                                    : null}

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg mt-4  contact-submit-button"
                                    onClick={handleSubmit}
                                    disabled={
                                        errors.Email ||
                                            errors.Name ||
                                            errors.Problem
                                            ? true
                                            : false
                                    }
                                >
                                    Submit Ticket
                                </button>
                                <button className="btn btn-danger btn-lg mt-4  contact-cancel-button"
                                    onClick={() => { history.push("/home") }}
                                >Cancel</button>
                            </div>

                        </>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactUs;