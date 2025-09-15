import Typography from "../common/Typography";
import CircleDiagram from "./CircleDiagram";

export default function SkinCancerPrevalence() {
  return (
    <section className="z-20 bg-background-primary">
      <div className="container max-w-xl xl:container">
        <div className="mx-auto -my-6 flex flex-col gap-4 rounded-[20px] bg-background-primary px-4 py-6 shadow-xl sm:px-6 sm:py-12">
          <Typography variant="h2" className="text-center">
            Skin Cancer Prevalence
          </Typography>

          <div className="mx-auto flex flex-col items-center justify-center gap-6 md:flex-row">
            <CircleDiagram
              svgClasses="flex scale-[0.9] "
              radius={50}
              textClasses="  "
              text="> 50%"
              fillPercentage={55}
            />

            <Typography
              variant="p"
              className="mx-auto flex-1 text-center font-semibold md:max-w-sm">
              More than half of all Americans who live to age 65 will develop
              some form of skin cancer
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
