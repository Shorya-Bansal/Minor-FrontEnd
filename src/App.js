import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./auth/context";
import allLabs from "./helper/allLabs";

import Home from "./components/Home";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import MyAccount from "./components/MyAccount";
import AllUsers from "./components/AllUsers";
import EditDetails from "./components/EditUsersDetails";
import ContactUs from "./components/ContactUs";
import ContactTickets from "./components/AllContactTickets";
import TicketDetails from "./components/TicketDetails";
import LabBook from './components/LabBook';

import Auditorium from "./labScreens/Auditorium";
import EnggPhysicsLab from "./labScreens/EnggPhysicsLab";
import ComputerProgLab from './labScreens/ComputerProgLab';
import DataCommLab from './labScreens/DataCommLab';
import HardwareLab from "./labScreens/HardwareLab";
import DigitalLogicLab from "./labScreens/DigitalLogicLab";
import VLSILab from "./labScreens/VLSILab";
import CNTLab from "./labScreens/CNTLab";
import SCESLab from "./labScreens/SCESLab";
import InfoSecurityLab from "./labScreens/InfoSecurityLab";
import AdvanceNetLab from "./labScreens/AdvanceNetLab";
import WirelessSensLab from "./labScreens/WirelessSensLab";
import MathModelLab from "./labScreens/MathModelLab";
import GenericCompLab from "./labScreens/GenericCompLab";
import AppliedChemLab from "./labScreens/AppliedChemLab";
import SponsProjectLab from "./labScreens/SponsProjectLab";
import MedicalInfoLab from "./labScreens/MedicalInfoLab";
import EBusinessLab from "./labScreens/E-BusinessLab";
import EnvScienceLab from "./labScreens/EnvScienceLab";
import BEEALab from "./labScreens/BEEALab";

import UnAuthorized from "./helper/unAuthorized";

function App() {
  const [User, SetUser] = useState(null);
  const [LabName, setLabName] = useState(null);
  const [IsReady, SetIsReady] = useState(false);
  const [Width, SetWidth] = useState({
    sideWidth: null,
    navWidth: null,
    homeWidth: null
  });


  useEffect(() => {
    RestoreToken();
    setLabName("Auditorium");
    allWidth();
    window.addEventListener("resize", allWidth);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const allWidth = () => {
    const width = window.innerWidth;
    if (width > 1060) {
      SetWidth({
        sideWidth: "19%",
        navWidth: "81%",
        homeWidth: "81%"
      });
    } else if (width > 768 && width <= 1060) {
      SetWidth({
        sideWidth: "23%",
        navWidth: "77%",
        homeWidth: "77%"
      });
    }
    else if (width <= 768) {
      SetWidth({
        sideWidth: "80%",
        navWidth: "100%",
        homeWidth: "100%"
      });
    }
  }
  const RestoreToken = async () => {
    const result = localStorage.getItem("auth-token");
    if (result) {
      const user = jwtDecode(result);
      SetUser(user);
    }
    SetIsReady(true);
  };

  if (!IsReady) {
    return <div></div>;
  }
  return (
    <AuthContext.Provider value={{ User, SetUser, Width, SetWidth, LabName, setLabName }}>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/settings" exact component={Settings}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/help" exact component={Help}></Route>
        <Route path="/myAccount" exact component={MyAccount}></Route>
        <Route path="/" exact component={Login}></Route>
        <Route path="/unAuthorized" exact component={UnAuthorized}></Route>
        <Route path="/allUsers" exact component={AllUsers}></Route>
        <Route path="/edit-user-details" exact component={EditDetails}></Route>
        <Route path="/contactUs" exact component={ContactUs}></Route>
        <Route path="/allContactTickets" exact component={ContactTickets}></Route>
        <Route path="/allContactTickets/:id" exact component={TicketDetails}></Route>

        <Route path={`/home/${allLabs[0].fullName}`} exact component={Auditorium}></Route>
        <Route path={`/home/${allLabs[1].fullName}`} exact component={EnggPhysicsLab}></Route>
        <Route path={`/home/${allLabs[2].fullName}`} exact component={ComputerProgLab}></Route>
        <Route path={`/home/${allLabs[3].fullName}`} exact component={DataCommLab}></Route>
        <Route path={`/home/${allLabs[4].fullName}`} exact component={HardwareLab}></Route>
        <Route path={`/home/${allLabs[5].fullName}`} exact component={DigitalLogicLab}></Route>
        <Route path={`/home/${allLabs[6].fullName}`} exact component={VLSILab}></Route>
        <Route path={`/home/${allLabs[7].fullName}`} exact component={CNTLab}></Route>
        <Route path={`/home/${allLabs[8].fullName}`} exact component={SCESLab}></Route>
        <Route path={`/home/${allLabs[9].fullName}`} exact component={InfoSecurityLab}></Route>
        <Route path={`/home/${allLabs[10].fullName}`} exact component={AdvanceNetLab}></Route>
        <Route path={`/home/${allLabs[11].fullName}`} exact component={WirelessSensLab}></Route>
        <Route path={`/home/${allLabs[12].fullName}`} exact component={MathModelLab}></Route>
        <Route path={`/home/${allLabs[13].fullName}`} exact component={GenericCompLab}></Route>
        <Route path={`/home/${allLabs[14].fullName}`} exact component={AppliedChemLab}></Route>
        <Route path={`/home/${allLabs[15].fullName}`} exact component={SponsProjectLab}></Route>
        <Route path={`/home/${allLabs[16].fullName}`} exact component={MedicalInfoLab}></Route>
        <Route path={`/home/${allLabs[17].fullName}`} exact component={EBusinessLab}></Route>
        <Route path={`/home/${allLabs[18].fullName}`} exact component={EnvScienceLab}></Route>
        <Route path={`/home/${allLabs[19].fullName}`} exact component={BEEALab}></Route>

      </Switch>
    </AuthContext.Provider>
  );
}

export default App;

/* {allLabs.map((item, index) => {
  <Route path={`/home/:${item.fullName}`} exact component={item.renderComponent}></Route>
  console.log(item.renderComponent);
})} */
