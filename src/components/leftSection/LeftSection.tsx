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
    <aside className="info-container w-full md:w-[20rem] lg:w-[25rem] h-screen md:h-[59rem] py-8 z-0 fixed md:top-[3rem] top-0 left-0 md:left-[5rem] md:ml-[8rem] flex flex-col items-center justify-between bg-white shadow-lg md:rounded-lg overflow-auto">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="img-container z-30 shadow-lg rounded-lg bg-black-900 h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem]">
          <img
            id="my_img"
            alt="image"
            className="bg-blue-300 h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg object-cover"
          />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mt-2">
          Pooja Sihag
        </h2>
      </div>

      <nav className="text-black w-full mt-6 px-4">
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Button
              variant="outline"
              aria-label="Home"
              size="sm"
              className="w-[8rem] hover:bg-sky-700 hover:text-white transition shadow-lg shadow-sky-800 rounded-lg text-gray-800 border-sky-700"
            >
              <IoHome size={16} className="mr-2" />
              Home
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              aria-label="About"
              size="sm"
              className="w-[8rem] hover:bg-sky-700 hover:text-white transition shadow-lg shadow-sky-800 rounded-lg text-gray-800 border-sky-700"
            >
              <GrCircleInformation size={16} className="mr-2" />
              About
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              aria-label="Projects"
              size="sm"
              className="w-[8rem] hover:bg-sky-700 hover:text-white transition shadow-lg shadow-sky-800 rounded-lg text-gray-800 border-sky-700"
            >
              <GoProjectSymlink size={16} className="mr-2" />
              Projects
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              aria-label="Contact"
              size="sm"
              className="w-[8rem] hover:bg-sky-700 hover:text-white transition shadow-lg shadow-sky-800 rounded-lg text-gray-800 border-sky-700"
            >
              <RiContactsLine size={16} className="mr-2" />
              Contact
            </Button>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            aria-label="LinkedIn"
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
          className="inline-flex items-center bg-white hover:text-gray-100 px-4 py-2 transition text-sm hover:bg-sky-500 text-gray-800 shadow-sky-500 rounded-lg shadow-md"
        >
          <HiDownload className="mr-2" />
          Download Resume
        </a>

        <div className="text-center text-gray-700 text-sm">
          <a href="mailto:notifypoojasihag@gmail.com">
            📧 Email: notifypoojasihag@gmail.com
          </a>
          <p>📍 Location: Fatehabad, Haryana</p>
        </div>
      </div>
    </aside>
  );
}

export default LeftSection;
