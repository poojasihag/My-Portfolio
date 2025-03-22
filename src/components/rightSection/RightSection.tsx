import HeroSection from "./heroSection/HeroSection";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

function RightSection() {
  return (
    <div className=" w-full h-auto md:h-[90vh] mt-0 sm:w-[60vw]  md:overflow-auto z-0 md:absolute md:top-[3rem]   md:left-[45rem] bg-white shadow-lg  rounded-lg   ">
      {/* Hero COMPONENT*/}
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
