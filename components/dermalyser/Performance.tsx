import Link from "next/link";
import Typography from "../common/Typography";
import Bar from "./Bar";

const bars = [
  {
    text: "Dermalyser",
    value: 0.96,
    isHighlighted: true,
  },
  {
    text: "Expert dermatologist",
    value: 0.85,
    isHighlighted: false,
  },
  {
    text: "General practitioner",
    value: 0.7,
    isHighlighted: false,
  },
];

const minValue = Math.min(...bars.map((bar) => bar.value));
const maxValue = Math.max(...bars.map((bar) => bar.value));
const minPercentage = 0.7;

const getvalue = (value: number) => {
  // the minimum value should return minPercentage and maxvalue should give 1 and everything in between should be scaled accordingly
  return (
    ((value - minValue) / (maxValue - minValue)) * (1 - minPercentage) +
    minPercentage
  );
};

export default function Performance() {
  return (
    <section className="pb-10">
      <div className="container flex flex-col items-center justify-between xl:flex-row-reverse xl:h-[400px] space-y-6 xl:space-y-0 xl:gap-6">

        {/* Left Column - Text Content */}
        <div className="flex w-full flex-col justify-between rounded-xl bg-background-secondary px-8 py-12 lg:items-start xl:w-1/2 xl:h-full">
          <Typography variant="p" className="text-darkblue-page-active font-robotoFlex font-normal">
          AUC Performance in Melanoma Detection
          </Typography>
          
          <div className="flex flex-col items-start space-y-4 flex-1 justify-center">
            <Typography variant="h2" className="text-primary font-robotoFlex font-normal text-lg lg:text-[20px]">
            Clinically Proven Accuracy
            </Typography>
            
            <Typography
              variant="p"
              className="text-darkblue font-robotoFlex font-normal text-sm lg:text-base">
In clinical evaluation, Dermalyser reached an AUC score of 0.96, confirming strong performance in melanoma detection. This high level of accuracy is designed to support GPs in everyday practice, providing fast and reliable decision support that complements — never replaces — clinical expertise.
"Backed by rigorous trials, CE-marked approval, and a study published in the British Journal of Dermatology, Dermalyser provides evidence-based decision support you can trust. Learn more in our clinical studies.
            </Typography>
            
            {/* Button */}
            
            {/*
            <button
              onClick={() => window.open("https://pubmed.ncbi.nlm.nih.gov/38234043/", "_blank")}
              className="flex items-center justify-center bg-primary text-white hover:bg-primary-hover active:bg-primary-active rounded-full px-4 py-2 lg:px-6 lg:py-3 font-robotoFlex font-extralight transition-colors cursor-pointer text-sm lg:text-base mt-2"
            >
              Clinical Studies
            </button>
              */}
            <Link href="/clinical-validation" className="flex items-center justify-center bg-primary text-white hover:bg-primary-hover active:bg-primary-active rounded-full px-4 py-2 lg:px-6 lg:py-3 font-robotoFlex font-extralight transition-colors cursor-pointer text-sm lg:text-base mt-2">
              Clinical Studies
            </Link>
          </div>
        </div>

                {/* Right Column - Bar Graph */}
                <div className="flex w-full flex-col justify-center items-start bg-gradient-to-l from-beige-dark to-transparent rounded-xl xl:w-1/2 xl:h-full px-8 py-12 relative">
          <ul className="flex w-full flex-col justify-center gap-1">
            {bars.map((bar, i) => (
              <li key={i}>
                <Bar
                  {...bar}
                  value={getvalue(bar.value)}
                  valueText={bar.value.toFixed(2)}
                  ariaLabel={`AUC score of ${bar.value.toFixed(2)} for ${
                    bar.text
                  }`}
                  barIndex={i}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
