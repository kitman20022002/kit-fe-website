import axios from "axios";
import configuration from "../config/config";

export const getAboutMe = async (data) => {
  let res = await axios.get(
    configuration.api.admin_backend_api + "/types/website/about"
  );
  return res.data;
};

export const getEducation = async (data) => {
  let res = await axios.get(
    configuration.api.admin_backend_api + "/types/website/education"
  );
  return res.data;
};

export const getIntro = async (data) => {
  let res = await axios.get(
    configuration.api.admin_backend_api + "/types/website/intro"
  );
  return res.data;
};

export const getExperience = async (data) => {
  let res = await axios.get(
    configuration.api.admin_backend_api + "/experience?total=3"
  );
  return res.data;
};

export const getServerUp = async () => {
  axios.get(configuration.api.admin_backend_api + "/up").catch(() => {
    return;
  });
};

export const getSkillsServerUp = async () => {
  axios.get(configuration.api.skills_backend_api + "/up").catch(() => {
    return;
  });
};

export const getBlog = async () => {
  return axios.get(configuration.api.skills_backend_api + "/website/blogs");
};
