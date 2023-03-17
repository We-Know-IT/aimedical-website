import Strapi from "strapi-sdk-js";

// https://aimedical-strapi.onrender.com/
//127.0.0.1:1337
let url = "http://127.0.0.1:1337";
// let url = "http://16.170.92.57/";

if (process.env.NODE_ENV === "production") {
  url = "https://16.170.92.57/";
}

export const strapi = new Strapi({
  url: url,
});
