import {useState} from "react"
import JobItem from "./JobItem"
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Home({ currentUserId, jobList, handleAddJob, handleAddInterview })
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

    const displayList = jobList.map((item) =>
    {
      return (
        <JobItem item={ item } />
      )
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [interview, setInterview] = useState({interviewDate:"", interviewTime:"", job_id: ""})
    function handleChangeInterview(e)
    {
        setInterview({...interview, [e.target.name]: e.target.value})
    }

    function handleSubmitInterview(e)
    {
        e.preventDefault()

        fetch("/interviews", 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interview)
        })
        .then(resp => resp.json())
        .then(data => 
        {
            handleAddInterview(data)
            setShow(false)
        }) 
    }

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

            <Button variant="primary" onClick={handleShow}>
                Add Interview
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Interview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            Date:
                            <input name="interviewDate" type="text" placeholder="Enter..." onChange={handleChangeInterview}/>
                        </label>
                        <label>
                            Time:
                            <input name="interviewTime" type="text" placeholder="Enter..." onChange={handleChangeInterview}/>
                        </label>
                        <label>
                            Job ID:
                            <input name="job_id" type="text" placeholder="Enter..." onChange={handleChangeInterview}/>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitInterview}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Application Link</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    { displayList }
                </tbody>
            </Table>
        </div>
    )
}
export default Home