function InterviewItem({ item })
{
    const {interviewDate, interviewTime, job} = item

    return (
        <tr>
            <td>{ interviewDate }</td>
            <td>{ interviewTime }</td>
            <td>{ job.company }</td>
        </tr>
    )
}

export default InterviewItem