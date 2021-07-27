import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom"

import AuthContext from '../auth/context';
import allLabs from "../helper/allLabs";

import logo from "../images/logo.jpg"

import "../css/sidebar.css";

function Sidebar(props) {
    const authContext = useContext(AuthContext);
    const [width, setWidth] = useState(0);
    const Labs = allLabs;

    useEffect(() => {
        setWidth(props.width);
    }, [props.width])

    const handleClick = (values) => {
        authContext.setLabName(values);
        if (window.innerWidth < 769)
            props.handleSidebar();
    }

    return (
        <div>
            <div className="sidebar" style={{ width: width }}>
                <div className="sidebar-heading">
                    <h4 style={{ fontWeight: 600, fontSize: "1.2rem" }}><img src={logo} className="sidebar-logo" alt="College Logo"></img>MINOR PROJECT</h4>
                </div>
                <div className="sidebar-outline" >
                    <hr style={{ height: "1.5px", color: "white", margin: "0 auto" }}></hr>
                    <ul className="sidebar-labs-details">
                        {Labs.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to={{
                                        pathname: `/home/${item.fullName}`,
                                        state: { labName: item.fullName }
                                    }}
                                        style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }}>
                                        <li className="sidebar-content-style"
                                            onClick={() => {
                                                handleClick(item.fullName);
                                            }}>{item.shortName}</li>
                                    </Link>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebar;


