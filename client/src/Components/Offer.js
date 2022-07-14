import OfferItem from "./OfferItem";
import { useEffect } from 'react'
import { gsap } from "gsap";

function Offer({ offerList })
{
    //shows offers that aren't 0
    const filteredList = offerList.filter((item) =>
    {
        if (item.salary !== 0)
        {
            return item
        }
    })

    //shows offer cards
    const displayList = filteredList.map((item) =>
    {
        return (
            <OfferItem item={ item } />
        )
    })

    //fades page in
    useEffect(() =>
    {
        gsap.from("#offersTitle", {duration: 1, opacity: 0, y: 10});
        gsap.from(".cardUl", {delay: .3, duration: 1, opacity: 0, y: 10});
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