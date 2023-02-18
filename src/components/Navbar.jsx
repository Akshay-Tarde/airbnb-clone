import React from "react";
import logo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav className="nav container">
            <img src={logo} alt="AirBnB logo"/>
        </nav>
    )
}