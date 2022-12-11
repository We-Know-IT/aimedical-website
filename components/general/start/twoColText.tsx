import { CSSProperties } from "react";
import ActionButton from "../actionButton";
type Props = {
  title?: string;
  text?: string;
  actionButton: {
    text: string;
    onClick: () => void;
  };
  list?: {
    title: string;
    text: string;
    img: string;
  }[];
};

export default function TwoColText({ title, text, actionButton, list }: Props) {
  return (
    <div className="w-full bg-gray-100 flex px-2 pb-24 xl:h-5/6 xl:justify-evenly xl:p-0">
      {/* Container */}
      <div className="w-full h-full flex flex-col items-center gap-y-10 my-auto pt-24 xl:h-5/6 xl:justify-evenly xl:flex-row xl:p-0 xl:bg-transparent xl:container xl:gap-y-0">
        {/* flex box */}
        <div className="h-2/3 w-full flex justify-center justify-self-start gap-10 flex-col p-4 xl:bg-transparent xl:w-1/3">
          {/* left box */}
          <h2 className="text-3xl text-blue-100 font-semibold xl:text-4xl leading-snug">
            {title}
          </h2>
          <p className="text-lg tracking-wider font-semibold leading-snug">
            {text}
          </p>
          <ActionButton
            onClick={actionButton && actionButton.onClick}
            className={"hidden xl:inline-block"}>
            {actionButton && actionButton.text}
          </ActionButton>
        </div>
        <div
          className="h-full w-full rounded-lg flex gap-y-6 px-4 py-10 justify-center flex-col xl:items-center xl:justify-evenly xl:gap-y-0 xl:w-1/2"
          style={{
            background:
              "linear-gradient(314.06deg, #0063AF 0%, rgba(0, 99, 175, 0.5) 120%), #FFFFFF",
          }}>
          {/*  bg-gradient-to-r from-blue-50 to-blue-100*/}
          {list &&
            list.map((data) => (
              <div
                className="xl:w-2/3 flex justify-center w-full"
                key={data.title}>
                <div
                  className="w-1/5 h-full py-5 self-center bg-contain bg-center xl:bg-auto xl:bg-left"
                  style={{
                    backgroundImage: "url('/images/" + data.img + "')",
                    backgroundRepeat: "no-repeat",
                  }}></div>
                <div className="w-4/5">
                  <h3 className="text-2xl font-semibold text-white py-2 3xl:text-3xl">
                    {data.title}
                  </h3>
                  <p className="text-lg leading-snug text-white tracking-wide 3xl:text-xl">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
