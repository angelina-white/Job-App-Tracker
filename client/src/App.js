import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Interview from './Components/Interview';
import Offer from './Components/Offer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [jobList, setJobList] = useState([]);

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

  useEffect(() =>
  {
    // fetch(`/users/${currentUserId}/jobs`)
    fetch(`/users/16/jobs`)
    .then(resp => resp.json())
    .then(data => setJobList(data))
  }, [])

  console.log(jobList)


  // if(!currentUser) return <Signup setCurrentUser = {setCurrentUser} />

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

  function handleAddJob(item)
  {
    setJobList([item, ...jobList])
  }

  return (
    <div className="App">
      <Signup setCurrentUser = {setCurrentUser} />
      <Login setCurrentUser = {setCurrentUser} />
      <button onClick={handleLogout}>Logout</button>
      <h4 id="loggedInUsername">{ currentUser.username }</h4>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/interview">Interview</Link>
                </li>
                <li>
                  <Link to="/offer">Offer</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/interview">
                <Interview />
              </Route>
              <Route path="/offer">
                <Offer />
              </Route>
              <Route path="/">
                <Home currentUserId={ currentUserId } jobList={ jobList } handleAddJob={ handleAddJob }/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
