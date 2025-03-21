import React from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Realtime Chat App",
    description:
      "A real-time chat application built with React, Firebase, and Tailwind CSS. Features user authentication, emojis, image sharing, and more.",
    link: "https://react-firebase-chat-app-ten.vercel.app/",
  },
  {
    title: "Task-Buddy",
    description:
      "Task Buddy demonstrates my ability to design and implement full-stack web applications with a focus on real-time functionality and user experience.",
    link: "https://task-buddy-silk.vercel.app",
  },
  {
    title: "EDucational_Website",
    description:
      "EDucational WebSite showcases my skills in front-end development, UI/Ux design, and creating static web applications that are both functional and visually appealing.",
    link: "https://poojasihag.github.io/EDucational_webapp/",
  },
];

function Projects() {
  return (
    <section className="  h-auto w-full  overflow-auto z-0  bg-white  ">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-5xl font-bold text-gray-700 mb-[5rem] mt-[5rem] text-center ">
          My Projects:
        </h4>
        <div className="grid gap-8 md:grid-cols-2 pl-[5rem] mt-[10rem]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition hover:shadow-sky-600"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  px-4 py-2  hover:bg-sky-700 hover:text-white  transition  bg-white shadow-lg shadow-sky-800  rounded-lg text-gray-800 border-yellow-700-2"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
