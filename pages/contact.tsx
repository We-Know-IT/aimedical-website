import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Background from "../components/about/Purpose";
import Team from "../components/about/Team";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import TwoColText from "../components/general/start/TwoColText";
import TwoColAbout from "../components/general/start/TwoColAbout";
import BookDemo from "../components/general/BookDemo";

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
          title="Header for contact page"
          description="Image for contact page"
          />
      </Head>
      <main className="pt-28">
       <TwoColText
           mobileOrder="right-first"
           text="Contact us for any questions or to book a demo"
           textClassName="!mb-4 mt-10 lg:mt-56 lg:pr-10 text-darkblue font-robotoFlex font-normal text-[40px] leading-[42px] flex items-end"

          video={{
            src: "/videos/instructionvideo.mp4",
            title: "AI Medical Dermalyser Demo",
            controls: false,
            autoPlay: false,
            muted: true,
            poster: "/images/home/header.png"
          }}></TwoColText>
          <div className="container">
          <BookDemo
            title="Contact form"
            description="You’re welcome to contact us for any questions you might have and we’ll contact you within 48 hours."
            theme={{
              containerBg: "bg-beige-dark",
              titleColor: "text-darkblue-page-active",
              textColor: "text-darkblue",
              inputBg: "bg-beige",
              inputText: "text-darkblue",
              inputPlaceholder: "placeholder-gray-500",
              buttonIntent: "transparentblue"
            }
          }
          />
          </div>
        <TwoColAbout
          title={
            <>
              About us
            </>
          }
          text="Our purpose is to support frontline healthcare in Skin Cancer diagnosis. Dermalyser helps healthcare professionals deliver faster and more reliable skin cancer assessments, reducing uncertainty and improving outcomes for patients."
          image={{
            src: "home/header.png",
            alt: "Dermalyser",
            quality: 100,
          }}></TwoColAbout>
      </main>
    </>
  );
}




export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
