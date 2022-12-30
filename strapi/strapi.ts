import Strapi from "strapi-sdk-js";

// https://aimedical-strapi.onrender.com/
// http://127.0.0.1:1337
let url = "http://127.0.0.1:1337";

if (process.env.NODE_ENV === "production") {
  url = "https://aimedical-strapi.onrender.com/";
}

export const strapi = new Strapi({
  url: url,
});
