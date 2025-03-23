import { BackgroundPaths } from "@/components/ui/LineBg";
import { motion } from "framer-motion";
import DesignImage from "./../../../assets/design_img.jpg";

function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className=" h-auto w-full   overflow-auto z-0  bg-white  "
      >
        <BackgroundPaths>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className=" bg-white-900 pt-1 "
          >
            <div className="textstucture text-sky-600  ">
              {["Code.", "Design.", "Create. "].map((item, index) => {
                return (
                  <div className="masker " key={index}>
                    <div className="w-fit flex items-end overflow-hidden ">
                      {index === 1 && (
                        <motion.img
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                          className="  w-7xl md:w-[9vw] sm:w-40 h-12 md:h-[5.7vw] relative top-[0.3vw]  bg-red-500"
                          src={DesignImage}
                        ></motion.img>
                      )}
                      <h1 className="pt-[0vw] -mb-[1vw] uppercase text-6xl sm:text-7xl md:text-[8vw] leading-[.94]  font-['Founders_Grotesk_X-Condensed'] font-bold">
                        {" "}
                        {item}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </BackgroundPaths>
      </section>
    </>
  );
}

export default HeroSection;
