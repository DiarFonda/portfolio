"use client";
// todo: will use context api to manage list view

import ResumeContent from "@/components/Resume";
import Skills from "@/components/Skills";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/lib/data";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

const Resume = () => {
  const [listView, setListView] = useState(false);
  return (
    <div className="container flex flex-col items-center mb-6">
      <div className="self-end lg:mr-20 mt-14">
        <Tabs>
          <TabsList>
            <TabsTrigger
              variant={listView ? "default" : "focused"}
              value="square"
              onClick={() => setListView(false)}
            >
              <LayoutGrid />
            </TabsTrigger>
            <TabsTrigger
              variant={listView ? "focused" : "default"}
              value="list"
              onClick={() => setListView(true)}
            >
              <List />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="container flex flex-col items-center">
        <h1 className="font-bold mt-0 text-2xl lg:text-2xl leading-[1.1]">
          My <span className="text-accent font-semibold">Resume</span>
        </h1>
        <ResumeContent isListView={listView} />
      </div>
      <h1 className="font-bold mt-16 text-2xl lg:text-2xl leading-[1.1]">
        My <span className="text-accent font-semibold">Skills</span>
      </h1>

      <div className="container flex flex-wrap">
        <Skills skills={skills} listView={listView} />
      </div>
    </div>
  );
};

export default Resume;
