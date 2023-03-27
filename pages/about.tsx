import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Background from "../components/about/Background";
import Team from "../components/about/Team";
import Header from "../components/general/Header";
const fs = require("fs").promises;

export type Employee = {
  name: string;
  title: string;
  image: string;
  description: string;
  linkedInLink: string;
};

export default function About({
  team,
  board,
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
        text="We are dedicated to developing AI powered diagnostic solutions that enable frontline healthcare practitioners to make easier, faster and more reliable diagnoses for their patients."
      />
      <main>
        <Background />
        <Team
          employees={team}
          title="Meet our team "
          text="We are a cross disciplinary team of computer scientists,
              clinicians and entrepreneurs united by our passion to develop
              solutions that harness the power of AI which enable healthcare
              providers to provide easier, faster and more cost effective
              diagnosis."
        />
        <Team employees={board} title="Meet our board " />
      </main>
    </>
  );
}

const isEmployeeType = (val: any) => {
  const isValid =
    val.name && val.title && val.image && val.description && val.linkedInLink;
  if (!isValid) {
    console.error("Invalid employee data: ", val);
    console.log("Please ensure all employees have the following fields: ", {
      name: "string",
      title: "string",
      image: "string",
      description: "string",
      linkedInLink: "string",
    });
  }
  return isValid;
};

const isValidJsonEmployeeData = (json: any) => {
  if (!json.every) {
    return false;
  }

  return json.every((el: any) => isEmployeeType(el));
};

export const getStaticProps: GetStaticProps<{
  team: Employee[];
  board: Employee[];
}> = async () => {
  const teamFile = await fs.readFile("./data/team.json");
  const boardFile = await fs.readFile("./data/board.json");

  let board: Employee[] = [];
  let team: Employee[] = [];

  if (teamFile) {
    const json = JSON.parse(teamFile);
    if (isValidJsonEmployeeData(json)) {
      team = json as Employee[];
    }
  }

  if (boardFile) {
    const json = JSON.parse(boardFile);

    if (isValidJsonEmployeeData(json)) {
      board = json as Employee[];
    }
  }

  return {
    props: { board, team },
  };
};
