"use client";
import Resume from "@/components/Resume";
// temporary WIP

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [listView, setListView] = useState(false);
  return (
    <div className="container flex flex-col items-center ">
      <div className="self-end mr-20 mt-14">
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
      <Resume />
      <h1 className="font-bold mt-16 text-2xl lg:text-2xl leading-[1.1]">
        My <span className="text-accent font-semibold">Skills</span>
      </h1>

      <div className="container flex flex-wrap">
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex  dark:bg-primary-darker justify-center rounded-md border-accent shadow-lg">
            <Image
              src="/assets/typescript.png"
              alt=""
              width={100}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">Typescript</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex  dark:bg-primary-darker justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/node.png"
              alt=""
              width={83}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">NodeJs</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/react.png"
              alt=""
              width={100}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">ReactJs</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/nest.png"
              alt=""
              width={100}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">NestJs</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/graphql.png"
              alt=""
              width={100}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">Graphql</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/prisma.png"
              alt=""
              width={100}
              height={10}
              className="shadow-lg"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">Prisma</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex flex-col justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/tailwind.png"
              alt=""
              width={80}
              height={10}
              className=" h-[50px] mx-auto"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">PostgreSQL</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-14 h-14 mx-4 lg:mx-12 mt-6 lg:w-24 lg:h-24 border-2 flex flex-col justify-center rounded-md  border-accent shadow-lg">
            <Image
              src="/assets/tailwind.png"
              alt=""
              width={80}
              height={10}
              className=" h-[50px] shadow-lg mx-auto"
            />
          </div>
          <h1 className="mx-auto font-bold text-base mt-2">PostgreSQL</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
