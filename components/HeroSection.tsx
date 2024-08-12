"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);
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
      <div className="flex flex-col lg:flex-row mt-8">
        <Button
          variant={`${resolvedTheme === "dark" ? "outline" : "default"}`}
          size="md"
          className="uppercase items-center gap-3"
        >
          <span>Download Cv</span>
          <Download />
        </Button>
        {/* yet to add the social media icons */}
      </div>
    </div>
  );
};

export default HeroSection;
