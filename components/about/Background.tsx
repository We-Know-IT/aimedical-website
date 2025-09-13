import Image from "next/image";
import Typography from "../common/Typography";

export default function Background() {
  return (
    <section className="bg-background-secondary py-10">
      {/* <div className="container flex-col items-center gap-12   xl:flex-row xl:justify-between"> */}
      <div className="container flex max-w-2xl flex-col items-center justify-center space-y-12 xl:container xl:flex-row xl:space-y-0 xl:space-x-12">
        <div className="flex flex-col gap-6">
          <Typography variant="h2">Our Background</Typography>
          {/* <div className=" h-[2px] w-2/4 bg-primary " /> */}
          <Typography variant="p" className="mx-auto text-left">
            AI Medical Technology is a company operating in the
            interdisciplinary fields of Artificial Intelligence, software development, 
            Medicine and Life Sciences. Founded by a diverse team of driven, passionate tech
            entrepreneurs, software developers and clinicians, we are dedicated
            to developing AI powered diagnostic solutions that enable frontline
            healthcare practitioners to make easier, faster, more cost effective
            and more reliable diagnoses for their patients. <br /> <br />
            Having secured initial funding in 2021, we have now completed the clinical investigation for our first solution, Dermalyser. We are currently undergoing the CE marking process to bring the product to market.
          </Typography>
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
