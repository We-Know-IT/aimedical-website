import Head from "next/head";
import Header from "../components/general/header";
import TwoColText from "../components/general/start/twoColText";
import TwoColImg from "../components/general/start/twoColImg";
import Image from "next/image";

export default function Home() {
  const buttonHeader = {
    text: "Learn more",
    onClick: () => {
      return null;
    },
  };

  const buttonSection1 = {
    text: "Read more",
    onClick: () => {
      return null;
    },
  };

  const buttonSection2 = {
    text: "Learn more",
    onClick: () => {
      return null;
    },
  };

  const columnText = [
    {
      title: "Faster Diagnoses",
      text: "Our decision support tool enables diagnostic decisions in seconds, avoiding long waiting times and reducing anxiety for patients",
      img: "Spedometer.png",
    },
    {
      title: "Cost Efficient",
      text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels",
      img: "Money.png",
    },
    {
      title: "Improved Performance",
      text: "AI powered by a database comprised of 100,000 images of skin lesions ensures fewer melanomas missed, and fewer incorrect diagnoses",
      img: "Accuracy.png",
    },
  ];

  return (
    <>
      <Head>
        <title>AI Medical</title>
        <meta name="description" content="AI Medical" />
      </Head>
      <Header
        text="Driving fast and accurate diagnosis for all skin cancers - All through AI"
        actionButton={buttonHeader}
      />
      <TwoColText
        title="AI Powered Diagnostic Solutions"
        text="We are dedicated to developing AI powered diagnostic solutions that enable frontline healthcare practitioners to make easier, faster and more reliable diagnoses for their patients. Our first product, Dermalyser, is a clinically validated decision support tool for the diagnosis of all skin cancers."
        actionButton={buttonSection1}
        list={columnText}></TwoColText>
      <TwoColImg
        title="Our Mission"
        text="Our mission is to support healthcare providers with AI powered diagnostic solutions so that no patient should die due to delay or misdiagnosis of a condition."
        actionButton={buttonSection2}
        image="section.png"></TwoColImg>
      <div className="w- h-2/6 gap-10 bg-gray-100 flex flex-col justify-center items-center p-8">
        <h2 className="text-blue-100 font-bold text-4xl text-center border-b-4 border-white">
          Our Partners
        </h2>
        <div className="w-4/6 h-1/3 flex justify-evenly">
          <div
            className="w-1/5 h-full"
            style={{
              backgroundImage: "url('/images/AI_Sweden_Logo_Black.png');",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          <div
            className="w-1/5 h-full"
            style={{
              backgroundImage:
                "url('/images/Karolinska_Institutet_Logo_Black.png');",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          <div
            className="w-1/5 h-full"
            style={{
              backgroundImage:
                "url('/images/Linkoping _University_Black.png');",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          <div
            className="w-1/5 h-full"
            style={{
              backgroundImage: "url('/images/AIDA.png');",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          <div
            className="w-1/5 h-full"
            style={{
              backgroundImage:
                "url('/images/Stockholm_University_Horizontal.png');",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          {/*<img
            className="max-h-1/2"
            alt="AI Sweden"
            src="/images/AI_Sweden_Logo_Black.png"
          />
          <img
            className="max-h-1/2"
            alt="Karolinska Institutet"
            src="/images/Karolinska_Institutet_Logo_Black.png"
          />
          <img
            className="h-1/2"
            alt="Linköping University"
            src="/images/Linkoping _University_Black.png"
          />
          <img className="h-1/2" alt="AIDA" src="/images/AIDA.png" />
          <img
            className="h-1/2"
            alt="Stockholm University"
            src="/images/Stockholm_University_Horizontal.png"
  />*/}
        </div>
      </div>
    </>
  );
}
