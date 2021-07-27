import React, { useContext, useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import AuthContext from "./../auth/context";
import api from "../api/api";

import "../css/bookingCard.css";

function BookingCard(props) {
    const authContext = useContext(AuthContext);
    const [bookingStatus, setBookingStatus] = useState(false);

    const [bookingDisplay, setDisplay] = useState({
        Name: "",
        Purpose: ""
    });

    useEffect(() => {
        check();
    }, [props.selectedDate]);


    const check = () => {
        console.log(props, bookingStatus);
        if (props.bookings.length > 0) {
            props.bookings.map((item) => {
                if (item.Date === props.selectedDate) {
                    if (item.TimeSlot === props.time) {
                        setBookingStatus(true);
                    }
                } else {
                    return
                }
                setDisplay({
                    Name: item.Name,
                    Purpose: item.Purpose
                })
            })
        }
    }

    const BookingScehma = () => {
        return Yup.object().shape({
            Name: Yup.string().required("Name is required"),
            Purpose: Yup.string().required("Purpose is required").min(10).max(255),
        });
    };

    const handleBooking = (values) => {
        const allBookingDetails = {
            User: authContext.User,
            Date: props.selectedDate,
            TimeSlot: props.time,
            Name: values.Name,
            Purpose: values.Purpose
        }
        props.confirmBooking(allBookingDetails);
        setBookingStatus(true);
        return;
    }

    const handleCancelBooking = () => {
        setBookingStatus(false);
    }

    return (
        <div className="book-card-outline">
            <h4 className="book-time">Time: {props.time}</h4>
            <p style={{ fontSize: "1.1rem" }}>Date: {props.selectedDate}</p>
            <Formik
                initialValues={{
                    Name: bookingDisplay.Name,
                    Purpose: bookingDisplay.Purpose,
                }}
                onSubmit={(values) => handleBooking(values)}
                validationSchema={BookingScehma}
            >
                {({
                    handleChange,
                    setFieldTouched,
                    handleSubmit,
                    errors,
                    touched,
                    values
                }) => (
                    <>
                        <div className="mb-2">
                            <label
                                htmlFor="Name"
                                style={{ display: "block", fontSize: "1.1rem" }}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="Name"
                                disabled={bookingStatus}
                                values={values.Name}
                                onBlur={() => setFieldTouched("Name")}
                                className="booking-name"
                                onChange={handleChange("Name")}
                                spellCheck="false"
                            ></input>
                            {touched.Name === true ? (
                                <span style={{ color: "red" }}>{errors.Name}</span>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="Purpose"
                                style={{ display: "block", fontSize: "1.1rem" }}
                            >
                                Purpose
                            </label>
                            <textarea
                                type="text"
                                disabled={bookingStatus}
                                id="Purpose"
                                cols="30"
                                rows="4"
                                values={values.Purpose}
                                onBlur={() => setFieldTouched("Purpose")}
                                className="booking-purpose"
                                onChange={handleChange("Purpose")}
                                spellCheck="false"
                            >
                            </textarea>
                            {touched.Purpose === true ? (
                                <span style={{ color: "red" }}>{errors.Purpose}</span>
                            ) : null}
                        </div>
                        {bookingStatus ? <div className="mb-3">
                            <label
                                htmlFor="Name"
                                style={{ display: "block", fontSize: "1.1rem" }}
                            >
                                Booking Status : <span style={{ color: "forestgreen" }}>Confirmed</span>
                            </label>
                        </div> : null}
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-3 px-5"
                            style={{ width: "100%" }}
                            onClick={handleSubmit}
                            disabled={errors.Name || errors.Purpose || bookingStatus ? true : false}
                        >
                            Confirm
                        </button>
                    </>
                )}
            </Formik>
            <button className="btn btn-outline-danger mt-3 px-5 mb-4"
                style={{ width: "100%" }}
                onClick={handleCancelBooking}
            >Cancel</button>
        </div>
    )
}


export default BookingCard;