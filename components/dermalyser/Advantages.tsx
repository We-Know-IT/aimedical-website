import Typography from "../common/Typography";
import AdvantageCard from "./AdvantageCard";

const advantages = [
  {
    title: "Fewer Melanomas Missed And Increased Performance",
    text: "The application is developed and trained on thousands of images of skin lesions.",
    image: "/images/dermalyser/shrink_down.svg",
  },
  {
    title: "Reduced Number of Unnecessary Skin Excisions",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels.",
    image: "/images/dermalyser/decline.svg",
  },
  {
    title: "Easy And Convenient",
    text: "AI-empowered image analysis software enables easy analysis of a patient’s skin lesion using a mobile phone attached to a dermatoscope.",
    image: "/images/dermalyser/easy.svg",
  },
];

export default function Advantages() {
  return (
    <section className="bg-background-secondary py-24 lg:py-32">
      <div className="container flex max-w-xl flex-col gap-6 lg:container">
        <Typography variant="h2" className=" sm:self-center">
          Advantages of using Dermalyser
        </Typography>
        <ul className="flex flex-col gap-6 lg:flex-row">
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
