import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "../src/pages/Auth/Login";
import SignUp from "../src/pages/Auth/SignUp";
import Home from "../src/pages/Dashboard/Home";
import Income from "../src/pages/Dashboard/Income";
import Expense from "../src/pages/Dashboard/Expense";

const App = () => {
    return (
        <div className="text-3xl text-purple-600"> Hello Folks!

        <Router>
            <Routes>
                <Route path = "/" element = {<Root/>}/>
                <Route path = "/login"  element = {<Login/>}/>
                <Route path = "/signUp"  element = {<SignUp/>}/>
                <Route path = "/dashboard"  element = {<Home/>}/>
                <Route path = "/income"  element = {<Income/>}/>
                <Route path = "/expense"  element = {<Expense/>}/>
            </Routes>
        </Router>
        </div>
    );
    }

    export default App;

    const Root = () => {
        // check id the token is present in local storage
        const isAuthenticated = !!localStorage.getItem("token");
        return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
    };