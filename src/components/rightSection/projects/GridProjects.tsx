import { GrReactjs } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandTailwind } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { BentoCard, BentoGrid } from "@/components/ui/ProjectsGrid";

const features = [
  {
    Icon: GrReactjs,
    name: "Realtime Chat App",
    description:
      "A real-time chat application built with React, Firebase, and Tailwind CSS. Features user authentication, emojis, image sharing, and more.",
    href: "https://react-firebase-chat-app-ten.vercel.app/",
    cta: "Visit Now",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BiLogoTypescript,
    name: "Task-Buddy",
    description:
      "Task Buddy demonstrates my ability to design and implement full-stack web applications with a focus on real-time functionality and user experience",
    href: "https://task-buddy-silk.vercel.app",
    cta: "Visit Now",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: IoLogoCss3,
    name: "EDucational_Website",
    description:
      "EDucational WebSite showcases my skills in front-end development, UI/Ux design, and creating static web applications that are both functional and visually appealing.",
    href: "https://poojasihag.github.io/EDucational_webapp/",
    cta: "Visit Now",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: TbBrandTailwind,
    name: "Ochi",
    description:
      "Built with advanced animations, smooth scrolling, and responsive design.",
    href: "https://main--ochiclonep.netlify.app/",
    cta: "Visit Now",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: SiJavascript,
    name: "Random Password Generator",
    description:
      "Generate strong, random passwords with customizable options for enhanced security.",
    href: "https://poojasihag.github.io/all-projects/R-Password-Gen/index.html",
    cta: "Visit Now",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function GridProjects() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { GridProjects };
