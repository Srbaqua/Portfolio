import React from "react";
import Navbarmain from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About"
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <>
      <Navbarmain/>
       <Hero/>
      <section id="home" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1 className="text-center pt-5">Welcome to My Portfolio</h1>
      </section>
      <About/>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
      <SpeedInsights />
    </>
  );
}

export default App;