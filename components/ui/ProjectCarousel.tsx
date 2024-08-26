"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { projects } from "@/lib/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ProjectCarousel = ({ setApi }: any) => {
  const [localTheme, setLocalTheme] = useState("");

  const { systemTheme } = useTheme();

  const isDarkMode =
    localTheme === "system" ? systemTheme === "dark" : localTheme === "dark";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setLocalTheme(storedTheme || "light");
  }, []);

  return (
    <div className="mx-auto w-[80%] lg:w-[50%] ">
      <Carousel setApi={setApi} className=" lg:h-[520px] lg:ml-16 mb-12">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.num} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                <div className="relative w-full h-full">
                  <Image
                    src={String(
                      isDarkMode
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
