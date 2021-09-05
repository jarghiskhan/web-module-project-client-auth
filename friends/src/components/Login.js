import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({credentials, setCredentials, setLoggedIn}) => {
  let history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        setLoggedIn(true);
        history.push("/friends");
      })
      .catch((err) => console.error("Cannot login to server: ", err.message));
  };

  return (
    <div>
      <h2>Please comrade, login.</h2>
      <form onSubmit={login}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange}></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Login;
