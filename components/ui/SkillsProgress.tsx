"use client";

import Image from "next/image";
import { Progress } from "./progress";

const SkillsProgress = ({ skill }) => {
  return (
    <div className="flex ml-24 mt-4 items-center">
      <div className="flex flex-col items-center mb-4">
        <Image
          src={`/assets/prisma.png`}
          alt=""
          width={24}
          height={24}
          priority
        />
        <p className="">Prisma</p>
      </div>

      <Progress value={50} className="w-96 ml-12" />
    </div>
  );
};

export default SkillsProgress;
