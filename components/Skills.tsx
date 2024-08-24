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
  const dbSkills = skills.filter((skill) => {
    return skill.type === "database";
  });
  const testSkills = skills.filter((skill) => {
    return skill.type === "test";
  });
  const devopsSkills = skills.filter((skill) => {
    return skill.type === "devops";
  });

  return listView ? (
    <Tabs
      defaultValue="frontend"
      className="flex flex-col lg:flex-row items-start justify-center mt-14"
    >
      <TabsList className="flex lg:flex-col justify-between py-3 lg:h-52 lg:items-start px-4 ">
        <TabsTrigger
          value="frontend"
          className="text-secondary data-[state=active]:text-accent"
        >
          Front End
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="backend"
        >
          Back End
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="database"
        >
          Database
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="test"
        >
          Testing
        </TabsTrigger>
        <TabsTrigger
          className="text-secondary data-[state=active]:text-accent"
          value="devops"
        >
          Devops
        </TabsTrigger>
      </TabsList>
      <TabsContent value="frontend">
        <div className="flex flex-col">
          {feSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="backend">
        <div className="flex flex-col">
          {beSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="database">
        <div className="flex flex-col">
          {dbSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="test">
        <div className="flex flex-col">
          {testSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="devops">
        <div className="flex flex-col">
          {devopsSkills.map((skill) => (
            <SkillsProgress skill={skill} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  ) : (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
      {skills.map((skill) => (
        <div
          className="flex flex-col items-center mx-4 lg:mx-12"
          key={skill.id}
        >
          <div
            className={`w-14 h-14 mt-6 lg:w-24 lg:h-24 border-2 flex ${
              skill.title === "Tailwind" && "flex-col"
            }  dark:bg-primary-darker justify-center rounded-md dark:border-slate-900 border-slate-300 shadow-lg`}
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
      ))}
    </div>
  );
};

export default Skills;
