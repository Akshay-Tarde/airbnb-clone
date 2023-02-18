import React from "react";
import img from "../assets/photo-grid.png";

export default function Hero() {
    return (
       <section className="hero container">
            <img className="photo-grid" src={img} alt="Photo grid"/>
            <h1 className="title">Online experiences</h1>
            <p className="subtitle">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
       </section>
    )
}