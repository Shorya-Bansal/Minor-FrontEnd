import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./auth/context";
import Home from "./components/Home";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [User, SetUser] = useState(null);
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    RestoreToken();
  }, []);

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
    <AuthContext.Provider value={{ User, SetUser }}>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/help" exact component={Help}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
