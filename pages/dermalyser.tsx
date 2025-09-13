import Head from "next/head";
import Advantages from "../components/dermalyser/Advantages";
import DiagnosticsEmpowered from "../components/dermalyser/DiagnosticsEmpowered";
import HowItWorks from "../components/dermalyser/how-it-works/HowItWorks";
import Performance from "../components/dermalyser/Performance";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import InstructionsForUse from "../components/dermalyser/instructions-for-use/InstructionsForUse";

import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

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
          image="/images/dermalyser/header.jpg"
          title="Dermalyser"
          description="Driving Fast, Accurate Diagnosis for Melanoma"
        />
      </Head>
      <Header
        imageUrl="/images/dermalyser/header.jpg"
        title="Dermalyser"
        text="Driving Fast, Accurate Diagnosis for Melanoma"
        imagePosition="75%"
      />
      <main className="flex flex-col">
        <DiagnosticsEmpowered />
        <Performance />
        <Advantages />
        <HowItWorks />
        <InstructionsForUse 
          engIfuPdfs={engIfuPdfs} 
          sweIfuPdfs={sweIfuPdfs}
          engPiPdfs={engPiPdfs}
          engVugPdfs={engVugPdfs}
        />
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
//           image="/images/dermalyser/header.jpg"
//           title="Dermalyser"
//           description="Driving Fast, Accurate Diagnosis for Melanoma"
//         />
//       </Head>
//       <Header
//         imageUrl="/images/dermalyser/header.jpg"
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
