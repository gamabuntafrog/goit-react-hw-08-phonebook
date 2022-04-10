import logo from "./logo.svg";
import "./App.css";
import Contacts from "./Components/Contacts";
import React, { useEffect } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Layout from "./Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { fetchCurrentUser } from "./Redux/authSliceOperations";
import UserMenu from "./Components/UserMenu/UserMenu";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCurrentUser());
  }, []);

  if (isLoggedIn) {
    return (
      <Router>
        <header>
          <UserMenu />
          <Layout />
        </header>
        <Switch>
          <Route path={"/contacts"}>
            <Contacts></Contacts>
          </Route>
          <Redirect to={"/contacts"}></Redirect>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Layout />
        <Switch>
          <Route path={"/login"}>
            <Login></Login>
          </Route>
          <Route path={"/register"}>
            <Register></Register>
          </Route>
          <Redirect to={"/login"}></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
