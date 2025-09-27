import Image from "next/image";
import Typography from "../common/Typography";
import { Button, LinkButton } from "../general/Button";
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
        <div className="container flex flex-col xl:flex-row bg-background-secondary rounded-xl min-h-[420px]"
                  style={{
                    background: 'linear-gradient(45deg, transparent 0%, rgba(250,249,247,0.6) 20%, rgba(250,249,247,0.8) 60%, rgba(250,249,247,1) 100%)'
                  }}>

        <div className="flex w-full flex-col justify-between items-start rounded-xl xl:w-1/2 flex-1 px-0 pt-12 md:py-12 relative">
        {/* left Column - Bar Graph */}
        <Typography variant="h3" className="font-robotoFlex font-normal !text-left pb-8">
            {header}
          </Typography>
        </div>
        <div className="w-full xl:w-1/2 mt-0 flex flex-col justify-between px-0 py-12">
          <div className="space-y-6">
            <Typography variant="p" className="text-left text-darkblue font-robotoFlex font-normal text-[19px] leading-[26px] lg:pr-4">
              {text}
            </Typography>

            {/* Conditional List */}
            {list && (
              <div className="mt-4">
                <ul className={`space-y-2 ${list.className || ''}`}>
                  {list.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start text-black font-robotoFlex font-normal text-lg"
                    >
                      <img 
                        src="/images/dermalyser/arrow-right.svg" 
                        alt="Arrow" 
                        className="mr-3 mt-2 h-4 w-4 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mt-6">
            <LinkButton intent="transparentblue" href="/contact">Contact us</LinkButton>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
