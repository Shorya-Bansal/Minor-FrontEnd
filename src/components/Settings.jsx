import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import NavBar from "./NavBar";
import api from "../api/api";
import ChangePassword from "../Material-ui-components/ChangePassword";
import AuthContext from '../auth/context';


import "../css/settings.css";
import "react-toastify/dist/ReactToastify.css";

function Settings() {

    const authContext = useContext(AuthContext);
    const handleDelete = async () => {
        try {
            const response = await api.DeleteAccount(authContext.User);
            if (response.ok) {
                toast.success(response.data);
                localStorage.removeItem("auth-token");
                window.location = "/login"
            }
            else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <ToastContainer />
            <div
                className="settings-main"
                style={{ width: authContext.Width.homeWidth }}>
                <div className="settings-content">
                    <h1>Settings</h1>
                    <ChangePassword></ChangePassword>
                    <button className="btn btn-outline-danger mt-3"
                        style={{ width: "90%" }}
                        onClick={handleDelete}>
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Settings;