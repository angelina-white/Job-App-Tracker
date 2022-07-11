function JobItem({ item })
{

    const {id, company, dateApplied, applicationLink, description, status} = item

    function handleDelete(e)
    {
        const jobId = parseInt(e.target.value)

        console.log(jobId)

        fetch(`/jobs/${jobId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => console.log("tis bye"));
    }

    return (
        <tr>
            <td>{ id }</td>
            <td>{ dateApplied }</td>
            <td>{ company }</td>
            <td>{ applicationLink }</td>
            <td>{ description }</td>
            <td>{ status }</td>
            <td><button value={ id } onClick={ handleDelete }>Delete</button></td>
        </tr>
    )
}

export default JobItem