import { LinkButton, Button } from "../Button";
import Image from "next/image";
import Typography from "../../common/Typography";

type Props = {
  title?: React.ReactNode | string;
  text?: string;
  name?: string;
  position?: string;
  image?: {
    src: string;
    alt: string;
    quality?: number;
  };
};

export default function TwoColRef({ title, text, name, position, image }: Props) {
  return (
    /* Container */
    <section className="pb-10">
      {/* Container */}
      <div className="container flex flex-col items-center justify-between xl:flex-row xl:h-[440px] space-y-6 xl:space-y-0 xl:gap-6">
        {/* flex box */}
        <div className="flex w-full flex-col justify-center rounded-xl lg:items-center lg:justify-evenly xl:w-2/5 xl:h-full relative">
          {/* Three Columns with Continuous Flowing Squares */}
          <div className="w-full h-96 md:h-full flex justify-evenly items-center overflow-x-visible">
            {/* Left Column - Vertical marquee */}
            <div className="overflow-hidden h-full p-4 w-32 xl:w-36">
              <div className="flex flex-col gap-4 pb-4 h-[150%] animate-marquee-vertical" style={{'--marquee-duration': '20000ms'} as React.CSSProperties}>
                {/* First set of squares */}
                <div className="flex flex-col flex-1 gap-4 h-1/2">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex flex-col flex-1 gap-4 h-1/2">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                </div>
              </div>
            </div>
            
            {/* Middle Column - Three rows with picture in middle */}
            <div className="flex flex-col justify-center h-full p-4 w-32 xl:w-36 gap-3">
              <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
              <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/home/kalle.jpg"
                  alt="Kalle"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div> 
              <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
            </div>
            
            {/* Right Column - Vertical marquee */}
            <div className="overflow-hidden h-full p-4 w-32 xl:w-36 flex flex-col justify-end">
              <div className="flex flex-col gap-4 pb-4 h-[150%] animate-marquee-vertical2" style={{'--marquee-duration': '20000ms'} as React.CSSProperties}>
                {/* First set of squares */}
                <div className="flex flex-col flex-1 gap-4 h-1/2">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex flex-col flex-1 gap-4 h-1/2">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                  <div className="w-28 h-28 xl:w-32 xl:h-32 bg-lightblue rounded-lg mx-auto flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Radial Gradient Overlay */}
          <div 
            className="absolute -inset-4 pointer-events-none rounded-xl"
            style={{
              background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.8) 70%, white 100%)'
            }}
          ></div>
        </div>
          <div className="flex w-full flex-col rounded-xl bg-background-secondary px-8 xl:pr-36 py-12 lg:items-start xl:w-3/5 xl:h-full xl:bg-gradient-to-bl xl:from-background-secondary xl:via-white/90 xl:to-white">
            {/* Right box */}
            <div className="py-4">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.2 21.3V11.3C0.2 4.1 3.9 0.999996 8.6 0.299999V4.1C6.3 5 4.8 7 4.8 11.3H8.7V21.3H0.2ZM15.3 21.3V11.3C15.3 4.1 19 0.999996 23.7 0.299999V4.1C21.4 5 19.9 7 19.9 11.3H23.8V21.3H15.3Z" fill="#0163AE"/>
              </svg>
            </div>
            <div className="flex flex-col items-start py-4">
            <Typography variant="p" className="mb-8 text-darkblue font-robotoFlex font-light xl:text-[24px] xl:leading-[32px]">
              {text}
            </Typography>
            <Typography variant="p" className="mb-0 text-darkblue font-robotoFlex font-normal xl:text-sm">
              {name}
            </Typography>
            <Typography variant="p" className="mb-0 text-darkblue-page-active font-robotoFlex font-normal xl:text-sm">
              {position}
            </Typography>
          </div>
        </div>
        
      </div>
    </section>
  );
}
