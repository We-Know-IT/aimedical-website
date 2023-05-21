import Head from "next/head";
import Header from "../components/general/Header";
import TwoColImg from "../components/general/start/TwoColImg";
import SoCommonThat from "../components/skin-cancer/SoCommonThat";
import ThreeTypesOfSkinCancer from "../components/skin-cancer/ThreeTypesOfSkinCancer";
import HeroSection from "../components/general/HeroSection";
import MetaTags from "../components/general/seo/MetaTags";

export default function SkinCancer() {
  return (
    <>
      <Head>
        <title>AI Medical | Skin Cancer </title>
        <MetaTags
          image="/images/dermalyser/header.png"
          title="Skin Cancer"
          description="Skin cancer is one of the most common cancers in the world, accounting for nearly half of all cancers."
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
        <HeroSection
          title={"Not all skin cancers are equal"}
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
