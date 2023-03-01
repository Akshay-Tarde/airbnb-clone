import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katieImgFromApp from "./assets/katie-zaferes.png"
export default function App() {
  return (
    <div className="main-container">
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
          <section className="card-section container">
            <Card img={katieImgFromApp} rating={5.0} reviewCount={6} country="Australia" 
                  title="Life lessons with Katie Zaferes" price={136} />
          </section>
      </main>
    </div>
  )
}