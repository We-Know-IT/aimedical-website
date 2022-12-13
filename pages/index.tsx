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
    src: "partner_ai.svg", //"AI_Sweden_Logo_Black.png",
    alt: "AI Sweden Logo Black",
    height: 100,
    width: 200,
    colSpan: "col-span-2",
    rowSpan: "row-start-3 row-end-3",
  },
  {
    src: "partner_ki.svg", //"KI_digital_logotyp_positiv_RGB.svg",
    alt: "Karolinska Institutet Logo Plum",
    height: 100,
    width: 200,
    colSpan: "col-span-1",
    rowSpan: "row-start-2 row-end-2",
  },
  {
    src: "partner_liu.svg", //"LiU_primary_black - PNG.png",
    alt: "Linköping University Logo Black",
    height: 100,
    width: 200,
    colSpan: "col-span-1",
    rowSpan: "row-start-1 row-end-1",
  },
  {
    src: "partner_aida.svg", //"AIDA.png",
    alt: "AIDA Logo",
    height: 100,
    width: 200,
    colSpan: "col-start-2 col-end-2",
    rowSpan: "row-span-1",
  },
  {
    src: "partner_su.svg", //"SU_logo_STèENDE_TRYCK_20cm_cmyk.jpg",
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
        imageUrl="/images/header.jpg"
        text={
          <p className="relative text-color-on-blue text-2xl lg:text-5xl font-normal whitespace-pre-wrap mb-6">
            {`Driving fast and accurate \ndiagnosis for all skin cancers - \n`}
            <strong>All through AI</strong>
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
          image="man_crossed_arms.jpg"></TwoColImg>
        <section className="w-full bg-background-secondary flex flex-col items-center space-y-6 lg:space-y-12 py-24 px-6 md:px-0">
          <h2 className="text-blue-100 font-bold text-3xl text-center border-b-2 border-blue-100">
            Our Partners
          </h2>
          {/* displayed as grid on small screens to be able to rearrange the logos according to design, changes to flex row on bigger screens (xl) */}
          <ul className="grid grid-cols-2 gap-6 justify-items-center items-center grid-rows-3 xl:flex xl:flex-wrap xl:justify-center xl:space-x-32 ">
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
