import Bar from "./Bar";

const bars = [
  {
    text: "Dermalyser",
    value: 0.94,
    isHighlighted: true,
  },
  {
    text: "General\npractiotioner",
    value: 0.91,
    isHighlighted: false,
  },
  {
    text: "Expert\ndermatologist",
    value: 0.83,
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
    <section className="bg-background-primary">
      <div className="container max-w-xl lg:container">
        <div className="mx-auto flex scale-y-110 flex-col gap-4 rounded-[20px] bg-background-primary px-4 py-24 shadow-md sm:px-6 lg:max-w-5xl lg:scale-y-125 lg:px-0">
          <h2 className="scale-y-[0.9] text-center text-xl font-bold leading-6 text-primary lg:scale-y-[0.8] lg:text-3xl lg:leading-10">
            AUC Performance of Dermalyser
          </h2>
          <div className="mx-auto h-[3px] w-1/4 scale-y-[0.9] bg-background-secondary-dark lg:scale-y-[0.8]"></div>
          <p className="mx-auto max-w-sm scale-y-[0.9] text-center text-lg  font-medium leading-7 text-on-bg-primary lg:max-w-xl lg:scale-y-[0.8]">
            In a test with more than 6000 unseen images, our AI achieved an AUC
            score of 0.94 which significantly outperforms Expert Dermatologists
            and General Practitioners.
          </p>

          <ul className="mx-auto flex w-[80%] flex-row  justify-center gap-4 lg:flex-col">
            {bars.map((bar, i) => (
              <li key={i}>
                <Bar
                  {...bar}
                  value={getvalue(bar.value)}
                  valueText={bar.value.toFixed(2)}
                  classes="scale-y-[0.9] lg:scale-y-[0.8] "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
