import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() =>
  {
    fetch('/auth')
    .then(res => 
    {
      if(res.ok)
      {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  if(!currentUser) return <Login setCurrentUser = {setCurrentUser} />

  return (
    <div className="App">
      <Signup setCurrentUser = {setCurrentUser} />
      <Login setCurrentUser = {setCurrentUser} />
      <ul className="linkClass">
        <li><Link to='/'>Home</Link></li>
      </ul>
      <Route path="/"> <Home /> </Route>
    </div>
  );
}

export default App;
