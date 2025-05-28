import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Partners from "./Partners";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;