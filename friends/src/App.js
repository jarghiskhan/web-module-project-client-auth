import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Friends from "./pages/Friends";
import Friend from "./pages/Friend";
import About from "./pages/About";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [friends, setFriends] = useState([]);

  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: 0,
    email: "",
  });

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  console.log({ Friend });
  return (
    <>
      <div className="App">
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></NavBar>
      </div>
      <Switch>
        {loggedIn ? (
          <>
            <Route path="/friends">
              <Friends loggedIn={loggedIn} friends={friends} setFriends={setFriends} setNewFriend={setNewFriend} newFriend={newFriend}></Friends>
              <Route path="/friends/:id">
                <Friend friends={friends}></Friend>
              </Route>
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <h1>Welcome to the friends app</h1>
            <Login
              credentials={credentials}
              setCredentials={setCredentials}
              setLoggedIn={setLoggedIn}
            ></Login>
          </Route>
        )}
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </>
  );
}

export default App;
