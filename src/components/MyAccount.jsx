import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

import NavBar from "../components/NavBar";
import AuthContext from "../auth/context";
import api from "../api/api";

import EditIcon from '@material-ui/icons/Edit';

import "../css/myAccount.css";

function MyAccount({ history }) {
    const authContext = useContext(AuthContext);
    const [image, setImage] = useState(null);

    const handleProfileChange = (values) => {
        console.log(values);
        const file = values.target.files[0];
        console.log(file.type);
        if (file) {
            const reader = new FileReader();
            console.log(reader);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    authContext.SetUser((prevValue) => {
                        return {
                            ...prevValue,
                            ProfilePhoto: reader.result
                        }
                    })/* 
                    if (localStorage.getItem("image")) {
                        localStorage.removeItem("image");
                    }
                    localStorage.setItem("image", reader.result); */

                    setImage(reader.result);
                }
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async () => {
        try {
            localStorage.setItem("image", authContext.User.ProfilePhoto);
            setImage(null);
            const accountUser = authContext.User;
            const response = await api.AccountProfile(accountUser);
            if (response.ok) {
                toast.success(response.data);
            } else {
                toast.alert(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <ToastContainer />
            <NavBar></NavBar>
            <div
                className="account-main"
                style={{ width: authContext.Width.homeWidth }}>
                <div className="account-content">
                    <h3>My Account</h3>
                    <div>
                        {/* localStorage.getItem("image") ? localStorage.getItem("image") : authContext.User.ProfilePhoto */}
                        <img src={image !== null ? image : localStorage.getItem("image")}
                            alt="Default Profile"
                            className="account-profile-image" />
                        <button className="btn btn-primary profile-button">
                            <label htmlFor="profile">
                                <EditIcon style={{ marginLeft: "-0.3rem" }} />
                            </label>
                            <input type="file"
                                id="profile"
                                style={{ display: "none" }}
                                onChange={handleProfileChange}>
                            </input>
                        </button>
                        <div className="account-details">
                            <h3>{authContext.User.Name}</h3>
                            <p style={{ margin: "0" }}>+{authContext.User.Phone}</p>
                            <p>{authContext.User.Email}</p>
                        </div>
                        <div className="account-buttons">
                            <button className="btn btn-outline-primary mx-3"
                                disabled={image !== null ? false : true}
                                type="submit"
                                onClick={handleSubmit}>Save Changes</button>
                            <button className="btn btn-outline-danger"
                                onClick={() => { history.push("/home") }}> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;