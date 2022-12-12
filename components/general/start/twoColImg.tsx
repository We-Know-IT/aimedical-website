import { CSSProperties } from "react";
import ActionButton from "../actionButton";
import Image from "next/image";
type Props = {
  title?: string;
  text?: string;
  image?: string;
  actionButton: {
    text: string;
    onClick: () => void;
  };
};
export default function TwoColImg({ title, text, actionButton, image }: Props) {
  return (
    <div className="lg:container lg:h-auto bg-white flex flex-wrap px-2 py-24 lg:justify-evenly">
      {/* Container */}
      <div className="flex flex-col items-center justify-center flex grow shrink-0 basis-full  lg:flex-row lg:py-0">
        {/* left box */}
        <div className="pt-[100%] relative h-full w-full items-stretch grow lg:w-2/5 lg:pt-0">
          <Image src={"/images/" + image} alt="Doctor crossed arms" fill className={"rounded-t-xl lg:rounded-r-none lg:rounded-l-xl"} />
        </div>
        {/* right box */}
        <div
          className="flex items-center py-12 lg:grow lg:items-stretch rounded-b-xl lg:w-3/5 lg:rounded-bl-none lg:rounded-r-xl lg:justify-center lg:py-52"
          style={{
            background:
              "linear-gradient(108.85deg, #0063AF 0%, rgba(0, 99, 175, 0.5) 120%);",
          }}>
          <div className="h-full w-full py-8 items-stretch flex flex-col px-6 lg:p-0 lg:w-2/3 xl:w-3/5">
            <h2 className="text-3xl font-semibold text-white py-4">{title}</h2>
            <p className="text-lg text-white tracking-wide py-4"> {text}</p>
            <ActionButton
              onClick={actionButton && actionButton.onClick}
              className="w-full font-medium lg:w-auto self-center !w-full lg:!w-auto lg:self-start">
              {actionButton && actionButton.text}
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
