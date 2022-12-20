import AdvantageCard from "./AdvantageCard";

const advantages = [
  {
    title: "Fewer Melanomas Missed And Increased Performance",
    text: "We have a carefully curated database comprising over 100,000 images of fully labelled skin lesions that have been used to train our proprietary AI.",
    image: "/images/dermalyser/shrink_down.svg",
  },
  {
    title: "Reduced Number of Unnecessary Skin Excisions",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels.",
    image: "/images/dermalyser/decline.svg",
  },
  {
    title: "Easy And Convenient",
    text: "AI empowered image analysis software enables easy analysis of a patient’s skin lesion on any mobile phone.",
    image: "/images/dermalyser/easy.svg",
  },
];

export default function Advantages() {
  return (
    <section className="bg-background-secondary py-24 md:py-32">
      <div className="container flex flex-col gap-12 ">
        <h2 className="text-center text-xl font-bold leading-6 text-primary md:text-3xl md:leading-10">
          Advantages of using Dermalyser
        </h2>
        <div className="mx-auto h-[2px] w-1/4 bg-primary " />
        <ul className="flex flex-col gap-16 lg:flex-row">
          {advantages.map((a) => (
            <li key={a.title}>
              <AdvantageCard {...a} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
