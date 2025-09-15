import React from "react";
import PDFDownloadButton from "./PDFDownloadButton";
import Typography from "../../common/Typography";

interface Props {
  engIfuPdfs: string[];
  sweIfuPdfs: string[];
}

export default function IfuDownload({ engIfuPdfs, sweIfuPdfs }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
      <div className="flex w-full flex-col items-center gap-2 sm:w-fit">
        <Typography variant="p" className="font-semibold">
          English
        </Typography>
        <PDFDownloadButton pdfFiles={engIfuPdfs} directory="pdfs/ifu/eng" />
      </div>
      <div className="flex w-full flex-col items-center gap-2 sm:w-fit">
        <Typography variant="p" className="font-semibold">
          Swedish
        </Typography>
        <PDFDownloadButton pdfFiles={sweIfuPdfs} directory="pdfs/ifu/swe" />
      </div>
    </div>
  );
}

// Below can be used to link to the pdf files hosted according to the dynamic IFU link project
// import React from "react";
// import PDFDownloadButton from "./PDFDownloadButton";
// import Typography from "../../common/Typography";

// interface Props {
//   engPdfs: string[];
//   swePdfs: string[];
// }

// const IfuDownload: React.FC<Props> = ({ engPdfs, swePdfs }) => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
//       <div className="flex w-full flex-col items-center gap-2 sm:w-fit">
//         <Typography variant="p" className="font-semibold">
//           English
//         </Typography>
//         <PDFDownloadButton pdfFiles={engPdfs} forceDownload={false} /> {/* Set to true to force download */}
//       </div>
//       <div className="flex w-full flex-col items-center gap-2 sm:w-fit">
//         <Typography variant="p" className="font-semibold">
//           Swedish
//         </Typography>
//         <PDFDownloadButton pdfFiles={swePdfs} forceDownload={false} /> {/* Set to false to open in a new tab */}
//       </div>
//     </div>
//   );
// };

// export default IfuDownload;