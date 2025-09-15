# Aimedtech website

## Tech stack

The project is built with [Next.js](https://nextjs.org/).
[Tailwind CSS](https://tailwindcss.com/) is used for styling.
[Strapi](https://strapi.io/) is used as CMS for blogs and news. The rest of the data on the website is static.

The project is deployed on AWS and Vercel.

### Local Development

### Overview

The project is split into two parts:

- **Frontend**: A Next.js project
- **Backend**: A StrapiCMS project

Both parts can be found in separate repositories on aimedtech’s gitlab. 

### Prerequisites

Ensure you have Node.js installed on your computer. Download it from [nodejs.org](https://nodejs.org) if necessary.

### Backend Setup

- **Clone** the AI Medical Strapi repository from gitlab.
- Ensure **PostgreSQL** is installed on your computer, then create a database and user.
- Create a `.env` file containing all variables used in `/config/*.ts`.
- Update `/config/database.ts` in the Strapi project to match your local database configuration or update the .env variables used by database config file.

### Image Upload Configuration

To upload images locally instead of to AWS S3:

- Refer to the Strapi upload documentation.
- Make necessary changes to `/config/plugins.ts` and `/config/middleware.ts`.

### Running Backend Locally

Clone the repository and install dependencies in the repository's root with the following command:

```
npm install
```

Start the Strapi server by running

```
npm run develop
```

Open [http://localhost:1337/admin](http://localhost:1337/admin) to view the Strapi admin panel.

### Frontend Setup

**Clone** the frontend repository (this repository) from gitlab.

Install dependencies with `npm install` in the root of the project.

```
npm install
```

Start the server using `npm run dev`.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

**Note**: Without the backend running locally on `localhost:1337`, fetching blogs and news will result in an error.

#### Contact Form Configuration

To use the contact form, setup an email server by defining environment variables in a `.env` file in the root of the project. This setup will use the Nodemailer library to send emails. See the `.env.example` file for required variables, including Google Recaptcha.

## Production deployment

The Next.js web application is deployed on Vercel, which was last setup with an account made by Jonatan Helanason. The production website can be reached at can be reached at [aimedtech.com](https://aimedtech.com). The deployment is set up to automatically deploy the website when changes are pushed to the main branch of the repository. Each branch is also deployed to a unique URL on Vercel which can be used for testing.

The Strapi backend is deployed on AWS according to the design below. The production environment for the backend can be found here [https://api.aimedtech.com/admin](https://api.aimedtech.com/admin). The deployment is set up to rebuild and deploy when changes are pushed to the main branch of the repository using webhooks as described in the [Strapi deployment guide](https://docs.strapi.io/dev-docs/deployment/amazon-aws).

The deployment setup of the backend follows the guidelines in the [Strapi deployment guide](https://docs.strapi.io/dev-docs/deployment/amazon-aws) which essentially means that the Strapi server is deployed on an EC2 instance (linux server) with an RDS database and an S3 bucket for media files.

<img width="756" alt="image" src="https://i.ibb.co/6H4BvjH/266033419-fa660aae-1b59-4a5d-923b-27e1a1c6b7c6.png">
