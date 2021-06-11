import React, { useContext } from "react";

import AuthContext from "./../auth/context";
import Navbar from "./NavBar";

import "../css/home.css";

function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <Navbar user={authContext.User}></Navbar>
      <div
        className="home-main"
        style={{ width: window.innerWidth < 769 ? "100%" : "82%" }}
      >
        <h1>Hello Shorya</h1>
      </div>
    </div>
  );
}

export default Home;
