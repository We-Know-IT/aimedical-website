import Head from "next/head";
import Header from "../components/general/header";
import TwoColText from "../components/general/start/twoColText";
import TwoColImg from "../components/general/start/twoColImg";
import Image from "next/image";

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

const partners = [
  {
    src: "AI_Sweden_Logo_Black.png",
    alt: "AI Sweden Logo Black",
    height: 100,
    width: 200,
  },
  {
    src: "Karolinska_Institutet_Logo_Black.png",
    alt: "Karolinska Institutet Logo Black",
    height: 100,
    width: 200,
  },
  {
    src: "Linkoping_University_Black.png",
    alt: "Linköping University Logo Black",
    height: 100,
    width: 200,
  },
  {
    src: "AIDA.png",
    alt: "AIDA Logo",
    height: 100,
    width: 200,
  },
  {
    src: "Stockholm_University_Horizontal.png",
    alt: "Stockholm University Logo",
    height: 100,
    width: 200,
  },
];

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

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
        <meta name="description" content="AI Medical" />
      </Head>
      <Header
        imageUrl="/images/header.png"
        text={
          <p className="relative text-color-on-blue text-2xl lg:text-5xl font-normal whitespace-pre-wrap mb-6">
            {`Driving fast and accurate \ndiagnosis for all skin cancers - \n`}
            <span className="font-bold">All through AI</span>
          </p>
        }
        actionButton={buttonHeader}
        fullHeight={true}
      />
      <main>
        <TwoColText
          title="AI Powered Diagnostic Solutions"
          text="We are dedicated to developing AI powered diagnostic solutions that enable frontline healthcare practitioners to make easier, faster and more reliable diagnoses for their patients. Our first product, Dermalyser, is a clinically validated decision support tool for the diagnosis of all skin cancers."
          actionButton={buttonSection1}
          list={columnText}></TwoColText>
        <TwoColImg
          title="Our Mission"
          text="Our mission is to support healthcare providers with AI powered diagnostic solutions so that no patient should die due to delay or misdiagnosis of a condition."
          actionButton={buttonSection2}
          image="man_crossed_arms.jpeg"></TwoColImg>
        <section className="w-full bg-background-secondary flex flex-col items-center space-y-6 lg:space-y-12 py-24">
          <h3 className="text-blue-100 font-bold text-3xl text-center border-b-2 border-blue-100">
            Our Partners
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center space-x-20 lg:space-x-40">
            {partners.map((img) => (
              <li className="w-20 xl:w-32 bg-red-50">
                <Image
                  src={"/images/" + img.src}
                  alt={img.alt}
                  height={img.height}
                  width={img.width}
                  className=" w-[33vw] xl:w-auto h-auto"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
