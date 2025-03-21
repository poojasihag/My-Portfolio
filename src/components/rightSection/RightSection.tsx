import React from "react";
import HeroSection from "./heroSection/HeroSection";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

function RightSection() {
  return (
    <div className="  h-[90vh] w-[60vw]  overflow-auto z-0 absolute top-[3rem]  left-[40rem] bg-white shadow-lg  rounded-lg   ">
      <HeroSection />
      {/* About COMPONENT*/}
      <About />
      {/* PROJECTS COMPONENT */}
      <Projects />

      {/* CONTACT COMPONENT */}
      <Contact />
    </div>
  );
}

export default RightSection;
