function InterviewItem({ item })
{
    const {interviewDate, interviewTime, job} = item

    return (
        <tr>
            <td>{ job.company }</td>
            <td>{ interviewDate }</td>
            <td>{ interviewTime }</td>
        </tr>
    )
}

export default InterviewItem