import OfferItem from "./OfferItem";

function Offer({ offerList })
{
    const filteredList = offerList.filter((item) =>
    {
        if (item.salary !== 0)
        {
            return item
        }
    })

    const displayList = filteredList.map((item) =>
    {
        return (
            <OfferItem item={ item } />
        )
    })

    return (
        <div className="offer">
            <h2 id="offersTitle">Offers</h2>
            <ul className="cardUl">
                { displayList }
            </ul>
        </div>
    )
}
export default Offer