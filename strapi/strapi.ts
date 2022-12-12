import Strapi from "strapi-sdk-js";

// https://aimedical-strapi.onrender.com/
// http://127.0.0.1:1337

export const mediaBaseUrl = "https://aimedical-strapi.onrender.com";

export const strapi = new Strapi({
  url: "https://aimedical-strapi.onrender.com",
});
