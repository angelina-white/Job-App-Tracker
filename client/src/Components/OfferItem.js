import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function OfferItem({ item })
{
    const {salary, medical, pto, sickLeave, bonus, positionType, jobs } = item
    const findJob = jobs.pop()

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{ findJob }</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Salary: { salary }</ListGroup.Item>
                    <ListGroup.Item>Position type: { positionType }</ListGroup.Item>
                    <ListGroup.Item>Medical: { medical }</ListGroup.Item>
                    <ListGroup.Item>Vacation days: { pto }</ListGroup.Item>
                    <ListGroup.Item>Sick leave: { sickLeave }</ListGroup.Item>
                    <ListGroup.Item>Bonus: { bonus }</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default OfferItem