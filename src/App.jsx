import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.jsx";

export default function App() {
  // console.log(data);
  // const data = data;
  const cardComponents = data.map( item => <Card key={item.id} item={item}
                                            />)
  return (
    <div className="main-container">
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
          <section className="card-section container">
            {cardComponents}
          </section>
      </main>
    </div>
  )
}