import SkillsProgress from "./ui/SkillsProgress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const Skills = ({ skills, listView }: { skills: any; listView: boolean }) => {
  const feSkills = skills.filter((skill) => {
    return skill.type === "frontend";
  });
  const beSkills = skills.filter((skill) => {
    return skill.type === "backend";
  });
  const otherSkills = skills.filter((skill) => {
    return skill.type === "other";
  });

  return listView ? (
    <Tabs defaultValue="frontend" className="flex justify-center mt-14">
      <TabsList className="flex flex-col justify-between py-4 h-40 px-4 ">
        <TabsTrigger
          value="frontend"
          className="text-secondary data-[state=active]:text-accent"
        >
          Front End
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="education"
        >
          Back End
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="experience"
        >
          Other
        </TabsTrigger>
      </TabsList>
      <TabsContent value="frontend">
        <div className="flex flex-col">
          {feSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="education"></TabsContent>
    </Tabs>
  ) : (
    skills.map((skill) => (
      <div className="flex flex-col" key={skill.id}>
        <div
          className={`w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex ${
            skill.title === "Tailwind" && "flex-col"
          }  dark:bg-primary-darker justify-center rounded-md border-accent shadow-lg`}
        >
          <Image
            src={`/assets/${skill.icon}.png`}
            alt=""
            width={skill.width}
            height={10}
            priority
            className={skill.class}
          />
        </div>
        <h1 className="mx-auto font-bold text-base mt-2">{skill.title}</h1>
      </div>
    ))
  );
};

export default Skills;
