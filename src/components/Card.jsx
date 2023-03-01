import React from "react"
import katieImg from '../assets/katie-zaferes.png';
import star from "../assets/star-1.png";


export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={katieImg} className="card-image" />
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}