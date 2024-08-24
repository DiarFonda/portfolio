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
// import { Timeline, Events, Event } from "vertical-timeline-component-react";

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

const Qualification = ({
  isListView,
  resume,
  education,
}: {
  isListView?: boolean;
  resume?: any;
  education?: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
      }}
      className="flex flex-col"
    >
      {/* {!isListView ? ( */}
      <Carousel>
        <CarouselContent>
          {(resume || education).map((exp) => (
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
      {/* ) todo fix this : ( */}
      {/* <div>
          <Timeline
            lang="en"
            theme={customTheme}
            dateFormat="only-number"
            collapse
            withoutDay
          >
            {resume.map((exp) => (
              <Events
                key={exp.id}
                title={exp.company}
                subtitle={exp.title}
                startDate={exp.startDate}
                active
                defaultClosed
              >
                <Event
                  title="description"
                  description={[
                    parse(exp.pointOne),
                    parse(exp.pointTwo),
                    parse(exp.pointThree),
                    parse(exp.pointFour),
                    parse(exp.pointFive),
                  ]}
                />
              </Events>
            ))}
          </Timeline>
        </div> */}
      {/* )} */}
    </motion.div>
  );
};

export default Qualification;
