import React from "react";
import Navbarmain from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbarmain/>
       <Hero/>
      <section id="home" style={{ height: "100vh", paddingTop: "70px" }}>
        <h1 className="text-center pt-5">Welcome to My Portfolio</h1>
      </section>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;