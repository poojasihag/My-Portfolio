import React from "react";
import { Skills } from "./Skills";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";

function About() {
  return (
    <section id="about" className=" h-auto w-full  overflow-auto z-0  bg-white ">
      <div className="max-w-4xl md:ml-[12rem]">
        <h4 className="text-5xl font-bold text-gray-700  md:mt-[3rem] text-center ">
          About Me:
        </h4>

        <div className="max-w-3xl mx-auto px-4 py-10">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-sky-600">Pooja Sihag</span>, a
            frontend web developer with a love for creating engaging,
            user-friendly digital experiences. I believe that a great website
            isn’t just about how it looks—it’s about how it{" "}
            <span className="italic">feels</span> to use. That’s why I focus on
            building interfaces that are not only visually appealing but also
            intuitive and responsive.
            <br />
            <br />
            My journey into web development started with curiosity and quickly
            turned into a passion. I enjoy every step of the process—from
            brainstorming ideas to writing clean code and watching a concept
            come to life in the browser. Every project I work on is an
            opportunity to learn, improve, and push creative boundaries.
            <br />
            <br />
            What drives me is the ability to solve problems, bring ideas to
            life, and deliver experiences that leave a lasting impact. I’m
            always eager to explore new technologies, embrace challenges, and
            keep growing as a developer.
            <br />
            <br />
            <span className="font-medium">
              Let’s connect and create something meaningful together!
            </span>
          </p>
        </div>

        {/* Studies Section */}

        <div className=" w-full  mt-[6rem] md:ml-[5rem] ">
          <div className="flex items-center mb-8">
            <RiGraduationCapLine className="text-gray-900 w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Education</h1>
          </div>

          {/* Timeline Divider */}
          <div className="border-l-2 border-red-500 pl-6 ml-2 space-y-6">
            {/* Bachelor's Degree */}

            <div className="relative">
              <div className="absolute -left-5 top-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Bachelor of Arts (BA)
              </h3>
              <p className="text-gray-700">
                Completed from{" "}
                <span className="font-medium text-gray-900">
                  Women Government College, Hisar
                </span>{" "}
                under
                <span className="font-medium text-gray-900">
                  {" "}
                  Guru Jambheshwar University (GJU), Hisar
                </span>
                .
              </p>
              <p className="text-sm text-gray-600 mt-1">📅 2019 – 2023</p>
            </div>
            {/* 12th */}
            <div className="relative">
              <div className="absolute -left-5 top-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                12th Grade
              </h3>
              <p className="text-gray-700">
                Completed from{" "}
                <span className="font-medium text-gray-900">
                  S.B.S. Public School, Fatehabad
                </span>
                .
              </p>
              <p className="text-sm text-gray-600 mt-1">📅 2018 – 2019</p>
            </div>

            {/* 10th */}
            <div className="relative">
              <div className="absolute -left-5 top-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                10th Grade
              </h3>
              <p className="text-gray-700">
                Completed from{" "}
                <span className="font-medium text-gray-900">
                  Shanti Niketan High School, Hisar
                </span>
                .
              </p>
              <p className="text-sm text-gray-600 mt-1">📅 2016 – 2017</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex items-center mt-[3rem] md:mt-[6rem] md:ml-[17rem]">
            <HiOutlineLightBulb className="text-gray-900 w-8 h-8 md:mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Skills I have:</h1>
          </div>

      <Skills />
    </section>
  );
}

export default About;
