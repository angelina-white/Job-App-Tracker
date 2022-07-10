import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Interview from './Components/Interview';
import Offer from './Components/Offer';
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() =>
  {
    fetch('/auth')
    .then(res => 
    {
      if(res.ok)
      {
        res.json().then(user => 
          {
            setCurrentUser(user)
            setCurrentUserId(user.id)
          })
      }
    })
  }, [])

  if(!currentUser) return <Signup setCurrentUser = {setCurrentUser} />

  function handleLogout() 
  {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout()
  {
    setCurrentUser("")
  }

  return (
    <div className="App">
      <Signup setCurrentUser = {setCurrentUser} />
      <Login setCurrentUser = {setCurrentUser} />
      <button onClick={handleLogout}>Logout</button>
      <h4 id="loggedInUsername">{ currentUser.username }</h4>
        <ul className="linkClass">
          <li><Link to='home'>Home</Link></li>
          <li><Link to='interview'>Interview</Link></li>
          <li><Link to='offer'>Offer</Link></li>
        </ul>
        <Route path="/Home"> <Home currentUserId={ currentUserId }/> </Route>
        <Route path="/interview"> <Interview /> </Route>
        <Route path="/offer"> <Offer /> </Route>
    </div>
  );
}

export default App;
