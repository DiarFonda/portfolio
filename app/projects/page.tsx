"use client";

import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Github, MoveUpRight } from "lucide-react";
import dynamic from "next/dynamic";
const DynamicCarousel = dynamic(
  () => import("@/components/ui/ProjectCarousel"),
  {
    ssr: false,
  }
);
import { projects } from "@/lib/data";
import { CarouselApi } from "@/components/ui/carousel";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [project, setProject] = useState(projects[0]);
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
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
                {project.stack.map((skill: any, index: number) => {
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
          <DynamicCarousel setApi={setApi} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
