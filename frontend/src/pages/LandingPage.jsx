import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import ChiE from "../components/landing/ChiE";
import Metodo from "../components/landing/Metodo";
import Patologie from "../components/landing/Patologie";
import Struttura from "../components/landing/Struttura";
import Gallery from "../components/landing/Gallery";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#1a2942]">
      <Navbar />
      <Hero />
      <ChiE />
      <Metodo />
      <Patologie />
      <Struttura />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;
