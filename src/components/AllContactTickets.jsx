import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

import AuthContext from '../auth/context';
import NavBar from "../components/NavBar";
import api from "../api/api";

import ReplyIcon from '@material-ui/icons/Reply';

import "../css/allContactTicket.css";

function ContactTickets({ history }) {
    const authContext = useContext(AuthContext);
    const [tickets, setTickets] = useState("");

    /* If User Is Not valid Then The user is redirected to different routes... */
    useEffect(() => {
        if (localStorage.getItem("auth-token") === null) {
            history.push("/login");
        } else if (authContext.User.AccountType === "Not Admin") {
            history.push("/home");
        } else {
            return;
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getContactTicketDetails();
        console.log(tickets);
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const getContactTicketDetails = async () => {
        try {
            const response = await api.ContactTicketDetails();
            if (response.ok) {
                console.log(response.data);
                setTickets(response.data)
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
            toast.error("Client Error...")
        }
    }


    return (
        <div>
            <NavBar />
            <ToastContainer />
            <div className="contact-ticket-main">
                <div className="contact-ticket-head">
                    <h2>All Tickets</h2>

                    <div>
                        {tickets !== "" ?
                            tickets.map((item) => {
                                if (item.Status !== "Closed") {
                                    return (<Link to={{
                                        pathname: `/allContactTickets/${item._id}`,
                                        state: { ticket: item }
                                    }}
                                        style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                        key={item._id}>

                                        <div className="contact-ticket-details" key={item._id}>

                                            <button className="btn btn-outline-primary btn-sm reply-button">
                                                <ReplyIcon fontSize="small" />
                                            </button>
                                            <div className="contact-ticket-div" key={item._id}>
                                                <h4>{item.User.Name}</h4>
                                                <p >{item.User.Email}</p>
                                                <div className="ticket-query">
                                                    <strong>
                                                        Query:
                                                    </strong>
                                                    {" " + item.Problem}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>)
                                }
                            }
                            ) : null}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactTickets;