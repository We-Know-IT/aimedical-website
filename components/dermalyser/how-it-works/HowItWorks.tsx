import HowItWorksSlider from "./HowItWorksSlider";
import HowItWorksSteps from "./HowItWorksSteps";

const slides = [
  {
    title: "1. Download the app",
    text: "Easily download the Dermalyser app on to any mobile device. The app works on both Android and iOS.",
    image: "/images/dermalyser/slide_1.png",
    imageAlt: "Dermalyser app on a mobile device",
  },
  {
    title: "2. Take a Picture",
    text: "Using a dermascope which can be easily attached to the device camera, take a picture of the suspect skin lesion. ",
    image: "/images/dermalyser/slide_3.png",
    imageAlt: "Dermascope being used to take a picture of a skin lesion",
  },
  {
    title: "3. Receive Results",
    text: "The image is analysed using our proprietary AI software and reports back the malignancy risk in real time.",
    image: "/images/dermalyser/slide_4.png",
    imageAlt: "Results being displayed on the app",
  },
];

export interface HowItWorksSlide {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

export default function How() {
  return (
    <section className="bg-background-primary py-24 lg:py-32">
      <div className="container max-w-xl lg:container">
        <div className="hidden lg:block">
          <HowItWorksSteps slides={slides} />
        </div>
        <div className="block lg:hidden">
          <HowItWorksSlider slides={slides} />
        </div>
      </div>
    </section>
  );
}
