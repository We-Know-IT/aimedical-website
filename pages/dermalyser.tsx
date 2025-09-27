import Head from "next/head";
import HowItWorks from "../components/dermalyser/how-it-works/HowItWorks";
import Performance from "../components/dermalyser/Performance";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import InstructionsForUse from "../components/dermalyser/instructions-for-use/InstructionsForUse";
import TwoColText from "../components/general/start/TwoColText";
import Background from "../components/about/Background";
import TwoColRef from "../components/general/start/TwoColRef2";
import TwoColInstructions from "../components/dermalyser/TwoColInstructions";

import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
const buttonSectionAbout = {
  children: "Read more",
  href: "/about",
};

export const getStaticProps: GetStaticProps = async () => {
  const engIfuDir = path.join(process.cwd(), "public/pdfs/ifu/eng");
  const sweIfuDir = path.join(process.cwd(), "public/pdfs/ifu/swe");
  const engPiDir = path.join(process.cwd(), "public/pdfs/pi/eng");
  const engVugDir = path.join(process.cwd(), "public/pdfs/vug/eng");

  

  let engIfuPdfs = fs.readdirSync(engIfuDir).filter((file) => file.endsWith(".pdf"));
  let sweIfuPdfs = fs.readdirSync(sweIfuDir).filter((file) => file.endsWith(".pdf"));
  let engPiPdfs = fs.readdirSync(engPiDir).filter((file) => file.endsWith(".pdf"));
  let engVugPdfs = fs.readdirSync(engVugDir).filter((file) => file.endsWith(".pdf"));

  // Sort the PDFs based on the date in their filenames in descending order
  engIfuPdfs = engIfuPdfs.sort((a, b) => b.localeCompare(a));
  sweIfuPdfs = sweIfuPdfs.sort((a, b) => b.localeCompare(a));
  engPiPdfs = engPiPdfs.sort((a, b) => b.localeCompare(a));
  engVugPdfs = engVugPdfs.sort((a, b) => b.localeCompare(a));

  return {
    props: {
      engIfuPdfs,
      sweIfuPdfs,
      engPiPdfs,
      engVugPdfs,
    },
  };
};

interface Props {
  engIfuPdfs: string[];
  sweIfuPdfs: string[];
  engPiPdfs: string[];
  engVugPdfs: string[];
}

export default function Dermalyser({ engIfuPdfs, sweIfuPdfs, engPiPdfs, engVugPdfs }: Props) {
  return (
    <>
      <Head>
        <title>AI Medical | Dermalyser </title>
        <link rel="icon" href="/favicon.png" />
        <MetaTags
          image="/images/dermalyser/header.png"
          title="Dermalyser"
          description="Driving Fast, Accurate Diagnosis for Melanoma"
        />
      </Head>
      <main className="flex flex-col pt-28">
      <TwoColText
          text="AI support for faster, more confident skin cancer assessments"
          textClassName="!mb-4 mt-10 lg:mt-52 lg:mr-10 text-darkblue font-robotoFlex font-normal text-[32px] leading-tight"
          mobileOrder="right-first"
          video={{
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            title: "AI Medical Dermalyser Demo",
            controls: false,
            autoPlay: false,
            muted: true,
            poster: "/images/home/header.png"
          }}></TwoColText>
        <Background
          header="Dermalyser"
          text="As a primary care doctor, you face difficult choices when assessing suspicious skin lesions. Dermalyser is a 
CE-marked app that provides AI-driven decision support in just seconds, by analysing a dermoscopic image captured with your smartphone. Our goal is to support you — not replace you — by improving confidence, reducing unnecessary referrals, and reassuring patients."
          list={{
            items: [
              "Reliable AI support, built on clinical validation and real-world evidence.",
              "Faster decisions – AI support in seconds, right in the consultation.",
              "Fewer unnecessary referrals – Improves efficiency and reduces patient anxiety."
            ]
          }}
          engVugPdfs={engVugPdfs}
        />
        <HowItWorks />
        <TwoColRef
          title={"“"}
          text="I believe the app will contribute to safer and more resource-efficient management of skin tumors in primary care. Fewer patients would need to be referred to dermatologists for completely harmless skin lesions, or undergo unnecessary surgical removal. Since the experience and confidence in assessing skin lesions vary greatly among general practitioners, I believe the app can help improve diagnostic accuracy for those who feel less certain and therefore tend to excise or refer ‘just to be on the safe side."
          name="Magnus Falk"
          position="Principal Investigator"
          image={{
            src: "home/header.png",
            alt: "AI Medical Dermalyser Demo",
            quality: 100
          }}></TwoColRef>
          <TwoColInstructions
          title={
            <>
              Supporting Melanoma Assessment with AI
            </>
          }
          text="For many GPs, assessing suspicious skin lesions is one of the most challenging parts of daily practice. Subtle features of melanoma are easily missed, and the pressure of limited consultation time adds to the difficulty. Dermalyser fits seamlessly into this workflow.Dermalyser is designed to support this process. By analysing dermoscopic images in just seconds — evidence-based, CE-marked,
 it provides clinically validated decision support that complements your judgement — helping you feel more confident in difficult cases, reduce unnecessary referrals, and reassure patients quickly."
          image={{
            src: "home/header.png",
            alt: "Dermalyser",
            quality: 100,
          }}
          ></TwoColInstructions>
        <Performance />
        {/* DELETE <Advantages /> */}
        {/* <InstructionsForUse 
          engIfuPdfs={engIfuPdfs} 
          sweIfuPdfs={sweIfuPdfs}
          engPiPdfs={engPiPdfs}
          engVugPdfs={engVugPdfs}
        /> */}
      </main>
    </>
  );
}


