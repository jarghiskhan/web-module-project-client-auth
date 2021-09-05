import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NavBar = (props) => {
  const logout = () => {
    axiosWithAuth().post("/logout")
    .catch(err=>console.error("unable to logout"))
    console.log("logging out")
    localStorage.removeItem("token");
    props.setLoggedIn(false)
  };
  return (
    <div class="topnav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {props.loggedIn ? (
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};
export default NavBar;
