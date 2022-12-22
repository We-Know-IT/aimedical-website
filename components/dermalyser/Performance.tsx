import Bar from "./Bar";

const bars = [
  {
    text: "General\npractiotioner",
    value: 0.91,
    isHighlighted: false,
  },
  {
    text: "Dermalyser",
    value: 0.94,
    isHighlighted: true,
  },
  {
    text: "Expert\ndermatologist",
    value: 0.83,
    isHighlighted: false,
  },
];

export default function Performance() {
  return (
    <section className=" bg-background-primary">
      <div className="container ">
        <div className="mx-auto flex scale-y-110 flex-col gap-4 rounded-[20px] bg-background-primary px-4 py-24 shadow-md sm:px-6 md:max-w-5xl md:scale-y-125 md:px-0">
          <h2 className="scale-y-[0.9] text-center text-xl font-bold leading-6 text-primary md:scale-y-[0.8] md:text-3xl md:leading-10">
            AUC Performance of Dermalyser
          </h2>
          <div className="mx-auto h-[2px] w-1/4 scale-y-[0.9] bg-background-secondary md:scale-y-[0.8]" />
          <p className="mx-auto scale-y-[0.9] text-center text-lg font-normal  leading-7 text-on-bg-primary md:max-w-2xl md:scale-y-[0.8]">
            In a test with more than 6000 unseen images, our AI achieved an AUC
            score of 0.94 which significantly outperforms Expert Dermatologists
            and General Practitioners.
          </p>

          <ul className="mx-auto flex flex-row items-center justify-center  gap-4 md:flex-col ">
            {bars.map((bar, i) => (
              <li key={i}>
                <Bar {...bar} classes="scale-y-[0.9] md:scale-y-[0.8] " />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
