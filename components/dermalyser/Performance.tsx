import Typography from "../common/Typography";
import Bar from "./Bar";

const bars = [
  {
    text: "Dermalyser",
    value: 0.96,
    isHighlighted: true,
  },
  {
    text: "Expert\ndermatologist",
    value: 0.85,
    isHighlighted: false,
  },
  {
    text: "General\npractitioner",
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
    <section className="z-20 bg-background-primary">
      <div className="container max-w-xl lg:container">
        <div className="mx-auto -my-8 flex flex-col gap-4 rounded-[20px] bg-background-primary px-4 py-5 shadow-md sm:px-6 lg:-my-12 lg:max-w-5xl lg:px-0">
          <Typography variant="h2" className="sm:text-center">
            AUC Performance of <strong>Dermalyser</strong>
          </Typography>
          <Typography
            variant="p"
            className="mx-auto max-w-sm text-on-bg-primary sm:text-center lg:max-w-xl ">
            In our first clinical investigation, our AI achieved an AUC score of 0.96
            which is higher than shown for Expert Dermatologists and General
            Practitioners. <br /><br />
            Dermalyser is an easy-to-use, clinically validated AI decision support tool enabling faster and more accurate diagnosis of Melanoma.
          </Typography>

          <ul className="mx-auto mb-4 flex w-full flex-col justify-center gap-4 sm:w-[80%]">
            {bars.map((bar, i) => (
              <li key={i}>
                <Bar
                  {...bar}
                  value={getvalue(bar.value)}
                  valueText={bar.value.toFixed(2)}
                  ariaLabel={`AUC score of ${bar.value.toFixed(2)} for ${
                    bar.text
                  }`}
                />
              </li>
            ))}
          </ul>
          <Typography variant="p" className="mx-auto max-w-sm text-on-bg-primary sm:text-center lg:max-w-xl ">
            For further details, visit: {"\t"}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/38234043/"
              className="text-primary hover:text-primary-hover">
              https://pubmed.ncbi.nlm.nih.gov/
            </a>
          </Typography>
        </div>
      </div>
    </section>
  );
}
