import Head from "next/head";
import Advantages from "../components/dermalyser/Advantages";
import DiagnosticsEmpowered from "../components/dermalyser/DiagnosticsEmpowered";
import HowItWorks from "../components/dermalyser/how-it-works/HowItWorks";
import Performance from "../components/dermalyser/Performance";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";

export default function Dermalyser() {
  return (
    <>
      <Head>
        <title>AI Medical | Dermalyser </title>
        <MetaTags
          image="/images/dermalyser/header.png"
          title="Dermalyser"
          description="Driving Fast, Accurate Diagnosis for all Skin Cancers"
        />
      </Head>
      <Header
        imageUrl="/images/dermalyser/header.png"
        title="Dermalyser"
        text="Driving Fast, Accurate Diagnosis for all Skin Cancers"
      />
      <main className="flex flex-col">
        <DiagnosticsEmpowered />
        <Performance />
        <Advantages />
        <HowItWorks />
      </main>
    </>
  );
}
