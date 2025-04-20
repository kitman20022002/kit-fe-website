import axios from "axios";
import configuration from "../config/apis";

const skills = "skills";
// eslint-disable-next-line import/prefer-default-export
export const getType = (slug: string) =>
  axios.get(`${configuration.api.kitmanapis}/types/${slug}`);

export const getSkills = () =>
  axios.get(`${configuration.api.kitmanapis}/types`);

export const getPost = (category: string, stack: string, slug: string) =>
  axios.get(
    `${configuration.api.kitmanapis}/category/${category}/stack/${stack}/types/${slug}`
  );

export const getPostSiteMap = () =>
  axios.get(`${configuration.api.kitmanapis}/posts/sitemap`);
