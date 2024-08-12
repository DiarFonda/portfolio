import Qualification from "@/components/ui/Qualification";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase } from "lucide-react";

const page = () => {
  return (
    <div className="container flex flex-col items-center mt-16">
      <h1 className="font-bold text-2xl lg:text-2xl leading-[1.1]">
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

export default page;
