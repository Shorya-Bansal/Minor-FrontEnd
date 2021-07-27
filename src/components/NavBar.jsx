import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";

import Sidebar from "./Sidebar";
import NavbarAccount from "../Material-ui-components/NavbarAccountPanel";
import NavbarUsers from "../Material-ui-components/NavbarUsersPanel";

import "../css/navbar.css";

import AuthContext from "../auth/context";

function NavBar() {
  const [width, setWidth] = useState("0%");
  const [checkValue, setValue] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const authContext = useContext(AuthContext);
  const windowWidth = window.innerWidth;


  const handleSidebar = () => {

    setVisibility("visible");
    setValue(!checkValue);

    if (window.innerWidth < 769) {
      if (checkValue) {
        setWidth("300px");
      } else {
        setVisibility("hidden");
        setWidth("0%");
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


  return (
    <div>
      <div ref={node}>
        {windowWidth < 769 ? (
          <Sidebar width={width} handleSidebar={handleSidebar} ></Sidebar>
        ) : (
          <Sidebar width={authContext.Width.sideWidth}></Sidebar>
        )}
      </div>
      <div
        className="sidebar-homeBackground"
        style={{ visibility: visibility }}
      />
      <div
        className="navbar-outline"
        style={{ width: authContext.Width.navWidth }}
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
            <div className="navbar-option" style={{ display: "inline" }}>
              <Link to="/home"
                style={{ textDecoration: "none", color: "	#404040" }}>
                <span >Home</span>
              </Link>
              {authContext.User.AccountType === "Admin" ?
                <span style={{ zIndex: "1", position: "relative" }}>
                  <NavbarUsers />
                </span>
                : null}
            </div>
            <div className="user-panel">
              <NavbarAccount value={authContext.User}></NavbarAccount>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
