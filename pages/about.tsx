import Head from "next/head";
import Background from "../components/about/Background";
import Team from "../components/about/Team";
import Header from "../components/general/header";

export default function About() {
  return (
    <>
      <Head>
        <title>AI Medical | About </title>
        <meta name="description" content="Information about AI Medical" />
      </Head>
      <Header
        imageUrl="/images/about/header.png"
        title="About us"
        text={
          <p className="relative mb-6 whitespace-pre-wrap text-2xl font-normal text-on-primary lg:text-5xl">
            We are dedicated to developing AI powered diagnostic solutions that
            enable frontline healthcare practitioners to make easier, faster and
            more reliable diagnoses for their patients.
          </p>
        }
      />
      <main>
        <Background />
        <Team />
      </main>
    </>
  );
}
