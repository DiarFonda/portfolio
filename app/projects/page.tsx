"use client";

import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Github, MoveUpRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTheme } from "next-themes";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Pabau Clinic Software",
    description:
      "em ipsum dolor sit amet consectetur adipisicing elit. Et, magnam repellendus repudiandae alias excepturi neque minima nobis sequi quisquam laborum.",
    stack: [
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "GraphQl" },
      { name: "PostgresSql" },
    ],
    image: "/assets/work/pabau.avif",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Front End",
    title: "Portfolio",
    description:
      "Created a personal portfolio to showcase my front-end skills, utilizing Next.js, Tailwind CSS, and shadcn UI components to deliver a sleek, responsive, and interactive user experience",
    stack: [
      { name: "NextJs" },
      { name: "Tailwind" },
      { name: "ShadCn" },
      { name: "Resend" },
    ],
    image: `/assets/work/portfolio.png`,
    image2: "/assets/work/darkportfolio.png",
    live: "diarfonda.com",
    github: "https://github.com/DiarFonda/portfolio",
  },
  {
    num: "03",
    category: "",
    title: "SOON",
    description:
      "Contributed to the development of Pabau, where I played a key role in building and optimizing software solutions using a full-stack approach with React, Next.js, and Node.js, while ensuring code quality and scalability through Nx monorepo architecture and Bitbucket pipelines.",
    stack: [],
    image: `/assets/projectssdark.png`,
    image2: "/assets/projectss.png",
    live: "",
    github: "",
  },
];

const page = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { systemTheme } = useTheme();
  const baba = localStorage.getItem("theme");
  const [project, setProject] = useState(projects[0]);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);

      setProject(projects[api.selectedScrollSnap()]);
    });
  }, [api]);
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:cap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>
              <h2 className="text-[22px] font-normal leading-none text-primary dark:text-secondary group-hover:text-accent transition-all duration-500 capitalise">
                {project.title}
              </h2>
              <h2 className="text-[42px] font-bold leading-none text-primary dark:text-secondary group-hover:text-accent transition-all duration-500 capitalise">
                {project.category ? project.category + " Project" : null}
              </h2>
              <p className="text-primary dark:text-secondary-darker">
                {project.description}
              </p>
              <ul className="flex gap-[2px] lg:gap-2">
                {project.stack.map((skill, index) => {
                  return (
                    <li
                      className="text-base lg:text-xl text-accent"
                      key={skill.name}
                    >
                      {skill.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-primary dark:border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-slate-900 dark:bg-white/5 flex justify-center items-center group">
                        <MoveUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project {!project.live && "(not available)"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-slate-900 dark:bg-white/5 flex justify-center items-center group">
                        <Github className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Github Repo {!project.github && "(not available)"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[80%] lg:w-[50%] ">
            <Carousel setApi={setApi} className=" lg:h-[520px] lg:ml-16 mb-12">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.num} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                      <div className="relative w-full h-full">
                        <Image
                          src={String(
                            baba === "system"
                              ? systemTheme === "dark"
                                ? project.image
                                : project.image2
                              : baba === "dark"
                              ? project.image
                              : project.image2 || project.image
                          )}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
