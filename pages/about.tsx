import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Background from "../components/about/Background";
import Team from "../components/about/Team";
import Header from "../components/general/header";
const fs = require("fs").promises;

export type Employee = {
  name: string;
  title: string;
  image: string;
  description: string;
  linkedInLink: string;
};

export default function About({
  employees,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>AI Medical | About </title>
        <meta name="description" content="Information about AI Medical" />
      </Head>
      <Header
        imageUrl="/images/about/header.png"
        title="About us"
        text={
          <p className="relative mb-6 whitespace-pre-wrap text-lg font-bold text-on-primary lg:w-1/2 lg:text-2xl">
            We are dedicated to developing AI powered diagnostic solutions that
            enable frontline healthcare practitioners to make easier, faster and
            more reliable diagnoses for their patients.
          </p>
        }
      />
      <main>
        <Background />
        <Team employees={employees} />
      </main>
    </>
  );
}

const isEmployeeType = (val: any) => {
  return (
    val.name && val.title && val.image && val.description && val.linkedInLink
  );
};

const isValidJsonEmployeeData = (json: any) => {
  if (!json.every) {
    return false;
  }

  return json.every((el: any) => isEmployeeType(el));
};

export const getStaticProps: GetStaticProps<{
  employees: Employee[];
}> = async () => {
  const file = await fs.readFile("./data/employees.json");

  if (file) {
    const json = JSON.parse(file);

    if (!isValidJsonEmployeeData(json)) {
      return {
        props: { employees: [] },
      };
    }

    return {
      props: { employees: json as Employee[] },
    };
  }

  return {
    props: { employees: [] },
  };
};
