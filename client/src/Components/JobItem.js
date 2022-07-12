import { useState } from "react"

function JobItem({ item, deleteJob, handleJobPatch })
{

    const {id, offer, user, company, dateApplied, applicationLink, description, status } = item

    function handleDelete(e)
    {
        const jobId = parseInt(e.target.value)

        fetch(`/jobs/${jobId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => deleteJob(data));
    }

    const [isEdit, setIsEdit] = useState(false)

    function handleEdit(e)
    {
        setIsEdit((isEdit) => isEdit = !isEdit)
    }

    function handleSubmit(e)
    {
        const jobPatchData = 
        {
            dateApplied: newDateApplied,
            description: newDescription,
            applicationLink: newApplicationLink,
            offer_id: offer.id,
            status: newStatus,
            user_id: user.id,
            company: newCompany
        }

        fetch(`/jobs/${id}`,
        {
            method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobPatchData)
        })
        .then(resp => resp.json())
        .then(data => handleJobPatch(data))

        setIsEdit((isEdit) => isEdit = !isEdit)
    }

    const [newDateApplied, setNewDateApplied] = useState(dateApplied)
    function handleId(e)
    {
        setNewDateApplied(e.target.value)
    }

    const [newCompany, setNewCompany] = useState(company)
    function handleCompany(e)
    {
        setNewCompany(e.target.value)
    }

    const [newApplicationLink, setNewApplicationLink] = useState(applicationLink)
    function handleApplicationLink(e)
    {
        setNewApplicationLink(e.target.value)
    }

    const [newDescription, setNewDescription] = useState(description)
    function handleDescription(e)
    {
        setNewDescription(e.target.value)
    }

    const [newStatus, setNewStatus] = useState(status)
    function handleStatus(e)
    {
        setNewStatus(e.target.value)
    }

    return (
        <tr>
            <td>{ id }</td>
            <td>{ isEdit ? <input value={ newDateApplied } onChange={ handleId }/> : dateApplied }</td>
            <td>{ isEdit ? <input value={ newCompany } onChange={ handleCompany }/> : company }</td>
            <td>{ isEdit ? <input value={ newApplicationLink } onChange={ handleApplicationLink }/> : applicationLink }</td>
            <td>{ isEdit ? <input value={ newDescription } onChange={ handleDescription }/> : description }</td>
            <td>{ isEdit ? <input value={ newStatus } onChange={ handleStatus }/> : status }</td>
            <td>
                <button value={ id } onClick={ handleDelete }>Delete</button>
                { isEdit ? 
                <button onClick={ handleSubmit }>Submit</button> :
                <button value={ id } onClick={ handleEdit }>Edit</button> }
            </td>
        </tr>
    )
}

export default JobItem