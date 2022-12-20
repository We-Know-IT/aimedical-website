import Head from "next/head";
import Advantages from "../components/dermalyser/Advantages";
import DiagnosticsEmpowered from "../components/dermalyser/DiagnosticsEmpowered";
import How from "../components/dermalyser/How";
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
        text={
          <p className="relative mb-6 whitespace-pre-wrap text-2xl font-normal text-on-primary lg:text-5xl">
            {`Driving Fast, Accurate Diagnosis\n for all Skin Cancers`}
          </p>
        }
      />
      <main className="flex flex-col">
        <DiagnosticsEmpowered />
        <Performance />
        <Advantages />
        <How />
      </main>
    </>
  );
}
