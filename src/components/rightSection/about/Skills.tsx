import { Github } from "lucide-react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const data = [
  {
    title: "HTML",
    icon: (
      <AiOutlineHtml5 className="h-full w-full text-neutral-600 dark:text-neutral-900" />
    ),
    href: "#",
  },
  {
    title: "CSS",
    icon: (
      <DiCss3 className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "JavaScript",
    icon: (
      <FaNodeJs className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "React.js",
    icon: (
      <IoLogoReact className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "FireBase",
    icon: (
      <SiFirebase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: " Vercel",
    icon: (
      <SiVercel className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <Github className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export function Skills() {
  return (
    <>
     
      <div className="md:mt-[-3rem] ml-[6.3rem] mt-[3rem] md:scale-[1.2] scale-[0.8] md:ml-[49rem] mb-6  left-1/2 max-w-full -translate-x-1/2  ">
        <Dock className="items-end pb-3 bg-sky-500  hover:overflow-visible">
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </>
  );
}
