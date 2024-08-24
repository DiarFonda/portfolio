"use client";

import Image from "next/image";
import { Progress } from "./progress";

const SkillsProgress = ({ skill }: { skill: any }) => {
  return (
    <div className="flex lg:ml-24 mt-4 items-center lg:items-center justify-evenly w-full">
      <div className="flex flex-col items-start lg:items-center mb-4 w-28">
        <Image
          src={`/assets/${skill.icon}.png`}
          alt=""
          width={24}
          height={24}
          priority
        />
        <p className="">{skill.title}</p>
      </div>

      <Progress value={skill.percentage} className="w-44 lg:w-96 lg:ml-12" />
    </div>
  );
};

export default SkillsProgress;
