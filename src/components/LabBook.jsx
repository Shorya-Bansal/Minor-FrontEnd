import React, { useContext } from "react";

import AuthContext from "./../auth/context";
import Navbar from "./NavBar";

import DatePicker from './../Material-ui-components/DatePicker';
import BookingCard from "./../Material-ui-components/BookingCard";
import "../css/labBook.css";

function LabBook(props) {
    const authContext = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const timeSlot = ["09:00am-11:00am", "11:00am-01:00pm", "02:00pm-04:00pm", "04:00pm-06:00pm"];

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };

    return (
        <div>
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
                            selectedDate={`${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default LabBook;
