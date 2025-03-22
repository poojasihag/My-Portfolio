import { GridProjects } from "./GridProjects";

function Projects() {
  return (
    <section
      id="projects"
      className="  h-auto w-full  overflow-auto z-0  bg-white  "
    >
      <div className="max-w-5xl mx-auto mb-2 ">
        <h4 className="text-5xl font-bold text-gray-700 mb-[5rem] mt-[5rem] text-center ">
          My Projects:
        </h4>
        <GridProjects />
      </div>
    </section>
  );
}

export default Projects;
