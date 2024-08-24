import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import React from "react";

export const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Pabau Clinic Software",
    description:
      "em ipsum dolor sit amet consectetur adipisicing elit. Et, magnam repellendus repudiandae alias excepturi neque minima nobis sequi quisquam laborum.",
    stack: [
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "GraphQl" },
      { name: "PostgresSql" },
    ],
    image: "/assets/work/pabau.avif",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Front End",
    title: "Portfolio",
    description:
      "Created a personal portfolio to showcase my front-end skills, utilizing Next.js, Tailwind CSS, and shadcn UI components to deliver a sleek, responsive, and interactive user experience",
    stack: [
      { name: "NextJs" },
      { name: "Tailwind" },
      { name: "ShadCn" },
      { name: "Resend" },
    ],
    image: `/assets/work/portfolio.png`,
    image2: "/assets/work/darkportfolio.png",
    live: "diarfonda.com",
    github: "https://github.com/DiarFonda/portfolio",
  },
  {
    num: "03",
    category: "",
    title: "SOON",
    description:
      "Contributed to the development of Pabau, where I played a key role in building and optimizing software solutions using a full-stack approach with React, Next.js, and Node.js, while ensuring code quality and scalability through Nx monorepo architecture and Bitbucket pipelines.",
    stack: [],
    image: `/assets/projectssdark.png`,
    image2: "/assets/projectss.png",
    live: "",
    github: "",
  },
];

export const resume = [
  {
    id: 1,
    title: "Software Developer",
    date: "dec 2022 - Present",
    startDate: "12/1/2022",
    company: "Pabau Clinic Software",
    pointOne: `   <p className="listItem">
                        Engineered full-stack solutions using <b>NextJs</b> for the front end and <b>NodeJs/NestJs</b> for the back end.
                      </p>`,
    pointTwo: `<p className="listItem">
                        Designed and managed database schemas and queries with <b>Prisma</b>, interacting with <b>MySQL</b> and <b>PostgreSQL</b> databases.
                      </p>`,
    pointThree: ` <p className="listItem">
                        Automated deployment processes and enhanced code reliability through CI/CD pipelines configured in <b>Bitbucket</b>
                      </p>`,
    pointFour: `  <p className="listItem">
                      Led the implementation of monorepo architecture using <b>Nx</b> and configured <b>Bitbucket pipelines</b>, enhancing automated deployment processes.
                      </p>`,
    pointFive: `  <p className="listItem">
                        Ensured robust application performance by conducting end-to-end (e2e) testing with <b>Cypress</b> and <b>Playwright</b>, along with unit testing using <b>Jest</b>.
                      </p>`,
  },
];

export const education = [
  {
    id: 1,
    title: "Coming soon",
    date: "",
    startDate: "",
    company: "",
    pointOne: ``,
    pointTwo: ``,
    pointThree: ``,
    pointFour: ``,
    pointFive: ``,
  },
];

const customTheme = (theme: string) => {
  const themes = {
    borderDotColor: `${theme === "dark" ? "#f4f4f4" : "#1c1c22"} `,
    descriptionColor: "#e0dcdc",
    dotColor: "#d0cdc4",
    eventColor: "#965500",
    lineColor: "#d0cdc4",
    subtitleColor: "#008631",
    titleColor: "#00e160",
    yearColor: "#405b73",
  };
  return themes;
};

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const socials = [
  {
    icon: React.createElement(Linkedin),
    name: "Linkedin",
    href: "https://www.linkedin.com/in/diar-fonda-5aa1a6299/",
  },
  {
    icon: React.createElement(Github),
    name: "Github",
    href: "https://github.com/DiarFonda",
  },
  {
    icon: React.createElement(Instagram),
    name: "Instagram",
    href: "https://www.instagram.com/fonda_diar/",
  },
  {
    icon: React.createElement(Mail),
    name: "Gmail",
    href: "https://mail.google.com/mail/?to=diarfondaa@gmail.com",
  },
];

// todo types
export const skills = [
  {
    id: 1,
    title: "Typescript",
    icon: "typescript",
    width: 100,
    class: "shadow-lg",
    type: "frontend",
    percentage: 90,
  },
  {
    id: 2,
    title: "ReactJs",
    icon: "react",
    width: 100,
    class: "shadow-lg",
    type: "frontend",
    percentage: 90,
  },
  {
    id: 3,
    title: "NextJs",
    icon: "next",
    width: 100,
    class: "shadow-lg",
    type: "frontend",
    percentage: 90,
  },
  {
    id: 4,
    title: "Vue",
    icon: "vue",
    width: 100,
    class: "shadow-lg",
    type: "frontend",
    percentage: 60,
  },
  {
    id: 5,
    title: "Tailwind",
    icon: "tailwind",
    width: 80,
    class: "mx-auto h-[50px]",
    type: "frontend",
    percentage: 90,
  },
  {
    id: 6,
    title: "NodeJs",
    icon: "node",
    width: 83,
    class: "",
    type: "backend",
    percentage: 80,
  },
  {
    id: 7,
    title: "NestJs",
    icon: "nest",
    width: 100,
    class: "shadow-lg",
    type: "backend",
    percentage: 75,
  },
  {
    id: 8,
    title: "Go",
    icon: "Go",
    width: 100,
    class: "shadow-lg",
    type: "backend",
    percentage: 30,
  },
  {
    id: 9,
    title: "Prisma",
    icon: "prisma",
    width: 100,
    class: "shadow-lg",
    type: "backend",
    percentage: 80,
  },
  {
    id: 10,
    title: "GraphQl",
    icon: "graphql",
    width: 100,
    class: "shadow-lg",
    type: "backend",
    percentage: 85,
  },
  {
    id: 11,
    title: "MySql",
    icon: "mysql",
    width: 100,
    class: "shadow-lg",
    type: "database",
    percentage: 75,
  },
  {
    id: 12,
    title: "PostgreSql",
    icon: "postgresql",
    width: 100,
    class: "shadow-lg",
    type: "database",
    percentage: 75,
  },
  {
    id: 13,
    title: "Mongo",
    icon: "mongo",
    width: 100,
    class: "shadow-lg",
    type: "database",
    percentage: 75,
  },
  {
    id: 14,
    title: "Jest",
    icon: "jest",
    width: 100,
    class: "shadow-lg",
    type: "test",
    percentage: 90,
  },
  {
    id: 15,
    title: "Playwright",
    icon: "playwright",
    width: 100,
    class: "shadow-lg",
    type: "test",
    percentage: 75,
  },
  {
    id: 16,
    title: "Docker",
    icon: "docker",
    width: 100,
    class: "shadow-lg",
    type: "devops",
    percentage: 70,
  },
  {
    id: 17,
    title: "Kubernetes",
    icon: "kubernetes",
    width: 100,
    class: "shadow-lg",
    type: "devops",
    percentage: 60,
  },
  {
    id: 18,
    title: "Bitbucket",
    icon: "bitbucket",
    width: 100,
    class: "shadow-lg",
    type: "devops",
    percentage: 80,
  },
  {
    id: 19,
    title: "Cypress",
    icon: "cypress",
    width: 100,
    class: "shadow-lg",
    type: "test",
    percentage: 85,
  },
  {
    id: 20,
    title: "AWS",
    icon: "aws",
    width: 100,
    class: "shadow-lg",
    type: "devops",
    percentage: 30,
  },
];
