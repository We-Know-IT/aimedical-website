import Head from "next/head";
import Header from "../components/general/Header";
import TwoColText from "../components/general/start/TwoColText";
import TwoColImg from "../components/general/start/TwoColImg";
import Image from "next/image";
import DermalyserHero from "../components/home/SkinCancerHero";

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

const columnText = [
  {
    title: "Faster Diagnoses",
    text: "Our decision support tool enables diagnostic decisions in seconds, avoiding long waiting times and reducing anxiety for patients",
    img: "home/speed.svg",
  },
  {
    title: "Cost Efficient",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels",
    img: "home/money.svg",
  },
  {
    title: "Improved Performance",
    text: "AI powered by a database comprised of 100,000 images of skin lesions ensures fewer melanomas missed, and fewer incorrect diagnoses",
    img: "home/accuracy.svg",
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
        imageUrl="/images/header.jpg"
        text={
          <p className="relative mb-6 animate-focus-in whitespace-pre-wrap text-2xl font-normal text-on-primary lg:text-5xl">
            {`Driving fast and accurate \ndiagnosis for all skin cancers - \n`}
            <strong>Through AI</strong>
          </p>
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
          }}></TwoColImg>
        <DermalyserHero />
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
        </section>
      </main>
    </>
  );
}
