import Image from "next/image";
import Typography from "../common/Typography";
import { Button } from "../general/Button";
import PDFDownloadButton from "../dermalyser/instructions-for-use/PDFDownloadButton";


interface BackgroundProps {
  header: string;
  text: string;
  list?: {
    items: string[];
    className?: string;
  };
  engVugPdfs?: string[];

}

export default function Background({ 
  header,
  text,
  list,
  engVugPdfs
}: BackgroundProps) {
  return (
    <section className="pb-10">
      <div className="container flex flex-col items-start justify-center space-y-6 xl:flex-row xl:items-start xl:space-y-0 xl:space-x-12">
        <div className="xl:w-1/2 flex flex-col items-start">
          <Typography variant="h2" className="font-haasGrotDisplay font-normal !text-left">
            {header}
          </Typography>
        </div>
        <div className="xl:w-1/2 mt-0 space-y-6">
          <Typography variant="p" className="text-left text-darkblue font-haasGrotDisplay font-normal text-lg">
            {text}
          </Typography>
          
          {/* Conditional List */}
          {list && (
            <div className="mt-4">
              <ul className={`space-y-2 ${list.className || ''}`}>
                {list.items.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start text-black font-haasGrotDisplay font-normal text-lg"
                  >
                    <span className="mr-3 mt-2 h-1 w-1 bg-cyan rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Conditional Button */}
          {engVugPdfs && (
            <div className="flex justify-start">
              <PDFDownloadButton 
                pdfFiles={engVugPdfs} 
                directory="pdfs/vug/eng"
                buttonText="Download PDF"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
