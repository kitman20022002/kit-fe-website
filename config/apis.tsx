import { SiCsswizardry, SiJavascript, SiMysql } from "react-icons/si";
import {
  FaAws,
  FaBitbucket,
  FaJava,
  FaJira,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import { GrServer } from "react-icons/gr";

export const FRONTEND = "front-end";
export const BACKEND = "back-end";
export const DEVOPS = "devops";
export const OTHERS = "others";
interface StringMap {
  [key: string]: any;
}

const color = {
  red: "red",
  blue: "blue",
  purple: "purple",
  orange: "orange",
};
export const homeColorTheme: StringMap = {
  "#ef3239": {
    borderColor: `border-${color.red}`,
    bgColor: `background-${color.red}`,
    lightColor: `light-${color.red}`,
    priColor: `pri-${color.red}`,
    bgColorBefore: `background-${color.red}--before`,
  },
  "#01bbbe": {
    borderColor: `border-${color.blue}`,
    bgColor: `background-${color.blue}`,
    lightColor: `light-${color.blue}`,
    priColor: `pri-${color.blue}`,
    bgColorBefore: `background-${color.blue}--before`,
  },
  "#281483": {
    borderColor: `border-${color.purple}`,
    bgColor: `background-${color.purple}`,
    lightColor: `light-${color.purple}`,
    priColor: `pri-${color.purple}`,
    bgColorBefore: `background-${color.purple}--before`,
  },
  "#f97211": {
    borderColor: `border-${color.orange}`,
    bgColor: `background-${color.orange}`,
    lightColor: `light-${color.orange}`,
    priColor: `pri-${color.orange}`,
    bgColorBefore: `background-${color.orange}--before`,
  },
};

const configuration = {
  api: {
    kitmanapis: process.env.KITMANYIU_API || "http://localhost:8000/api/v1",
  },
  categories: [
    {
      slug: FRONTEND,
      content: "React, JS, CSS...etc",
      icon: <FaReact />,
      themeColor: "#ef3239",
      item: [
        {
          slug: "react",
          language: "React",
          icon: <FaReact />,
        },
        {
          slug: "react",
          language: "JS(Typescript)",
          icon: <SiJavascript />,
        },
        {
          slug: "react",
          language: "CSS",
          icon: <SiCsswizardry />,
        },
      ],
    },
    {
      slug: BACKEND,
      icon: <FaJava />,
      content: "JAVA, MYSQL, NODE...etc",
      themeColor: "#01bbbe",
      item: [
        {
          slug: "java",
          language: "JAVA",
          icon: <FaJava />,
          themeColor: "#6E4E9B",
        },
        {
          slug: "mysql",
          language: "MYSQL",
          icon: <SiMysql />,
          themeColor: "#C8C8C8",
        },
        {
          slug: "node",
          language: "NODE",
          icon: <FaNodeJs />,
          themeColor: "#FFCC00",
        },
      ],
    },
    {
      slug: DEVOPS,
      icon: <FaAws />,
      content: "EC2, S3, ALB...etc",
      themeColor: "#281483",
      item: [
        {
          slug: "aws",
          language: "AWS",
          icon: <FaAws />,
        },
        {
          slug: "ec2",
          language: "EC2",
          icon: <GrServer />,
        },
        {
          slug: "alb",
          language: "ALB",
          icon: <BiCodeBlock />,
        },
      ],
    },
    {
      slug: OTHERS,
      icon: <FaJira />,
      content: "JIRA, Bitbucket, SCRUM...etc",
      themeColor: "#f97211",
      item: [
        {
          slug: "jira",
          language: "JIRA",
          icon: <FaJira />,
        },
        {
          slug: "bitbucket",
          language: "Bitbucket",
          icon: <FaBitbucket />,
        },
        {
          slug: "scrum",
          language: "SCRUM",
          icon: <DiScrum />,
        },
      ],
    },
  ],
};

export default configuration;
