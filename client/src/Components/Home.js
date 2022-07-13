import {useState} from "react"
import JobItem from "./JobItem"
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Home({ currentUserId, jobList, handleAddJob, handleAddInterview, deleteJob, handleJobPatch, handleAddOffer })
{
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`

    const [jobAppInput, setJobAppInput] = useState(
        {
            dateApplied: currentDate,
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
        <JobItem item={ item } deleteJob={ deleteJob } handleJobPatch={ handleJobPatch }/>
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
            const findJob = jobList.find((item) => item.id === offer.job_id)
            const jobPatchData = 
            {
                dateApplied: findJob.dateApplied,
                description: findJob.description,
                applicationLink: findJob.applicationLink,
                offer_id: data.id,
                status: findJob.status,
                user_id: currentUserId,
                company: findJob.company
            }

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

            handleAddOffer(data)
            setShowOffer(false)
        }) 
    }

    return(
        <div className="home">
            <h2 id="homeTitle">Home</h2>
            <div className="addInterviewOffer">
                <Button variant="primary" id="addIOButton" onClick={handleShowInterview}>
                    Add Interview
                </Button>
                <Modal show={showInterview} onHide={handleCloseInterview}>
                    <Modal.Header closeButton>
                        <Modal.Title id="addInterviewTitle">Add Interview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label className="addInterviewInputContainer">
                                Date:
                                <input className="addInterviewInput" id="addInterviewDate" name="interviewDate" type="text" placeholder="yyyy/mm/dd" onChange={handleChangeInterview}/>
                            </label>
                            <label className="addInterviewInputContainer">
                                Time:
                                <input className="addInterviewInput" name="interviewTime" type="text" placeholder="hh:mm" onChange={handleChangeInterview}/>
                            </label>
                            <label className="addInterviewInputContainer">
                                Job ID:
                                <input className="addInterviewInput" name="job_id" type="text" placeholder="Enter..." onChange={handleChangeInterview}/>
                            </label>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInterview}>
                        Close
                    </Button>
                    <Button id="addIOadd" variant="primary" onClick={handleSubmitInterview}>
                        Add
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Button id="addIOButton" variant="primary" onClick={handleShowOffer}>
                    Add Offer
                </Button>
                <Modal show={showOffer} onHide={handleCloseOffer}>
                    <Modal.Header closeButton>
                        <Modal.Title id="addOfferTitle">Add Offer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label className="addOfferInputContainer" id="addOfferSalary">
                                Salary:
                                <input className="addOfferInput" name="salary" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Medical:
                                <input className="addOfferInput" name="medical" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Vacation days:
                                <input className="addOfferInput" name="pto" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Sick leave:
                                <input className="addOfferInput" name="sickLeave" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Bonus:
                                <input className="addOfferInput" name="bonus" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Position type:
                                <input className="addOfferInput" name="positionType" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                            <label className="addOfferInputContainer">
                                Job ID:
                                <input className="addOfferInput" name="job_id" type="text" placeholder="Enter..." onChange={handleChangeOffer}/>
                            </label>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseOffer}>
                            Close
                        </Button>
                        <Button id="addIOadd" variant="primary" onClick={handleSubmitOffer}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Table striped bordered hover id="jobsTable" >
                <thead id="jobsTableHeader">
                    <tr>
                        <th className="idCol">ID</th>
                        <th className="dateCol">Date</th>
                        <th className="companyCol">Company</th>
                        <th className="descriptionCol">Job Title</th>
                        <th className="applicationCol">Application Link</th>
                        <th className="statusCol">Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="jobsTableBody" id="jobScroll">
                        <tr>
                            <td className="idCol">ID</td>
                            <td className="dateCol">
                                { currentDate }
                            </td>
                            <td className="companyCol">
                                <input id="companyInput" name="company" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                            </td>
                            <td className="descriptionCol">
                                <input id="descriptionInput" name="description" type="textarea" placeholder="Enter..." onChange={handleChangeJobApp}/>
                            </td>
                            <td className="applicationCol">
                                <input id="applicationInput" name="applicationLink" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                            </td>
                            <td className="statusCol">Status</td>
                            <td>
                                <Button onClick={handleSubmitJobApp} variant="secondary">Submit</Button>
                            </td>
                        </tr>
                    { displayList }
                </tbody>
            </Table>

        </div>
    )
}
export default Home