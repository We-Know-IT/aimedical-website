import Head from "next/head";
import Header from "../components/general/Header_t";
import TwoColImg from "../components/general/start/TwoColImg_t";
import SoCommonThat from "../components/theraputic-area/SoCommonThat";
import ThreeTypesOfSkinCancer from "../components/theraputic-area/ThreeTypesOfSkinCancer";

export default function TheraputicArea() {
  return (
    <>
      <Head>
        <title>AI Medical | Theraputic Area </title>
        <meta
          name="description"
          content="Information about the theraputic area that AI Medical is operating within."
        />
      </Head>
      <Header
        imageUrl="/images/dermalyser/header.png"
        title="Theraputic Area"
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
          image="theraputic-area/sprint_track.png"
        />
      </main>
    </>
  );
}
