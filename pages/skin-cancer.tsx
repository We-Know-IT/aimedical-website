import Head from "next/head";
import Header from "../components/general/Header";
import SkinCancerPrevalence from "../components/skin-cancer/SkinCancerPrevalence";
import ThreeTypesOfSkinCancer from "../components/skin-cancer/ThreeTypesOfSkinCancer";
import HeroSection from "../components/general/HeroSection";
import MetaTags from "../components/general/seo/MetaTags";

export default function SkinCancer() {
  return (
    <>
      <Head>
        <title>AI Medical | Skin Cancer </title>
        <MetaTags
          image="/images/skin-cancer/header.jpg"
          title="Skin Cancer"
          description="Skin cancer is one of the most common cancers in the world, accounting for nearly half of all cancers."
        />
      </Head>
      <Header
        imageUrl="/images/skin-cancer/header.jpg"
        title="Skin Cancer"
        text="Skin cancer is one of the most common cancers in the world, accounting for nearly half of all cancers"
        imagePosition="center 15%"
      />
      <main className="flex flex-col">
        <SkinCancerPrevalence />
        <ThreeTypesOfSkinCancer />
        <HeroSection
          title={"Not all skin cancers are equal"}
          image={{
            src: "/images/dermalyser/header.jpg",
            alt: "Dermalyser being used on a patient",
            imagePosition: "75%",
          }}
          subTitle={`Driving Fast, Accurate Diagnosis`}
          button={{ text: "Learn more about Dermalyser", href: "/dermalyser" }}
        />
      </main>
    </>
  );
}
