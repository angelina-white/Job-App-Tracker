function OfferItem({ item })
{
    const {salary, medical, pto, sickLeave, bonus, positionType,jobs } = item

    return (
        <tr>
            <td>{ jobs[0].company}</td>
            <td>idk</td>
            <td>{ salary }</td>
            <td>{ medical }</td>
            <td>{ pto }</td>
            <td>{ sickLeave }</td>
            <td>{ bonus }</td>
            <td>{ positionType }</td>
        </tr>
    )
}

export default OfferItem