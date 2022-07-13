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

  function fetchData()
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
  }

  useEffect(() =>
  {
    fetchData()
  }, [])

  if(!currentUser) return <HomeLogin setCurrentUser = {setCurrentUser} renderLists={ renderLists }/>

  function renderLists()
  {
    fetchData()
  }

  function handleLogout() 
  {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => 
    {
      setCurrentUser("")
      setJobList([])
      setInterviewList([])
      setOfferList([])
    })
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
      if (item.id === job.id)
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
      <div className="titleContainer">
        <h1 id="title">Job Application Tracker</h1>
      </div>
      <Router>
        <div>
          <nav>
            <ul className="linksNavBar">
              <li className="links">
                <Link className="navText" id="homeLinkText" to="/">Home</Link>
              </li>
              <li className="links">
                <Link className="navText" id="interviewLinkText" to="/interview">Interview</Link>
              </li>
              <li className="links">
                <Link className="navText" id="offerLinkText" to="/offer">Offer</Link>
              </li>
              <li id="loggedInUsername">
                <h4>{ currentUser.username }</h4>
              </li>
              <li>
                <button id="logoutButton" onClick={handleLogout}>Logout</button>
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
