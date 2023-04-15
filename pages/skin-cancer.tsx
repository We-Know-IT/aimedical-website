import Head from "next/head";
import Header from "../components/general/Header";
import TwoColImg from "../components/general/start/TwoColImg";
import SoCommonThat from "../components/skin-cancer/SoCommonThat";
import ThreeTypesOfSkinCancer from "../components/skin-cancer/ThreeTypesOfSkinCancer";
import HeroSection from "../components/general/HeroSection";

export default function SkinCancer() {
  return (
    <>
      <Head>
        <title>AI Medical | Skin Cancer </title>
        <meta
          name="description"
          content="Information about the therapuetic area that AI Medical is operating within."
        />
      </Head>
      <Header
        imageUrl="/images/dermalyser/header.png"
        title="Skin Cancer"
        text="Skin cancer is one of the most common cancers in the world, accounting for nearly half of all cancers"
      />
      <main className="flex flex-col">
        <SoCommonThat />
        <ThreeTypesOfSkinCancer />
        <TwoColImg
          title="It's a race against time"
          text="The most common skin cancers are non-melanoma cancers - basal cell and squamous cell carcinomas. They are treatable and seldom fatal. Malignant melanoma is the third and generally the most serious form of skin cancer as it tends to spread (metastasize) quickly throughout the body."
          actionButton={{
            text: "With us you can win the race",
            href: "/dermalyser",
          }}
          image={{
            src: "skin-cancer/sprint_track.png",
            alt: "Sprint track",
          }}
        />
        <HeroSection
          title={"Not all skin cancers are made equal"}
          image={{
            src: "/images/dermalyser/header.png",
            alt: "Dermalyser being used on a patient",
          }}
          subTitle={`Driving Fast, Accurate Diagnosis\nfor All Skin Cancers`}
          button={{ text: "Learn About Dermalyser", href: "/dermalyser" }}
        />
      </main>
    </>
  );
}
