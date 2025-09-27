import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Background from "../components/about/Purpose";
import Team from "../components/about/Team";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import TwoColText from "../components/general/start/TwoColText";
import TwoColAbout from "../components/general/start/TwoColAbout";
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
      <main className="pt-28">
      <TwoColText
          mobileOrder="right-first"
          text="We are doctors, scientists, and innovators united by one purpose, saving lives through earlier melanoma detection"
          textClassName="!mb-4 mt-10 lg:mt-32 lg:pr-10 text-darkblue font-robotoFlex font-normal text-[40px] leading-[42px]"

          video={{
            src: "/videos/instructionvideo.mp4",
            title: "AI Medical Dermalyser Demo",
            controls: false,
            autoPlay: false,
            muted: true,
            poster: "/images/home/header.png"
          }}></TwoColText>
        <Background 
          header="Our purpose"
          text="AI Medical Technology was founded by physicians, scientists, and innovators with a clear purpose: to support healthcare professionals in providing the best possible diagnosis for their patients. We understand the challenges doctors face in primary care, and our work is dedicated to creating solutions that strengthen their expertise and make daily practice safer and more efficient. For us, technology is not the end goal — it is a means to empower those who care for patients every day."
          />
        <TwoColAbout
          title="Meet Christoffer Ekström"
          text="Christoffer Ekström is one of the founders of AI Medical Technology and is the company's CEO and one of the board members. He is a serial entrepreneur and holds a Master's degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor's degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer."
          image={{
            src: "employees/Christoffer.png",
            alt: "Christoffer Ekström",
            quality: 100,
          }}
          leftColumnClassName="w-full h-full flex items-center justify-center p-0 pt-28 px-6 md:p-24 pb-0 md:pb-0"
          leftColumnImageClassName="w-full h-full md:max-h-xs object-cover md:object-contain rounded-lg"
        />
        <TwoColAbout
          title="Meet Panos Papachristou"
          text="Panos Papachristou is a co-founder of AI Medical Technology. He is a specialist physician in Family Medicine with a broad background from the fields of Biomedicine and Medicine. He holds a PhD from Karolinska Institutet where he is affiliated to continued research. Panos is a passionate serial house renovator."
          image={{
            src: "employees/Panos.png",
            alt: "Panos Papachristou",
            quality: 100,
          }}
          leftColumnClassName="w-full h-full flex items-center justify-center p-0 pt-28 px-6 md:p-24 pb-0 md:pb-0"
          leftColumnImageClassName="w-full h-full md:max-h-xs object-cover md:object-contain rounded-lg"
        />
        <Team
          employees={team}
          title="Meet our team"
        />
        <Team employees={board} title="Our board" />
        <Team employees={advisoryBoard} title="Advisory board " />
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
