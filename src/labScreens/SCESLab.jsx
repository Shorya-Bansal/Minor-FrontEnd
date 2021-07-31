import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthContext from "./../auth/context";
import Navbar from "../components/NavBar";
import labApi from "../api/labApi";


import DatePicker from './../Material-ui-components/DatePicker';
import BookingCard from "./../Material-ui-components/BookingCard";
import "../css/labBook.css";

function SCESLab(props) {
    const authContext = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const timeSlot = ["09:00am-11:00am", "11:00am-01:00pm", "02:00pm-04:00pm", "04:00pm-06:00pm"];
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        authContext.setLabName(props.location.state.labName);
        getAllSCESLabBookings();
    }, [selectedDate]);// eslint-disable-line react-hooks/exhaustive-deps

    const getAllSCESLabBookings = async () => {
        try {
            const response = await labApi.getAllSCESLabBooking(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
            if (response.ok) {
                console.log(response.data);
                setBookings(response.data);
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const SCESBooking = async (values) => {
        try {
            const response = await labApi.SCESLabBooking(values);
            if (response.ok) {
                toast.success(response.data);
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };

    return (
        <div>
            <ToastContainer />
            <Navbar user={authContext.User}></Navbar>
            <div
                className="lab-main"
                style={{ width: authContext.Width.homeWidth }}
            >

                <div className="lab-lab-main">
                    <h2 className="lab-h2">{authContext.LabName}</h2>
                </div>
                <DatePicker selectedDate={selectedDate}
                    handleDateChange={handleDateChange} />
                <div className="lab-booking-div">
                    {timeSlot.map((item, index) => {
                        return <BookingCard
                            key={index}
                            time={item}
                            selectedDate={`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`}
                            confirmBooking={SCESBooking}
                            bookings={bookings}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default SCESLab;
