# AI Medical

A company website for AI Medical

## Tech stack

The project is built with [Next.js](https://nextjs.org/).
[Tailwind CSS](https://tailwindcss.com/) is used for styling.
[Strapi](https://strapi.io/) is used as CMS for blogs and news.

The project is deployed on AWS and Vercel.

## Development

### Local

To run the project locally you first need to configure and start a postgreSQL database and the strapi server:

- Download the [aimedical-strapi repository](https://github.com/We-Know-IT/aimedical-strapi).
- Make sure that you have postgreSQL installed on your computer and create a database and user to access it.
- Update /config/database.ts in the strapi project.

After this is set up you can start the strapi server by running the following command in the root of the project:

```
npm run develop
```

Finally start the website by using the following command in the root of this project:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

See further details about the strapi server in the [aimedical-strapi repository](https://github.com/We-Know-IT/aimedical-strapi).

### Staging Environment

A strapi server is deployed at [render](render.com) and served on
[strapi service](https://aimedical-strapi.onrender.com/). The first time requesting the site
can be slow since render will shut down inactive services. It can take up to 30 seconds for it to restart.

Navigate to the [admin panel](https://aimedical-strapi.onrender.com/admin)
to edit the added data.

To run the website with the hosted strapi server go to /strap to edit the url and then start the website with the following command:

```
npm run dev
```

## Deployment

### Production

The Next.js web application is deployed on Vercel. It can be reached at [aimedtech.com](https://aimedtech.com)

The Strapi backend is deployed on AWS according to the design below. It can be reached at [https://api.aimedtech.com/admin](https://api.aimedtech.com/admin)

<img width="756" alt="image" src="https://github.com/We-Know-IT/aimedical-website/assets/48758319/fa660aae-1b59-4a5d-923b-27e1a1c6b7c6">

## Data

### Employees

The data for employees are stored staticly in a JSON file located at [data/team.json](/data/team.json) and [data/board.json](/data/board.json). The corresponding images are stored in [public/images/employees](/public/images/employees).

### Posts

The posts are stored in Strapi.