// Below can be used to link to the pdf files hosted according to the dynamic IFU link project
// import Head from "next/head";
// import Advantages from "../components/dermalyser/Advantages";
// import DiagnosticsEmpowered from "../components/dermalyser/DiagnosticsEmpowered";
// import HowItWorks from "../components/dermalyser/how-it-works/HowItWorks";
// import Performance from "../components/dermalyser/Performance";
// import Header from "../components/general/Header";
// import MetaTags from "../components/general/seo/MetaTags";
// import InstructionsForUse from "../components/dermalyser/instructions-for-use/InstructionsForUse";
// import { GetStaticProps } from "next";

// // Define the list of URLs to the PDF files
// const engPdfUrls = [
//   "https://assets.aimedicaltechnology.com/ifu/dermalyser/1.0.0/en-GB/latest.pdf",
//   // Add more URLs as needed
// ];

// const swePdfUrls = [
//   "https://assets.aimedicaltechnology.com/ifu/dermalyser/1.0.0/sv-SE/latest.pdf",
//   // Add more URLs as needed
// ];

// export const getStaticProps: GetStaticProps = async () => {
//   // Sort the URLs if necessary, here they are sorted based on the date in their filenames in descending order
//   const sortedEngPdfUrls = engPdfUrls.sort((a, b) => b.localeCompare(a));
//   const sortedSwePdfUrls = swePdfUrls.sort((a, b) => b.localeCompare(a));

//   // NOTE: This will be used to download a PDF
//   // However, only one PDF will be used in the download button which will be the first one in the array
//   // Return the sorted URLs in the props
//   return {
//     props: {
//       engPdfs: sortedEngPdfUrls,
//       swePdfs: sortedSwePdfUrls,
//     },
//   };
// };

// interface Props {
//   engPdfs: string[];
//   swePdfs: string[];
// }

// export default function Dermalyser({ engPdfs, swePdfs }: Props) {
//   return (
//     <>
//       <Head>
//         <title>AI Medical | Dermalyser </title>
//         <MetaTags
//           image="/images/dermalyser/header.png"
//           title="Dermalyser"
//           description="Driving Fast, Accurate Diagnosis for Melanoma"
//         />
//       </Head>
//       <Header
//         imageUrl="/images/dermalyser/header.png"
//         title="Dermalyser"
//         text="Driving Fast, Accurate Diagnosis for Melanoma"
//         imagePosition="75%"
//       />
//       <main className="flex flex-col">
//         <DiagnosticsEmpowered />
//         <Performance />
//         <Advantages />
//         <HowItWorks />
//         <InstructionsForUse engPdfs={engPdfs} swePdfs={swePdfs} />
//       </main>
//     </>
//   );
// }
