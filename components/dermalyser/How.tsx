import HowSlide from "./HowSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
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

export default function How() {
  return (
    <section className=" bg-background-primary">
      <div className="container ">
        <h2 className="text-center text-xl font-bold leading-6 text-primary md:text-3xl md:leading-10">
          How it works
        </h2>
        <div className="mx-auto h-[2px] w-1/4 bg-primary " />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {slides.map((s) => (
            <SwiperSlide key={s.title}>
              <HowSlide {...s} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
