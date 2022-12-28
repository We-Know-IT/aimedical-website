import Head from "next/head";
import Advantages from "../components/dermalyser/Advantages";
import DiagnosticsEmpowered from "../components/dermalyser/DiagnosticsEmpowered";
import HowItWorks from "../components/dermalyser/HowItWorks";
import Performance from "../components/dermalyser/Performance";
import Header from "../components/general/header";

export default function Dermalyser() {
  return (
    <>
      <Head>
        <title>AI Medical | Dermalyser </title>
        <meta
          name="description"
          content="Information about dermalyser from AI Medical"
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
