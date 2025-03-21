import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

function LeftSection() {
  return (
    <>
      <aside className="info-container w-[25rem] h-[59rem] py-8 z-0 fixed top-[3rem]  left-[10rem] flex flex-col items-center justify-between   bg-white shadow-lg  rounded-lg  ">
        <div className="flex flex-col justify-center items-center">
          <div className="img-container z-30  shadow-lg  rounded-lg   bg-black-900 h-[15rem] w-[15rem] ">
            <img
              id="my_img"
              // src="/src/assets/portfolio_img1.jpg"
              alt="image"
              className="bg-blue-300 h-[15rem] w-[15rem] rounded-lg  "
            ></img>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center ">
            Pooja Sihag
          </h2>
        </div>
        <nav className=" text-black  ">
          <div className="max-w-7xl mx-auto ">
            <ul className="flex flex-col  space-y-4">
              <li>
                <Button
                  variant="outline"
                  aria-label="Login with Google"
                  size="icon"
                  className="w-[6rem]    hover:bg-sky-700 hover:text-white  transition   shadow-lg shadow-sky-800  rounded-lg text-gray-800 border-sky-700"
                >
                  <IoHome
                    size={16}
                    className="flex gap-[2rem] "
                    aria-hidden="true"
                  />
                  Home
                </Button>
                {/* <a href="#" className="hover:underline">Home</a> */}
              </li>
              <li>
                <Button
                  variant="outline"
                  aria-label="Login with Google"
                  size="icon"
                  className="w-[6rem]    hover:bg-sky-700 hover:text-white  transition   shadow-lg shadow-sky-800  rounded-lg text-gray-800 border-sky-700"
                >
                  <GrCircleInformation size={16} aria-hidden="true" />
                  About
                </Button>
                {/* <a href="#" className="hover:underline">About</a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:underline">Projects</a> */}

                <Button
                  variant="outline"
                  aria-label="Login with Google"
                  size="icon"
                  className="w-[6rem]    hover:bg-sky-700 hover:text-white  transition   shadow-lg shadow-sky-800  rounded-lg text-gray-800 border-sky-700"
                >
                  <GoProjectSymlink size={16} aria-hidden="true" />
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant="outline"
                  aria-label="Login with Facebook"
                  size="icon"
                  className="w-[6rem]    hover:bg-sky-700 hover:text-white  transition   shadow-lg shadow-sky-800  rounded-lg text-gray-800 border-sky-700"
                >
                  <RiContactsLine size={16} aria-hidden="true" />
                  Contact
                </Button>

                {/* <a href="#" className="hover:underline">Contact</a> */}
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center gap-4  ">
          <div className="flex flex-row  justify-center gap-4  ">
            <Button
              variant="outline"
              aria-label="Linkedn"
              size="icon"
              className="shadow-sky-500 cursor-pointer rounded-lg shadow-md"
              onClick={() =>
                window.open("https://www.linkedin.com/in/pooja-sihag-a25b5330b", "_blank")
              }
            >
              <FaLinkedin size={16} aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              aria-label="GitHub"
              size="icon"
              className="shadow-sky-500 cursor-pointer rounded-lg shadow-md"
              onClick={() =>
                window.open("https://github.com/poojasihag", "_blank")
              }
            >
              <FaGithub size={16} aria-hidden="true" />
            </Button>
          </div>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center w-max bg-white hover:text-gray-100 px-4 py-2 transition text-sm hover:bg-sky-500 text-gray-800 shadow-sky-500 rounded-lg shadow-md"
          >
            <HiDownload className="mr-2  " />
            Download Resume
          </a>
          <div className=" mt-2 text-center text-gray-700">
            <a href="mailto:notifypoojasihag@gmail.com">
              📧 Email: notifypoojasihag@gmail.com
            </a>
            <p>📍 Location: Fatehabad, Haryana</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default LeftSection;
