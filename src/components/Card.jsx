import React from "react"
// import star from "../../public/assets/star-1.png";


export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.location === 'Online') {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <img src={`./assets/${props.img}`} className="card-image" />
            { badgeText && <p className="sold-out">{badgeText}</p>}
            <div className="card-stats">
                <img src="./assets/star-1.png" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}