import Image from "next/image";
import { CSSProperties } from "react";

const backgroundImageStyle: CSSProperties = {
  background: "url(/images/theraputic-area/gloves.png)  #fff",
  backgroundSize: "cover",
};

export default function ThreeTypesOfSkinCancer() {
  return (
    <section className="bg-background-secondary py-24 xl:py-32">
      <div className="container flex max-w-xl flex-col items-center gap-12  xl:container  xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-left text-xl font-bold leading-6 text-primary xl:text-3xl xl:leading-10">
            Three types of skin cancer
          </h2>
          <div className=" h-[2px] w-1/4 bg-primary " />
          <p className="mx-auto text-left  text-lg font-normal  leading-7  text-on-bg-primary xl:max-w-2xl">
            The most common skin cancers are non-melanoma cancers - basal cell
            and squamous cell carcinomas. They are treatable and seldom fatal.
            Malignant melanoma is the third and generally the most serious form
            of skin cancer as it tends to spread (metastasize) quickly
            throughout the body.
          </p>
        </div>

        <div className="relative py-20 ">
          <div
            className="absolute top-0 bottom-0 left-0 right-0 z-0 w-full rounded-xl blur-[1px]"
            style={backgroundImageStyle}></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 rounded-xl bg-gradient-to-b from-primary/[0.85] to-primary/[0.42]"></div>
          <div className="flex  flex-col items-center justify-center space-y-6 px-6 xl:max-w-sm">
            <Image
              src="/images/theraputic-area/icon_warning.svg"
              height={96}
              width={96}
              alt=""
              className="relative"
            />
            <p className="relative text-center text-lg font-bold leading-8 text-on-primary">
              Although malignant melanoma accounts for only a small percentage
              of skin cancer, it is far more dangerous than other skin cancers
              and is the leading cause of death from skin disease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
