import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import { Link } from "react-router-dom";
const Friends = ({friends, setFriends, newFriend, setNewFriend}) => {
//   const [friends, setFriends] = useState([]);
//   const [newFriend, setNewFriend] = useState({
//     id: Date.now(),
//     name: "",
//     age: 0,
//     email: "",
//   });
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.error("unable to get data: ", err.message));
  }, [setFriends]);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => {
        setFriends(res.data);
        console.log(friends)
      })
      .catch((err) => console.error("Cannot post to server: ", err.message));
    e.target.reset();
  };
  return (
    <>
      <h1>Friends</h1>
      <form onSubmit={addFriend}>
        <label>
          Friend Name:
          <input type="text" name="name" onChange={handleChange}></input>
        </label>
        <label>
          Age:
          <input type="text" name="age" onChange={handleChange}></input>
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <div className="friendList">
        {friends.map((friend, key) => (
        //   <div key={key} className="friendTile">
        //     <h2>{friend.name}</h2>
        //     <p>Age: {friend.age}</p>
        //     <p>Email: {friend.email}</p>
        //   </div>
        <Link to={`/friends/${friend.id}`}><h2>{friend.name}</h2></Link>
        ))}
      </div>
    </>
  );
};

export default Friends;
