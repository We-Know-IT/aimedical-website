import Head from "next/head";
import Header from "../components/general/Header";
import TwoColText from "../components/general/start/TwoColText";
import TwoColImg from "../components/general/start/TwoColImg";
import Image from "next/image";
import HeroSection from "../components/general/HeroSection";
import MetaTags from "../components/general/seo/MetaTags";

const buttonHeader = {
  text: "Learn more",
  href: "#home-section1",
};

const buttonSection1 = {
  text: "Read more",
  href: "/dermalyser",
};

const buttonSection2 = {
  text: "Contact Us To Learn More",
  href: "#contact",
};

const partners = [
  {
    src: "home/partner_ai.svg",
    alt: "AI Sweden Logo Black",
    height: 100,
    width: 200,
    colSpan: "col-span-2",
    rowSpan: "row-start-3 row-end-3",
  },
  {
    src: "home/KI_digital_logotyp_positiv_RGB.svg",
    alt: "Karolinska Institutet Logo Plum",
    height: 100,
    width: 200,
    colSpan: "col-span-1",
    rowSpan: "row-start-2 row-end-2",
  },
  {
    src: "home/partner_liu.svg",
    alt: "Linköping University Logo Black",
    height: 100,
    width: 200,
    colSpan: "col-span-1",
    rowSpan: "row-start-1 row-end-1",
  },
  {
    src: "home/partner_aida.svg",
    alt: "AIDA Logo",
    height: 100,
    width: 200,
    colSpan: "col-start-2 col-end-2",
    rowSpan: "row-span-1",
  },
  {
    src: "home/partner_su.svg",
    alt: "Stockholm University Logo",
    height: 100,
    width: 200,
    colSpan: "col-start-2 col-end-2",
    rowSpan: "row-start-2 row-end-2",
  },
];

const sahlgrenska = {
  src: "home/partner_sahlgrenska.png",
  alt: "Sahlgrenska Logo",
  height: 50,
  width: 400,
};

const columnText = [
  {
    title: "Faster Diagnoses",
    text: "Our decision support tool enables diagnostic decisions in seconds, avoiding long waiting times and reducing anxiety for patients",
    img: "home/speed.svg",
    imgAlt: "Speedometer icon",
  },
  {
    title: "Cost Efficient",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels",
    img: "home/money.svg",
    imgAlt: "Money icon",
  },
  {
    title: "Improved Performance",
    text: "AI powered by a database comprised of 100,000 images of skin lesions ensures fewer melanomas missed, and fewer incorrect diagnoses",
    img: "home/accuracy.svg",
    imgAlt: "Crosshair icon",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
        <meta name="description" content="AI Medical" />
        <MetaTags
          description="Driving Fast And Accurate \nDiagnosis For All Skin Cancers - Through AI"
          title="AI Medical"
          image="/images/home/header.jpg"
        />
      </Head>
      <Header
        imageUrl="/images/home/header.jpg"
        text={
          <h1 className="relative mb-6 animate-focus-in whitespace-pre-wrap text-2xl font-normal text-on-primary lg:text-5xl">
            {`Driving Fast And Accurate \nDiagnosis For All Skin Cancers - \n`}
            <strong>Through AI</strong>
          </h1>
        }
        actionButton={buttonHeader}
        fullHeight={true}
      />
      <main id="home-section1">
        <TwoColText
          title="AI Powered Diagnostic Solutions"
          text="We are dedicated to developing AI powered diagnostic solutions that enable frontline healthcare practitioners to make easier, faster and more reliable diagnoses for their patients. Our first product, Dermalyser, is a clinically validated decision support tool for the diagnosis of all skin cancers."
          actionButton={buttonSection1}
          list={columnText}></TwoColText>
        <TwoColImg
          title="Our Mission"
          text="Our mission is to support healthcare providers with AI powered diagnostic solutions so that no patient should die due to delay or misdiagnosis of a condition."
          actionButton={buttonSection2}
          image={{
            src: "employees/christoffer.jpg",
            alt: "Christoffer Ekström",
          }}
          imageText="Christoffer Ekström, CEO"></TwoColImg>
        <HeroSection
          title={
            "Skin cancer is one of the most common cancers in the world, accounting for nearly half of all cancers"
          }
          image={{
            src: "/images/home/skin_cancer_header.jpg",
            alt: "Image of dermalyser in use",
          }}
          button={{ text: "Learn more", href: "/skin-cancer" }}
        />
        <section className="flex w-full flex-col items-center space-y-6 bg-background-secondary py-24 px-6 md:px-0 lg:space-y-12">
          <h2 className="border-b-2 border-primary text-center text-3xl font-bold text-primary">
            Our Partners
          </h2>
          {/* displayed as grid on small screens to be able to rearrange the logos according to design, changes to flex row on bigger screens (xl) */}
          <ul className="grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-6 xl:flex xl:flex-wrap xl:justify-center xl:space-x-32 ">
            {partners.map((img, i) => (
              <li
                key={i}
                className={
                  " xl:w-20 2xl:w-32 " + img.colSpan + " " + img.rowSpan
                }>
                <Image
                  src={"/images/" + img.src}
                  alt={img.alt}
                  height={img.height}
                  width={img.width}
                />
              </li>
            ))}
          </ul>
          <ul>
            <li key={sahlgrenska.alt} className={"h-12"}>
              <Image
                src={"/images/" + sahlgrenska.src}
                alt={sahlgrenska.alt}
                height={sahlgrenska.height}
                width={sahlgrenska.width}
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
