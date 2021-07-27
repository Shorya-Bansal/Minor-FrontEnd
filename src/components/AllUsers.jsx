import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import api from "../api/api";
import AuthContext from "../auth/context";

import NavBar from './NavBar';

import "../css/allUsers.css";

function AllUsers({ history }) {
    const [allUsers, setUsers] = useState([]);
    const authContext = useContext(AuthContext);

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
        getUserDetails();
        console.log(allUsers);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getUserDetails = async () => {
        try {
            const response = await api.AllUserDetails();
            if (response.ok) {
                setUsers(response.data);
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
            toast.error("Client Error...")
        }
    }

    const handleDelete = async (user) => {
        try {
            const response = await api.DeleteAccount(user);
            if (response.ok) {
                toast.success(response.data);
                window.location.reload();
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
            toast.error("Client Error ! Try again later...");
        }
    }

    return (
        <div>
            <NavBar />
            <ToastContainer />
            <div className="allUsers-main">
                <div className="users-head">
                    <h2 style={{ fontWeight: "500" }}>Users</h2>
                    <div>
                        {allUsers.map((item) =>
                            <div className="users-details" key={item._id}>

                                <button className="btn btn-outline-danger btn-sm delete-button"
                                    onClick={() => { handleDelete(item) }}>
                                    <DeleteIcon fontSize="small" />
                                </button>

                                <Link to={{
                                    pathname: "/edit-user-details",
                                    state: { user: item }
                                }}
                                    params={{ user: item }}>
                                    <button className="btn btn-outline-primary btn-sm edit-button mx-2">
                                        <EditIcon fontSize="small" />
                                    </button>
                                </Link>
                                <div className="users-img">
                                    <img src={item.ProfilePhoto} alt="Users Profile"></img>
                                </div>
                                <div className="users">
                                    <h4>{item.Name}</h4>
                                    <p style={{ margin: "0" }}>{item.Email}</p>
                                    <p>{item.AccountType}</p>
                                    <p>+{item.Phone}</p>
                                </div>
                            </div>)}
                    </div>
                </div>

            </div >
        </div >
    )
}

export default AllUsers;