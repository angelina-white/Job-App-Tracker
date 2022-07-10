function JobItem({ item })
{
    const {company, dateApplied, applicationLink, description, status} = item
    return (
        <tr>
            <td>{ dateApplied }</td>
            <td>{ company }</td>
            <td>{ applicationLink }</td>
            <td>{ description }</td>
            <td>{ status }</td>
        </tr>
    )
}

export default JobItem