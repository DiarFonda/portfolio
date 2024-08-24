"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const HeroSection = () => {
  const { resolvedTheme, systemTheme } = useTheme();
  const baba = localStorage.getItem("theme");

  return (
    <div className="text-center lg:text-left">
      <h4>SOFTWARE DEVELOPER</h4>
      <h1 className="pt-5 font-semibold text-[48px] lg:text-[80px] leading-[1.1]">
        Hi I Am <br />
        <span className="text-accent bold">Diar Fonda</span>
      </h1>
      <p className="max-w-[520px] pt-7">
        I am a passionate software developer with expertise in JavaScript
        full-stack development, including various frontend and backend
        frameworks.
      </p>
      <Popover>
        <PopoverTrigger>
          <div className="flex flex-col lg:flex-row mt-8">
            <Button
              variant={
                baba === "system"
                  ? systemTheme === "dark"
                    ? "outline"
                    : "default"
                  : baba === "dark"
                  ? "outline"
                  : "default"
              }
              size="md"
              className="uppercase items-center gap-3"
            >
              <span>
                {/* todo: <a href={cv} download="name cv.pdf"> */}
                Download Cv
                {/* </a> */}
              </span>
              <Download />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-center items-center">
            CV will be posted soon
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HeroSection;
