import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import Qualification from "./ui/Qualification";
import { resume, education } from "@/lib/data";

const ResumeContent = ({ isListView }: { isListView?: boolean }) => {
  return (
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
          <Qualification isListView={isListView} resume={resume} />
        </TabsContent>
        <TabsContent value="education">
          <Qualification isListView={isListView} education={education} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeContent;
