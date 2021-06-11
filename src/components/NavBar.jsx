import React, { useState, useRef, useEffect } from "react";

import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";

import Sidebar from "./Sidebar";

import logo from "../images/logo.jpg";
import "../css/navbar.css";
import { useContext } from "react";
import AuthContext from "../auth/context";

function NavBar() {
  const [width, setWidth] = useState("0%");
  const [navWidth, setNavWidth] = useState("82%");
  const [checkValue, setValue] = useState(false);
  const [visibility, setVisibility] = useState("hidden");
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    authContext.SetUser(null);
    window.location = "/";
  };

  const handleSidebar = () => {
    console.log(checkValue);
    setVisibility("visible");
    setValue(!checkValue);
    if (window.innerWidth < 769) {
      if (checkValue) {
        setWidth("80%");
        setNavWidth("100%");
      } else {
        setWidth("0%");
        setNavWidth("100%");
      }
    }
  };

  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return null;
    }
    setWidth("0%");
    setValue(!checkValue);
    setVisibility("hidden");
  };

  const handleUserDropDown = () => {};

  return (
    <div>
      <div ref={node}>
        {window.innerWidth < 769 ? (
          <Sidebar width={width}></Sidebar>
        ) : (
          <Sidebar width={"18%"}></Sidebar>
        )}
      </div>
      <div
        className="sidebar-homeBackground"
        style={{ visibility: visibility }}
      />
      <div
        className="navbar-outline"
        style={{ width: window.innerWidth < 769 ? "100%" : navWidth }}
      >
        <div>
          {window.innerWidth < 769 ? (
            <div onClick={handleSidebar}>
              <DehazeRoundedIcon
                className="sidebar-bar"
                style={{ fontSize: "35px", float: "left", margin: "1rem" }}
              ></DehazeRoundedIcon>
            </div>
          ) : null}
          <div>
            <div className="user-panel" onClick={handleUserDropDown}>
              <img src={logo} alt="profile" className="profile-image" />
              <button onClick={handleLogout} className="user-navbar">
                {authContext.User?.Name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
