import Image from "next/image";
import Typography from "../common/Typography";
import { Button } from "../general/Button";
import PDFDownloadButton from "../dermalyser/instructions-for-use/PDFDownloadButton";
import Bar from "../dermalyser/BarVert";


interface BackgroundProps {
  header: string;
  text: string;
  list?: {
    items: string[];
    className?: string;
  };
  engVugPdfs?: string[];
}

const bars = [
  {
    text: "General\nPractitioner",
    value: 23,
    isHighlighted: true,
  },
  {
    text: "Dermatologist",
    value: 10,
    isHighlighted: false,
  },
  {
    text: "Dermalyser",
    value: 5,
    isHighlighted: false,
  },
];

const minValue = Math.min(...bars.map((bar) => bar.value));
const maxValue = Math.max(...bars.map((bar) => bar.value));
const minPercentage = 0.5;

const getvalue = (value: number) => {
  // the minimum value should return minPercentage and maxvalue should give 1 and everything in between should be scaled accordingly
  return (
    ((value - minValue) / (maxValue - minValue)) * (1 - minPercentage) +
    minPercentage
  );
};


export default function Background({ 
  header,
  text,
  list,
  engVugPdfs
}: BackgroundProps) {
  return (
    <section className="pb-10">
      <div className="container flex flex-col items-start justify-center space-y-6 xl:flex-row xl:items-start xl:space-y-0 xl:space-x-12">
        <div className="container flex flex-col xl:flex-row bg-background-secondary rounded-xl min-h-[500px]">

        <div className="flex bg-background-secondary w-full flex-col justify-between items-start rounded-xl xl:w-1/2 flex-1 px-0 pt-12 md:py-12 relative">
        {/* left Column - Bar Graph */}
        <Typography variant="h3" className="font-robotoFlex font-normal !text-left pb-8">
            {header}
          </Typography>
          <div className="flex w-full justify-center items-end gap-1 h-72 sm:h-64 md:h-80 lg:h-96 px-4">
            {bars.map((bar, i) => (
                <Bar
                  key={i}
                  {...bar}
                  value={getvalue(bar.value)}
                  valueText={bar.value.toString()}
                  ariaLabel={`AUC score of ${bar.value} for ${
                    bar.text
                  }`}
                  barIndex={i}
                />
            ))}
          </div>
        </div>
        <div className="w-full xl:w-1/2 mt-0 space-y-6 px-8 py-12">
          <Typography variant="p" className="text-left text-darkblue font-robotoFlex font-normal text-lg">
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
      </div>
    </section>
  );
}
