import Image from "next/image";

export default function Background() {
  return (
    <section className="bg-background-secondary py-24 xl:py-32">
      {/* <div className="container flex-col items-center gap-12   xl:flex-row xl:justify-between"> */}
      <div className="container flex max-w-xl flex-col items-center justify-center space-y-12 xl:container xl:flex-row xl:space-y-0 xl:space-x-12">
        <div className="flex flex-col  gap-6">
          <h2 className="text-left text-xl font-bold leading-6 text-primary xl:text-3xl xl:leading-10">
            Our Background
          </h2>
          <div className=" h-[2px] w-2/4 bg-primary " />
          <p className="mx-auto text-left  text-lg font-normal  leading-7  text-on-bg-primary xl:max-w-2xl">
            AI Medical Technology is a company operating in the
            interdisciplinary fields of data science, software development, and
            medicine. Founded by a diverse team of driven, passionate tech
            entrepreneurs, software developers and clinicians, we are dedicated
            to developing AI powered diagnostic solutions that enable frontline
            healthcare practitioners to make easier, faster, more cost effective
            and more reliable diagnoses for their patients. <br /> <br />
            Having raised initial funding in 2021 we are now focussed on
            bringing our first solution, Dermalyser, through clinical trials and
            into market.
          </p>
        </div>

        <Image
          className="max-w-[250px] xl:max-w-none"
          height={250}
          width={250}
          alt="company logo"
          src={"/images/about/logo.svg"}
        />
      </div>
      {/* </div> */}
    </section>
  );
}
