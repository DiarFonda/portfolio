import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import Qualification from "./ui/Qualification";

const Resume = () => {
  return (
    <div className="container flex flex-col items-center">
      <h1 className="font-bold mt-16 text-2xl lg:text-2xl leading-[1.1]">
        My <span className="text-accent font-semibold">Resume</span>
      </h1>
      <div className="mt-14">
        <Tabs
          defaultValue="experience"
          className="w-[400px] flex flex-col justify-center"
        >
          <TabsList className="flex justify-around">
            <TabsTrigger value="experience">
              <Briefcase className="mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2" /> Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <Qualification />
          </TabsContent>
          <TabsContent value="education">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
