import Head from "next/head";
import Header from "../components/general/header";

export default function Research() {
  return (
    <>
      <Head>
        <title>AI Medical | Research</title>
        <meta
          name="description"
          content="Information about AI medical research"
        />
      </Head>
      <Header
        imageUrl="/images/research-header.png"
        title="Research"
        text="A collection of our research and third party research relevant to us"
      />
    </>
  );
}
