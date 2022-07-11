import Table from 'react-bootstrap/Table';
import InterviewItem from "./InterviewItem";

function Interview({ interviewList })
{

    const displayList = interviewList.map((item) =>
    {
        return (
            <InterviewItem item={ item } />
        )
    })


    return (
        <div className="interview">
            <h2>Interview</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    { displayList }
                </tbody>
            </Table>
        </div>
    )
}
export default Interview