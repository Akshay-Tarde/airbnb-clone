import React from "react"
// import star from "../../public/assets/star-1.png";


export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === 'Online') {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <img src={`./assets/${props.item.coverImg}`} className="card-image" />
            { badgeText && <p className="sold-out">{badgeText}</p>}
            <div className="card-stats">
                <img src="./assets/star-1.png" className="card-star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}