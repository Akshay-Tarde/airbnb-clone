import React from "react"
// import star from "../../public/assets/star-1.png";


export default function Card(props) {
    return (
        <div className="card">
            <img src={`./assets/${props.img}`} className="card-image" />
            {props.openSpots || <p className="sold-out">SOLD OUT</p>}
            <div className="card-stats">
                <img src="./assets/star-1.png" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}