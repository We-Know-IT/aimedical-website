import HowItWorksSlider from "./HowItWorksSlider";
import HowItWorksSteps from "./HowItWorksSteps";

const slides = [
  {
    title: "1. Download the App",
    text: "Easily download the Dermalyser app on to your mobile device. The app works on both Android and iOS.",
    image: "/images/dermalyser/slide_1.png",
    imageAlt: "Dermalyser app on a mobile device",
  },
  {
    title: "2. Take a Picture",
    text: "Attach your dermatoscope to the mobile phone and take a picture of the lesion. ",
    image: "/images/dermalyser/slide_2.png",
    imageAlt: "Dermascope being used to take a picture of a skin lesion",
  },
  {
    title: "3. Receive Results",
    text: "Our AI processes the image to deliver real-time analysis and assess the risk of malignancy. ",
    image: "/images/dermalyser/slide_3.png",
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
    <section className="bg-background-primary pb-10 lg:py-12">
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
