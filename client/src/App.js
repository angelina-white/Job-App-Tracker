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
  const [jobs, setJobs] = useState({});

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
    fetch(`/users/14/jobs`)
    .then(resp => resp.json())
    .then(data => setJobs(data))
  }, [])


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

  function handleAddJob(job)
  {
    setJobs([job, ...jobs])
  }

  return (
    <div className="App">
      <Signup setCurrentUser = {setCurrentUser} />
      <Login setCurrentUser = {setCurrentUser} />
      <button onClick={handleLogout}>Logout</button>
      <h4 id="loggedInUsername">{ currentUser.username }</h4>
        {/* <ul className="linkClass">
            <li><Link to='home'>Home</Link></li>
            <li><Link to='interview'>Interview</Link></li>
            <li><Link to='offer'>Offer</Link></li>
          </ul>
          <Routes>
            <Route path="/home"> <Home currentUserId={ currentUserId } jobs={ jobs } handleAddJob={ handleAddJob }/> </Route>
            <Route path="/interview"> <Interview /> </Route>
            <Route path="/offer"> <Offer /> </Route>
          </Routes> */}

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

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/interview">
                <Interview />
              </Route>
              <Route path="/offer">
                <Offer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
