import { BackgroundPaths } from "@/components/ui/LineBg";
import { motion } from "framer-motion";
// import { FaArrowUpLong } from "react-icons/fa6";
function HeroSection() {
  return (
    <>
      <section className=" h-auto w-full  overflow-auto z-0  bg-white  ">
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
                  <div className="masker ">
                    <div className="w-fit flex items-end overflow-hidden ">
                      {index === 1 && (
                        <motion.img
                          initial={{ width: 0 }}
                          animate={{ width: "9vw" }}
                          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                          className=" w-[9vw] h-[5.7vw] relative top-[0.3vw]  bg-red-500"
                          src="/src/assets/design_img.jpg"
                        ></motion.img>
                      )}
                      <h1 className="pt-[0vw] -mb-[1vw] uppercase text-[8vw] leading-[.94]  font-['Founders_Grotesk_X-Condensed'] font-bold">
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
