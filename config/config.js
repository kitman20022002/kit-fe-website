module.exports = {
  api: {
    backend_api:
      process.env.EMAIL_API ||
      "https://k80xjne6bd.execute-api.ap-southeast-2.amazonaws.com",
    admin_backend_api:
      process.env.ADMIN_API ||
      "https://kit-be-admin-production.up.railway.app/api/v1",
    skills_backend_api:
      process.env.SKILLS_API ||
      "https://kit-be-skills-production.up.railway.app/api/v1",
    skills_frontend: "https://skills.kitmanyiu.com/",
  },
};
