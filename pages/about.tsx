import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Background from "../components/about/Background";
import Team from "../components/about/Team";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
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
  advisoryBoard,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>AI Medical | About </title>
        <MetaTags
          image="/images/about/header.png"
          title="About us"
          description="We are dedicated to developing AI powered diagnostic solutions that enable frontline healthcare practitioners to make easier, faster and more reliable diagnoses for their patients."
        />
      </Head>
      <Header
        imageUrl="/images/about/header.png"
        imagePosition="60% 20%"
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
        <Team employees={advisoryBoard} title="Meet our advisory board " />
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
  advisoryBoard: Employee[];
}> = async () => {
  const teamFile = await fs.readFile("./data/team.json");
  const boardFile = await fs.readFile("./data/board.json");
  const adivsoryBoardFile = await fs.readFile("./data/advisory_board.json");

  let board: Employee[] = [];
  let team: Employee[] = [];
  let advisoryBoard: Employee[] = [];

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

  if (adivsoryBoardFile) {
    const json = JSON.parse(adivsoryBoardFile);
    if (isValidJsonEmployeeData(json)) {
      advisoryBoard = json as Employee[];
    }
  }

  return {
    props: { board, team, advisoryBoard },
  };
};
