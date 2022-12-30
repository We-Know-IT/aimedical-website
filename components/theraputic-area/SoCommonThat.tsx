import CircleDiagram from "./CircleDiagram";

export default function SoCommonThat() {
  return (
    <section className="bg-background-primary">
      <div className="container max-w-xl xl:container">
        <div className="mx-auto flex  scale-y-110 flex-col gap-4 rounded-[20px] bg-background-primary px-4 py-24 shadow-md  sm:px-6">
          <h2 className="scale-y-[0.9] text-center  text-xl font-bold leading-6 text-primary md:scale-y-[0.8] md:text-3xl md:leading-10">
            So common that:
          </h2>

          <div className="mx-auto flex flex-col items-center  justify-center md:flex-row">
            <CircleDiagram
              svgClasses="scale-y-[0.9] flex-2 translate-x-1/5  md:translate-x-1/3"
              radius={50}
              textClasses=" font-bold text-lg text-xl "
              text="> 50%"
              fillPercentage={55}
            />

            <p className="mx-auto flex-1 scale-y-[0.9] text-center text-lg font-normal leading-7 text-on-bg-primary md:max-w-sm">
              More than half of all Americans who live to age 65 will develop
              some form of skin cancer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
