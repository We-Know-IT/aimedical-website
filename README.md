# AI Medical

A company website for AI Medical

## Tech stack

The project is built with [Next.js](https://nextjs.org/).
[Tailwind CSS](https://tailwindcss.com/) is used for styling.
[Strapi](https://strapi.io/) is used as CMS for blogs and news.

The project is deployed on AWS in production and we use render.com during development. See more in [Deploy](##Deploy).

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

### Deployed

A strapi server is deployed at [render](render.com) and served on
[strapi service](https://aimedical-strapi.onrender.com/). The first time requesting the site 
can be slow since render will shut down inactive services. It can take up to 30 seconds for it to restart.

Navigate to the [admin panel](https://aimedical-strapi.onrender.com/admin)
to edit the added data.

To run the website with the hosted strapi server go to /strap to edit the url and then start the website with the following command:
```
npm run dev
```

## Deploy

### Production

The Next.js web application is deployed on AWS Amplify. 

The Strapi backend is deployed on AWS according to the design below.

![image](https://user-images.githubusercontent.com/48758319/222985802-71df690f-86c1-42c4-9019-23b7dd069212.png)


### During development

The website was hosted on render.com during development for demos and to
get feedback from customer.

## Data

### Employees
The data for employees are stored staticly in JSON file located at [data/employees.json](/data/employees.json) and the corresponding images are stored in [public/images/employees](/public/images/employees).

### Posts
The posts are stored in Strapi.
