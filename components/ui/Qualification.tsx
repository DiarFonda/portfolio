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
import { Timeline, Events, Event } from "vertical-timeline-component-react";

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

const customTheme = {
  borderDotColor: "#ffffff",
  descriptionColor: "#e0dcdc",
  dotColor: "#d0cdc4",
  eventColor: "#965500",
  lineColor: "#d0cdc4",
  subtitleColor: "#008631",
  titleColor: "#00e160",
  yearColor: "#405b73",
};

const Qualification = ({ isListView }: { isListView?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
      }}
      className="flex flex-col"
    >
      {!isListView ? (
        <Carousel>
          <CarouselContent>
            {resume.map((exp) => (
              <CarouselItem key={exp.id}>
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
                      {exp.pointOne && (
                        <li key={exp.pointOne}>{parse(exp.pointOne)}</li>
                      )}
                      {exp.pointTwo && (
                        <li key={exp.pointTwo}>{parse(exp.pointTwo)}</li>
                      )}
                      {exp.pointThree && (
                        <li key={exp.pointThree}>{parse(exp.pointThree)}</li>
                      )}
                      {exp.pointFour && (
                        <li key={exp.pointFour}>{parse(exp.pointFour)}</li>
                      )}
                      {exp.pointFive && (
                        <li key={exp.pointFive}>{parse(exp.pointFive)}</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      ) : (
        <div>
          <Timeline
            lang="en"
            theme={customTheme}
            dateFormat="only-number"
            collapse
            withoutDay
          >
            <Events
              title="Front End Developer"
              subtitle="PBC Academy"
              endDate="2023/01/01"
              startDate="2022/09/01"
              active={false}
            >
              <Event
                title="Lorem Ipsum"
                description={[
                  "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                  "Is simply dummy text of the printing and typesetting industry.",
                ]}
              />
            </Events>
            <Events
              title="Software Developer"
              subtitle="Pabau Clinic Software"
              startDate="2020/12/02"
              active
              defaultClosed
            >
              <Event
                title="Lorem Ipsum"
                description={[
                  "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                  "Is simply dummy text of the printing and typesetting industry.",
                ]}
              />
            </Events>
          </Timeline>
        </div>
      )}
    </motion.div>
  );
};

export default Qualification;
