import React from "react"
import katieImg from '../assets/katie-zaferes.png';
import star from "../assets/star-1.png";


export default function Card() {
    return (
        <div className="card">
            <img src={katieImg} className="card-image" />
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>5.0   </span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}