import { CSSProperties } from "react";
import SkinCancer from "./SkinCancer";
import Image from "next/image";

const backgroundImageStyle: CSSProperties = {
  background: "url(/images/skin-cancer/gloves.png)  #fff",
  backgroundSize: "cover",
};

interface ISkinCancer {
  textComponent: React.ReactNode;
  imageSrc?: string;
  alt?: string;
}

const skinCancers: ISkinCancer[] = [
  {
    textComponent: (
      <>
        <b>Basal Cell Carcinoma (BCC)</b> is the most common form of skin cancer
        and the most frequently occurring form of all cancers. BCCs arise from
        abnormal, uncontrolled growth of basal cells. While anyone can develop
        BCC, it usually occurs in light- skinned patients older than 40 years.
        Patients with a history of repeated sun exposure are at risk for getting
        BCC. Other risk factors for BCC include light eyes and light hair, a
        history of blistering sunburns (particularly in childhood), or close
        relatives with skin cancer. BCCs are considered slow-growing tumours
        that almost never metastasize (spread to other parts of the body).
        Because BCCs grow slowly, most are curable and cause minimal damage when
        caught and treated early. Untreated BCCs have the potential to continue
        to grow and destroy surrounding skin and nearby structures leading to
        physical deformity.
      </>
    ),
  },
  {
    textComponent: (
      <>
        <b>Squamous Cell Carcinoma (SCC)</b> is the second most common type of
        skin cancer, characterised by abnormal, accelerated growth of squamous
        cells. SCCs are more likely to develop in people who have light skin,
        however it can also develop in people who have darker skin. SCC commonly
        arise and form in sun-exposed areas of the body such as the rim of the
        ear, face, neck, arms, chest, and back. SCC can grow deep into the skin,
        causing damage and disfigurement. Early diagnosis and treatment can
        prevent SCC from growing deep and spreading to other areas of the body.
      </>
    ),
  },
  {
    textComponent: (
      <>
        <b>Melanoma</b> skin cancer is responsible for 60,000 deaths each year.
        The latest data from the World Health Organization (WHO) predicts that
        annual deaths from melanoma will increase to 100,000 by 2040. Melanoma
        is more common in light skin people than in dark skin people. Dark skin
        people have more eumelanin while light skin people have more
        pheomelanin. While eumelanin has the ability to protect the skin from
        sun damage, pheomelanin does not. That&apos;s why people with darker
        skin are at lower risk for developing skin cancer than light skin people
        who are more susceptible to sun damage, burning and skin cancer.
        However, skin cancer can happen to anyone, regardless of skin tone.
        Melanoma frequently develops in a mole or suddenly appears as a new dark
        spot on the skin, since DNA damage from sunburns or tanning due to UV
        radiation triggers changes (mutations) in the skin cells; melanocytes,
        resulting in uncontrolled cellular growth. While Melanoma can arise
        nearly anywhere on the body, it is most likely to appear on the torso in
        men, the legs in women and the upper back in both. Melanoma is usually
        curable when detected and treated early. Once it has spread deeper into
        the skin or other parts of the body, it becomes more difficult to treat
        and can be deadly.
      </>
    ),
  },
];

export default function ThreeTypesOfSkinCancer() {
  return (
    <section className="bg-background-secondary py-24 xl:py-32">
      <div className="container flex  flex-col items-center justify-center  gap-12  xl:container xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="mx-auto flex w-min flex-col gap-4">
            <h2 className="whitespace-nowrap text-left text-xl font-bold leading-6 text-primary xl:text-3xl xl:leading-10">
              Three types of skin cancer
            </h2>
            <div className=" h-[2px] w-full bg-primary " />
          </div>

          <div className="mt-6 flex max-w-4xl flex-col items-center space-y-6">
            <p className="text-left text-lg font-normal leading-7  text-on-bg-primary ">
              <b>Skin cancer</b> is the world&apos;s most common cancer. Every
              year, 125,000 people die of skin cancer, which is equivalent to
              one person dying from the disease every four minutes. There are
              two main types of skin cancer: Non-melanoma skin cancer and
              Melanoma skin cancer. Non- melanoma skin cancer includes: Basal
              Cell Carcinoma (BCC), Squamous Cell Carcinoma (SCC) and some other
              rare types. Melanoma skin cancer is different since it develops
              from skin cells called melanocytes. Hence, the type of skin cancer
              a person gets is determined by where the cancer begins.
            </p>
            <div className=" flex h-auto items-center justify-center">
              <Image
                src="/images/skin-cancer/skin_cancer_divider.png"
                alt="Doctor examining patient"
                width={600}
                height={0}
                className="rounded-md object-cover"
              />
            </div>
            {skinCancers.map((skinCancer, index) => (
              <SkinCancer key={index} {...skinCancer} />
            ))}
            <div className="relative max-w-[600px] rounded-xl py-20 px-12">
              <Image
                src={"/images/skin-cancer/gloves.png"}
                alt="Image of dermalyser in use"
                fill
                className={"z-0 rounded-xl object-cover"}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-0 rounded-xl bg-gradient-to-b from-primary/[0.85] to-primary/[0.42]"></div>
              <div className="flex  flex-col items-center justify-center space-y-6">
                <p className="relative text-center text-lg font-bold leading-8 text-on-primary">
                  Although malignant melanoma accounts for only a small
                  percentage of skin cancer, it is far more dangerous than other
                  skin cancers and is the leading cause of death from skin
                  disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
