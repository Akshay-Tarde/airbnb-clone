import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="main-container">
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
          <section className="card-section container">
            <Card />
          </section>
      </main>
    </div>
  )
}