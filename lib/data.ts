import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import React from "react";

export const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Pabau Clinic Software",
    description:
      "Contributed to the development of Pabau, where I played a key role in building and optimizing software solutions using a full-stack approach with React, Next.js, and Node.js, while ensuring code quality and scalability through Nx monorepo architecture and Bitbucket pipelines.",
    stack: [
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "GraphQl" },
      { name: "PostgresSql" },
    ],
    image: "/assets/work/pabau.png",
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
    description: "More Projects will be posted here soon",
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
    title: "Software Engineer",
    date: "Jun 2023 - Present",
    startDate: "12/1/2022",
    company: "Pabau Clinic Software",
    pointOne: `   <p className="listItem">
                         Implemented and optimized CI/CD pipelines using <b>Bitbucket Pipelines</b>, streamlining the deployment process and ensuring high-quality code delivery.
                      </p>`,
    pointTwo: `<p className="listItem">
                         Configured custom <b>ESLint rules</b>, enhancing code consistency and improving the overall developer experience across the team.
                      </p>`,
    pointThree: ` <p className="listItem">
                       Developed and maintained scalable backend services using <b>NestJS</b>, contributing to the architecture and functionality of key application features.
                      </p>`,
    pointFour: `  <p className="listItem">
                       Managed and optimized <b>PostgreSQL</b> and <b>MySQL</b> databases, ensuring data integrity, performance, and scalability to meet business requirements
                      </p>`,
    pointFive: `  <p className="listItem">
                        Integrated monitoring and error-tracking tools such as <b>New Relic apm</b> and <b>Sentry</b> to enhance system reliability and observability.
                      </p>`,
  },
  {
    id: 2,
    title: "Front End Developer ",
    date: "Jan 2023 - June 2023",
    startDate: "12/1/2022",
    company: "Pabau Clinic Software",
    pointOne: `   <p className="listItem">
                         Built and optimized dynamic, high-performance web applications using <b>NextJs</b>, leveraging server-side rendering and static site generation for enhanced user experience.
                      </p>`,
    pointTwo: `<p className="listItem">
                         Utilized <b>GraphQL</b> APIs and <b>Prisma</b> for efficient data querying and management, enabling flexible and precise interactions between the front end and the backend
                      </p>`,
    pointThree: ` <p className="listItem">
                       Employed <b>Zustand</b> for state management, streamlining application state handling and improving overall performance and maintainability
                      </p>`,
    pointFour: `  <p className="listItem">
                       Designed and implemented visually appealing and responsive user interfaces using <b>Ant Design</b>, <b>Less</b>, and <b>Styled Components</b>, ensuring a consistent and scalable design system.
                      </p>`,
    pointFive: `  <p className="listItem">
                        Developed robust unit tests using <b>Jest</b> and implemented end-to-end testing, transitioning from <b>Cypress</b> to <b>Playwright</b>, to ensure reliability and stability of applications.

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
