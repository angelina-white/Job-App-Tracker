function OfferItem({ item })
{
    const {salary, medical, pto, sickLeave, bonus, positionType } = item

    return (
        <tr>
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