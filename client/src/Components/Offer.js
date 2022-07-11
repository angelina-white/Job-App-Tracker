import Table from 'react-bootstrap/Table';
import OfferItem from "./OfferItem";

function Offer()
{
    return (
        <div className="offer">
            <h2>Offer</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Salary</th>
                        <th>Position Type</th>
                        <th>Medical</th>
                        <th>Vacation Days</th>
                        <th>Sick Leave</th>
                        <th>Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { displayList } */}
                </tbody>
            </Table>
        </div>
    )
}
export default Offer