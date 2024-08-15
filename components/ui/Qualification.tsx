"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import parse from "html-react-parser";
import { motion } from "framer-motion";

const resume = [
  {
    id: 1,
    title: "Software Developer",
    date: "June 2023 - Aug 2024",
    company: "Pabau Clinic Software",
    pointOne: `   <p className="listItem">
                      Developed the product using <b>NextJs</b> and <b>NodeJs</b> frameworks
                    </p>`,
    pointTwo: `<p className="listItem">
                      Managed monorepo architecture with <b>Nx</b>.
                    </p>`,
    pointThree: ` <p className="listItem">
                      Utilized <b>Graphql</b> for efficient data fetching.
                    </p>`,
    pointFour: `  <p className="listItem">
                      Interacted with <b>MySQL</b> and <b>PostgreSQL</b> databases using Prisma.
                    </p>`,
    pointFive: `  <p className="listItem">
                      Configure <b>CI/CD</b> pipelines using Bitbucket
                    </p>`,
  },
];

const Qualification = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
      }}
      className="flex flex-col"
    >
      <Carousel>
        <CarouselContent>
          {resume.map((exp) => (
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="text-accent">
                    {exp.date}
                  </CardDescription>
                  <CardDescription>{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="marker:text-accent list-disc ml-3">
                    {exp.pointOne && <li>{parse(exp.pointOne)}</li>}
                    {exp.pointTwo && <li>{parse(exp.pointTwo)}</li>}
                    {exp.pointThree && <li>{parse(exp.pointThree)}</li>}
                    {exp.pointFour && <li>{parse(exp.pointFour)}</li>}
                    {exp.pointFive && <li>{parse(exp.pointFive)}</li>}
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.div>
  );
};

export default Qualification;
