import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

import api from "../api/api";
import NavBar from "../components/NavBar";

import "../css/ticketDetails.css"

function TicketDetails({ history, location }) {
    const ticketDetails = location.state.ticket;
    console.log(ticketDetails);

    const ReplyScehma = () => {
        return Yup.object().shape({
            Subject: Yup.string().required("Subject is required").min(15).max(150),
            Content: Yup.string().required("Content is required").min(20).max(1500)
        });
    };

    const handleTicketReply = async (values) => {

        const replyData = {
            _id: ticketDetails._id,
            Name: ticketDetails.User.Name,
            Email: ticketDetails.User.Email,
            Subject: values.Subject,
            Content: values.Content
        }
        try {
            const response = await api.ReplyTicket(replyData);
            if (response.ok) {
                toast.success(response.data);
                window.location = "/allContactTickets";
            } else {
                toast.error(response.data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar />
            <ToastContainer />
            <div className="ticket-details-main">
                <div className="ticket-details-head">
                    <h2>Ticket Details</h2>
                    <div className="ticket-details-content">
                        <h5>Source: {ticketDetails._id}</h5>
                        <p style={{ margin: "10px 0px 0px" }}>User_id: {ticketDetails.User._id}</p>
                        <p style={{ marginBottom: "0px" }}>Name: {ticketDetails.User.Name}</p>
                        <p style={{ marginBottom: "0px" }}>Email: {ticketDetails.User.Email}</p>
                        <h6 className="h6-problem">
                            <div style={{ display: "inline", verticalAlign: "top" }}>
                                Problem Statement:
                            </div>
                            <p className="ticket-problem">
                                {ticketDetails.Problem}
                            </p>
                        </h6>
                        {ticketDetails.ProblemPhoto ?
                            <div className="problem-photo-dimensions">
                                <img className="ticket-problem-photo"
                                    src={ticketDetails.ProblemPhoto}
                                    alt="problem submitted" />
                            </div>
                            : null
                        }

                        <div>
                            <Formik
                                initialValues={{
                                    Subject: "",
                                    Content: ""
                                }}
                                onSubmit={(values) => handleTicketReply(values)}
                                validationSchema={ReplyScehma}
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
                                        <div className="ticket-reply-div">
                                            <h4 className="h4-reply">Reply</h4>
                                            <div className="mb-2 mx-1 mt-3">
                                                <label
                                                    htmlFor="subject"
                                                    style={{ display: "block", fontSize: "1.1rem" }}
                                                >
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    onBlur={() => setFieldTouched("Subject")}
                                                    className="subject"
                                                    onChange={handleChange("Subject")}
                                                ></input>
                                                {touched.Subject === true ? (
                                                    <p style={{ color: "red" }}>{errors.Subject}</p>
                                                ) : null}
                                            </div>
                                            <div className="mb-2 mx-1">
                                                <label
                                                    htmlFor="content"
                                                    style={{ display: "block", fontSize: "1.1rem" }}
                                                >Content
                                                </label>
                                                <textarea
                                                    type="text"
                                                    id="content"
                                                    cols="90"
                                                    rows="4"
                                                    onBlur={() => setFieldTouched("Content")}
                                                    className="content"
                                                    onChange={handleChange("Content")}>
                                                </textarea>
                                                {touched.Content === true ? (
                                                    <p style={{ color: "red" }}>{errors.Content}</p>
                                                ) : null}
                                            </div>
                                            <div>
                                                <button className="btn btn-primary btn-lg ticket-button"
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                    disabled={
                                                        errors.Subject ||
                                                            errors.Content
                                                            ? true
                                                            : false
                                                    }
                                                >Respond</button>
                                                <button className="btn btn-danger btn-lg ticket-button"
                                                    onClick={() => {
                                                        history.push("/allContactTickets")
                                                    }}>Cancel</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Formik>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketDetails;