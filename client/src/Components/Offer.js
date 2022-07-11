import Table from 'react-bootstrap/Table';
import OfferItem from "./OfferItem";

function Offer({ offerList })
{

    const displayList = offerList.map((item) =>
    {
        return (
            <OfferItem item={ item } />
        )
    })

    return (
        <div className="offer">
            <h2>Offer</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Position Type</th>
                        <th>Medical</th>
                        <th>Vacation Days</th>
                        <th>Sick Leave</th>
                        <th>Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    { displayList }
                </tbody>
            </Table>
        </div>
    )
}
export default Offer