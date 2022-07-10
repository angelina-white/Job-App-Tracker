import {useState} from "react"
import Table from 'react-bootstrap/Table';
import JobItem from "./JobItem"

function Home({ currentUserId, jobs, handleAddJob })
{
    
    const [jobAppInput, setJobAppInput] = useState(
        {
            dateApplied: "",
            description: "",
            applicationLink: "",
            offer_id: 1,
            status: "Pending",
            user_id: currentUserId,
            company: ""
        }
    )

    function handleChangeJobApp(e)
    {
        setJobAppInput({...jobAppInput, [e.target.name]: e.target.value})
    }

    function handleSubmitJobApp(e)
    {
        e.preventDefault()

        fetch("/jobs", 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobAppInput)
        })
        .then(resp => resp.json())
        .then(data => handleAddJob(data)) 
    }

    const jobList = jobs.map((item) =>
    {
      return (
        <JobItem item={ item } />
      )
    })

    return(
        <div className="home">
            <h2>Home</h2>

            <form onSubmit={handleSubmitJobApp}>
                <label>
                    Date applied:
                    <input name="dateApplied" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Company:
                    <input name="company" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Application link:
                    <input name="applicationLink" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Job description:
                    <input name="description" type="textarea" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <button>Submit</button>
            </form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Application Link</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    { jobList }
                </tbody>
            </Table>
        </div>
    )
}
export default Home