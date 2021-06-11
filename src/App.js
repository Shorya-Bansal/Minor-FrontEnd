import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

import Login from "./components/Login";
/* import AdminLogin from "./components/AdminLogin";*/
import Register from './components/Register';
import Home from "./components/Home";
import Help from "./components/Help";

import AuthContext from "./auth/context"


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
        return (
            <div></div>
        );
    }
    return (
        <AuthContext.Provider
            value={{ User, SetUser }}
        >
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login} ></Route>
                        {/* <Route path="/admin" exact component={AdminLogin}></Route> */}
                        <Route path="/admin/register" exact component={Register}></Route>
                        <Route path="/home" exact component={Home}></Route>
                        <Route path="/help" exact component={Help}></Route>

                    </Switch>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
