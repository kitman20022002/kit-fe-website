import { MdNaturePeople, MdQuestionAnswer, MdBook } from "react-icons/md";
import configuration from '../config/config';

export const introData = {
  twitter: "https://twitter.com/kitman_yiu",
  linkedIn: "https://www.linkedin.com/in/kitman-yiu/",
  facebook: "https://twitter.com/kitman_yiu",
  github: "https://github.com/kitman20022002",
  title: "Full Stack Developer",
  status: "Available",
  location: "Sydney, Australia",
  email: "kitmanwork@gmail.com",
  website: "https://www.kitmanyiu.com",
  skills: "https://skills.kitmanyiu.com",
  cv_pdf: configuration.api.admin_backend_api + "/resume/pdf",
  cv_docs: configuration.api.admin_backend_api + "/resume/docx",
};

export const icons = {
  communicator: <MdNaturePeople />,
  solver: <MdQuestionAnswer />,
  learner: <MdBook />,
};

export const aboutData = [
  {
    icon: "communicator",
    title: "Communicator",
    content:
      "Strong communicator, adept at sharing ideas and information clearly and concisely with team members.",
  },
  {
    icon: "solver",
    title: "Problem-Solver",
    content:
      "Regularly recognized for creative solutions simply challenging problems",
  },
  {
    icon: "learner",
    title: "Learner",
    content:
      "Engaged in peer learning initiatives, both as a mentor and a mentee, to foster a culture of knowledge-sharing within the team.",
  },
];
