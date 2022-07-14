import OfferItem from "./OfferItem";
import { useEffect } from 'react'
import { gsap } from "gsap";

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

    useEffect(() =>
    {
        gsap.from(".offer", {duration: 1, opacity: 0, y: 10});
    }, [])

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