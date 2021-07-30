import React, { useContext, useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import AuthContext from "./../auth/context";

import "../css/bookingCard.css";

function BookingCard(props) {
    const authContext = useContext(AuthContext);
    const [bookingStatus, setBookingStatus] = useState(false);
    const [buttonVisibility, setVisibility] = useState("100%");
    const [click, setClick] = useState(false);
    const [error, setError] = useState({
        Name: "",
        Purpose: ""
    })
    const [BookingValues, setValues] = useState({
        Name: "",
        Purpose: ""
    });


    useEffect(() => {
        setValues({
            Name: "",
            Purpose: ""
        });
        if (props.bookings.length > 0) {
            console.log(props.bookings)
            props.bookings.map((item) => {

                if (item.TimeSlot === props.time) {
                    if (item.Date !== props.selectedDate) {
                        setBookingStatus(false);
                        setVisibility("100%");
                        return 0;
                    }
                    if (item.User === authContext.User._id) {
                        setVisibility("100%");
                        setBookingStatus(true);
                    } else {
                        setVisibility("none");
                        setBookingStatus(true);
                    }
                    setValues({
                        Name: item.Name,
                        Purpose: item.Purpose
                    })
                }
                else {
                    return;
                }
            })
        }
        else {
            setVisibility("100%");
            setBookingStatus(false);
            return;
        }
    }, [props]);

    /*  useEffect(() => {
         setValues({
             Name: "",
             Purpose: ""
         });
         if (props.bookings.length > 0) {
             console.log(props.bookings)
             props.bookings.map((item) => {
                 if (item.Date === props.selectedDate && item.TimeSlot === props.time) {
                     console.log("Hello");
                     setValues({
                         Name: item.Name,
                         Purpose: item.Purpose
                     })
                     setBookingStatus(true);
 
                     if (item.User === authContext.User._id) {
                         setVisibility("100%");
                     }
                     else {
                         setVisibility("none");
                     }
                 }
                 else {
                     setVisibility("100%");
                     setBookingStatus(false);
                 }
             })
         }
     }, [props]) */


    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setValues((prevValues) => {
            return {
                ...prevValues,
                [id]: value
            }
        });
        handleBlur(event.target.id);

    }

    const handleClick = () => {
        setClick(true)
    };
    const handleBlur = (id) => {
        if (id === "Name") {
            if (BookingValues.Name.length === 0) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Name": "Name is Required"
                    }
                });
                setClick(true)
            } else if (BookingValues.Name.length <= 6 && BookingValues.Name.length >= 1) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Name": "Min 6 Charaters"
                    }
                });
                setClick(true)
            } else if (BookingValues.Name.length > 20) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Name": "Max 20 Charaters"
                    }
                });
                setClick(true)
            } else {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Name": ""
                    };
                });
                setClick(false)
            }
        }
        else if (id === "Purpose") {
            if (BookingValues.Purpose.length === 0) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Purpose": "Purpose is Required"
                    }

                });
                setClick(true)
            } else if (BookingValues.Purpose.length <= 10 && BookingValues.Purpose.length >= 1) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Purpose": "Min 10 Charaters"
                    }
                });
                setClick(true)
            } else if (BookingValues.Purpose.length > 255) {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Purpose": "Max 255 Charaters"
                    }
                });
                setClick(true)
            } else {
                setError((prevValues) => {
                    return {
                        ...prevValues,
                        "Purpose": ""
                    };
                });
                setClick(false)
            }
        }
        else {
            return;
        }
    }


    const handleBooking = () => {

        handleBlur("Name");
        handleBlur("Purpose");
        if (BookingValues.Name.length === 0 || BookingValues.Purpose.length === 0) {
            console.log("error");
            return;
        }
        else {
            const allBookingDetails = {
                User: authContext.User,
                Date: props.selectedDate,
                TimeSlot: props.time,
                Name: BookingValues.Name,
                Purpose: BookingValues.Purpose
            }
            props.confirmBooking(allBookingDetails);
            setBookingStatus(true);
            return;
        }


    }

    const handleCancelBooking = () => {
        setBookingStatus(false);
    }/* 
    console.log(props, bookingStatus, buttonVisibility); */

    console.log(buttonVisibility);
    return (
        <div className="book-card-outline">
            <h4 className="book-time">Time: {props.time}</h4>
            <p style={{ fontSize: "1.1rem" }}>Date: {props.selectedDate}</p>
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
                    className="booking-name"
                    disabled={bookingStatus}
                    value={BookingValues.Name}
                    spellCheck="false"
                    onBlur={() => { handleBlur("Name") }}
                    onChange={handleChange}
                    onClick={handleClick}
                ></input>
                {click === true ? (
                    <span style={{ color: "red" }}>{error.Name}</span>
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
                    value={BookingValues.Purpose}
                    className="booking-purpose"
                    onChange={handleChange}
                    spellCheck="false"
                    onClick={handleClick}
                    onBlur={() => { handleBlur("Purpose") }}
                >
                </textarea>
                {click === true ? (
                    <span style={{ color: "red" }}>{error.Purpose}</span>
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
            <div>

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-3 px-5"
                    style={{ width: "100%", display: buttonVisibility }}
                    onClick={handleBooking}
                    disabled={error.Name || error.Purpose || bookingStatus || click ? true : false}
                >
                    Confirm
                </button>
                <button className="btn btn-outline-danger mt-3 px-5 mb-4"
                    style={{ width: "100%", display: buttonVisibility }}
                    onClick={handleCancelBooking}
                >Cancel</button>
            </div>
        </div>
    )
}


export default BookingCard;