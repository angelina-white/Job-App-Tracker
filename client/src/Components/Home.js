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

    const [showInterview, setShowInterview] = useState(false);
    const handleCloseInterview = () => setShowInterview(false);
    const handleShowInterview = () => setShowInterview(true);

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
            setShowInterview(false)
        }) 
    }

    const [showOffer, setShowOffer] = useState(false);
    const handleCloseOffer = () => setShowOffer(false);
    const handleShowOffer = () => setShowOffer(true);
    const [offerID, setOfferID] = useState("");
    const [offerInfo, setOfferInfo] = useState("");

    const [offer, setOffer] = useState({salary:0, medical:"", pto:0, sickLeave:0, bonus:0, positionType:"", job_id:""})
    function handleChangeOffer(e)
    {
        setOffer({...offer, [e.target.name]: e.target.value})
    }

    function handleSubmitOffer(e)
    {
        e.preventDefault()

        const offerData = 
        {
            salary: offer.salary,
            medical: offer.medical,
            pto: offer.pto,
            sickLeave: offer.sickLeave,
            bonus: offer.bonus,
            positionType: offer.positionType
        }

        fetch("/offers", 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(offerData)
        })
        .then(resp => resp.json())
        .then(data => 
        {
            setOfferInfo(data)
            // handleAddOffer(data)
            // setShowOffer(false)
        }) 


        const findJob = jobList.find((item) => item.id == offer.job_id)
        const jobPatchData = 
        {
            dateApplied: findJob.dateApplied,
            description: findJob.description,
            applicationLink: findJob.applicationLink,
            offer_id: offerInfo.id,
            status: findJob.status,
            user_id: findJob.user_id,
            company: findJob.company
        }

        // put patch request her
        fetch(`/jobs/${offer.job_id}`,
        {
            method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobPatchData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
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

            <Button variant="primary" onClick={handleShowInterview}>
                Add Interview
            </Button>
            <Modal show={showInterview} onHide={handleCloseInterview}>
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
                <Button variant="secondary" onClick={handleCloseInterview}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitInterview}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={handleShowOffer}>
                Add Offer
            </Button>
            <Modal show={showOffer} onHide={handleCloseOffer}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            Salary:
                            <input name="salary" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Medical:
                            <input name="medical" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Vacation days:
                            <input name="pto" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Sick leave:
                            <input name="sickLeave" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Bonus:
                            <input name="bonus" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Position type:
                            <input name="positionType" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                        <label>
                            Job ID:
                            <input name="job_id" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseOffer}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitOffer}>
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
                        <th></th>
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