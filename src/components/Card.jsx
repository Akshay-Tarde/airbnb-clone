import React from "react"
// import star from "../../public/assets/star-1.png";


export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`./assets/${props.img}`} className="card-image" />
            <div className="card-stats">
                <img src="./star-1.png" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}