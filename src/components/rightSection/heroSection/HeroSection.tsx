import { motion } from "framer-motion";
// import { FaArrowUpLong } from "react-icons/fa6";
function HeroSection() {
  return (
    <>
      
          <section className=" h-auto w-full  overflow-auto z-0  bg-white  ">
          <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className=" bg-white-900 pt-1 "
    >
      <div className="textstucture text-sky-600 mt-[10rem] ml-[6rem] mb-[20rem] ">
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
      {/* <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-lighter text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div> */}
    </div>
          </section>
       
    </>
  );
}

export default HeroSection;
