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
    text: "Contact Us To Learn More",
    onClick: () => {
      return null;
    },
  };

const partnerSrc = ["AI_Sweden_Logo_Black.png", "Karolinska_Institutet_Logo_Black.png", "Linkoping_University_Black.png", "AIDA.png", "Stockholm_University_Horizontal.png"]
const partners = [
  {
    src: "AI_Sweden_Logo_Black.png",
    alt: "AI Sweden Logo Black",
    height: 100,
    width: 200
  },
  {
    src: "Karolinska_Institutet_Logo_Black.png",
    alt: "Karolinska Institutet Logo Black",
    height: 100,
    width: 200
  },
  {
    src: "Linkoping_University_Black.png",
    alt: "Linköping University Logo Black",
    height: 100,
    width: 200
  },
  {
    src: "AIDA.png",
    alt: "AIDA Logo",
    height: 100,
    width: 200
  },
  {
    src: "Stockholm_University_Horizontal.png",
    alt: "Stockholm University Logo",
    height: 100,
    width: 200
  }
]

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
        imageUrl="/images/header.png"
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
        image="unsplash_pTrhfmj2jDA.png"></TwoColImg>
      <div className="w-full gap-10 bg-gray-100 flex flex-col items-center p-8 lg:justify-center lg:py-24">
        <h2 className="text-blue-100 font-bold text-3xl text-center border-b-2 border-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center xl:space-x-8">
            {partners.map(img => (<Image src={"/images/" + img.src} alt={img.alt} height={img.height} width={img.width}  className={"max-w-[33vw] object-contain object-center"}/>))}
        </div>
      </div>
    </>
  );
}
