import './App.css';
import Home from './Components/Home';
import HomeLogin from './Components/HomeLogin';
import Interview from './Components/Interview';
import Offer from './Components/Offer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [jobList, setJobList] = useState([]);
  const [interviewList, setInterviewList] = useState([]);
  const [offerList, setOfferList] = useState([]);

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

          fetch(`/users/${user.id}/jobs`)
          .then(resp => resp.json())
          .then(data => setJobList(data))

          fetch(`/users/${user.id}/interviews`)
          .then(resp => resp.json())
          .then(data => setInterviewList(data))

          fetch(`/users/${user.id}/offers`)
          .then(resp => resp.json())
          .then(data => setOfferList(data))
        })
      }
    })
  }, [])

  if(!currentUser) return <HomeLogin setCurrentUser = {setCurrentUser} />

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

  function handleAddInterview(item)
  {
    setInterviewList([item, ...interviewList])
  }

  function deleteJob(jobId)
  {
    const filteredJobList = jobList.filter(item => item.id !== jobId)
    setJobList(filteredJobList)

    const filteredInterviewList = interviewList.filter(item => item.job.id !== jobId)
    setInterviewList(filteredInterviewList)
  }

  function handleJobPatch(job)
  {
    const newListing = jobList.map((item) =>
    {
      if (item.id == job.id)
        return job
      else
        return item
    })
    setJobList(newListing)
  }

  function handleAddOffer(job)
  {
    setOfferList([...offerList, job])
  }

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
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
              <Interview interviewList={ interviewList } />
            </Route>
            <Route path="/offer">
              <Offer offerList={ offerList }/>
            </Route>
            <Route path="/">
              <Home currentUserId={ currentUser.id } jobList={ jobList } handleAddJob={ handleAddJob } handleAddInterview={ handleAddInterview } deleteJob={ deleteJob } handleJobPatch={ handleJobPatch } handleAddOffer={ handleAddOffer }/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
