import Head from "next/head";
import Header from "../components/general/Header";
import TwoColText from "../components/general/start/TwoColText";
import TwoColImg from "../components/general/start/TwoColImg";
import TwoColScroll from "../components/general/start/TwoColScroll";
import TwoColRef from "../components/general/start/TwoColRef";
import TwoColProduct from "../components/general/start/TwoColProduct";
import MetaTags from "../components/general/seo/MetaTags";
import Typography from "../components/common/Typography";
import {
  BsArrowDownShort,
  BsArrowRightShort,
  BsTelephone,
} from "react-icons/bs";
import PartnerSection from "../components/landing-page/PartnerSection";
import TwoColAbout from "../components/general/start/TwoColAbout";

const buttonHeader = {
  children: "About Dermalyser",
  onClick: () => {
    window.location.href = "/dermalyser";
  },
};

const buttonSection1 = {
  children: "About Dermalyser",
  href: "/dermalyser",
};

const buttonSectionAbout = {
  children: "Read more",
  href: "/about",
};
const buttonSectionProduct = {
  children: "About Dermalyser",
  href: "/dermalyser",
};
const buttonSection2 = {
  children: (
    <>
      Contact us <BsTelephone size={17} className="ml-2" />
    </>
  ),
  href: "#contact",
};

const columnText = [
  {
    title: "Faster Diagnoses",
    text: "Our decision support tool enables diagnostic decisions in seconds, avoiding long waiting times and reducing anxiety for patients",
    img: "home/icons/speed.svg",
    imgAlt: "Speedometer icon",
  },
  {
    title: "Cost Efficient",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels",
    img: "home/icons/price.svg",
    imgAlt: "Money icon",
  },
];

const scrollRows = [
  {
    title: "Faster, more confident decisions at the point of care",
    text: "Dermalyser delivers accurate diagnostic support in seconds, reducing waiting times and giving healthcare practitioners"
  },
  {
    title: "Reduce unnecessary excisions and referrals",
    text: "By improving diagnostic accuracy, Dermalyser lowers the number of avoidable procedures and optimises healthcare resources across multiple levels"
  },
  {
    title: "Proven accuracy – outperforming existing methods",
    text: "Validated in clinical trials, Dermalyser reaches 95% sensitivity in melanoma detection. Significantly benefit general practit-ioners and helping general practitioners in clinical decisions"
  }
];

const scrollImages = [
  {
    src: "/images/dermalyser/slide_1.png",
    alt: "AI Diagnosis Interface"
  },
  {
    src: "/images/dermalyser/slide_2.png", 
    alt: "Clinical Validation Results"
  },
  {
    src: "/images/dermalyser/slide_3.png",
    alt: "Easy Integration Process"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
        <meta name="description" content="AI Medical" />
        <MetaTags
          description="Driving Fast And Accurate \nDiagnosis Through AI"
          title="AI Medical"
          image="/images/home/header.png"
        />
      </Head>
      <Header
        imageUrl="/images/home/header.png"
        text=""
        actionButton={buttonHeader}
        fullHeight={true}
      />

      <main id="home-section1">
        <PartnerSection />
        <TwoColText
          title={
            <>
              Video instructions
            </>
          }
          text="Dermalyser is a CE-marked app that provides AI-driven decision support in just seconds, by analysing a dermoscopic image captured with your smartphone."
          textClassName="mb-4 text-darkblue font-robotoFlex font-normal text-[19px] leading-[26px] whitespace-pre-line"
          video={{
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            title: "AI Medical Dermalyser Demo",
            controls: false,
            autoPlay: false,
            muted: true,
            poster: "/images/home/header.png"
          }}></TwoColText>
        <TwoColScroll
          scrollRows={scrollRows}
          scrollImages={scrollImages}
        />
        <TwoColRef
          title={"“"}
          text="It is an exciting time in skin cancer care – AI diagnostic support, grounded in solid science and CE-marked, can not only raise the quality of care but also improve the working environment for healthcare professionals."
          name="Sam Polesie"
          position="MD, Associate Professor, Adjunct Senior Lecturer"
          image={{
            src: "home/header.png",
            alt: "AI Medical Dermalyser Demo",
            quality: 100
          }}></TwoColRef>


        <TwoColAbout
          title={
            <>
              About us
            </>
          }
          text="Our purpose is to support frontline healthcare in Skin Cancer diagnosis. Dermalyser helps healthcare professionals deliver faster and more reliable skin cancer assessments, reducing uncertainty and improving outcomes for patients."
          actionButton={buttonSectionAbout}
          image={{
            src: "home/header.png",
            alt: "Dermalyser",
            quality: 100,
          }}></TwoColAbout>
        <TwoColProduct
          title={
            <>
              Dermalyser
            </>
          }
          text="Dermalyser is a mobile app that gives general practitioners fast, reliable AI support for the early detection of melanoma. By simply taking an image with a smartphone and dermatoscope, doctors receive decision support in just a few seconds — helping them make quicker, more accurate assessments, reduce unnecessary referrals, and improve care for patients."
          actionButton={buttonSection1}
          image={{
            src: "home/header.png",
            alt: "Dermalyser",
            quality: 100,
          }}></TwoColProduct>
      </main>
    </>
  );
}
