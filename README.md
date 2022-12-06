# AI Medical

A company website for AI Medical

## Tech stack

The project is built with [Next.js](https://nextjs.org/).
[Tailwind CSS](https://tailwindcss.com/) is used for styling.
[Strapi](https://strapi.io/) is used as CMS for blogs and news.

The project is deployed on AWS in production and we use render.com during development. See more in [Deploy](##Deploy).

## Development

### Locally

    To run the project locally you first need to configure and start a postgreSQL database and the strapi server:

    - Download the [aimedical-strapi repository](https://github.com/We-Know-IT/aimedical-strapi).
    - Make sure that you have postgreSQL installed on your computer and create a database and user to access it.
    - Update /config/database.ts in the strapi project.

    After this is set up you can start the strapi server by running the following command in the root of the project:

    ````
    npm run develop
    ````

    Finally start the website by using the following command in the root of this project:

    ````
    npm run dev
    ````

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    See further details about the strapi server in the [aimedical-strapi repository](https://github.com/We-Know-IT/aimedical-strapi).

### Deployed on development servers

## Deploy

### Production

The final website is deployed on AWS according to design below.
TODO: add image and adjust later.

### During development

The website is hosted on render.com during development for demos and to
get feedback from customer.
TODO: add image and adjust later.
