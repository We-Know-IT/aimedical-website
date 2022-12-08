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
      <div className="flex items-center m-auto w-full h-full flex-col pt-24 bg-white xl:w-4/6 xl:h-5/6 xl:justify-evenly xl:flex-row xl:p-0 xl:bg-transparent">
        {/* flex box */}
        <div className="h-2/3 flex justify-center justify-self-start gap-10 flex-col w-full bg-white px-4 xl:w-1/2 xl:bg-transparent">
          {/* left box */}
          <h2 className="text-blue-100 xl:text-5xl font-semibold text-3xl">
            {title}
          </h2>
          <p className="text-2xl tracking-wider">{text}</p>
          <ActionButton onClick={actionButton && actionButton.onClick}>
            {actionButton && actionButton.text}
          </ActionButton>
        </div>
        <div
          className="xl:w-1/2 h-full rounded-lg flex gap-y-6 px-4 py-10 justify-center flex-col w-full xl:items-center xl:justify-evenly xl:gap-y-0"
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
                  <h3 className="text-2xl xl:font-medium text-white py-2 xl:text-3xl">
                    {data.title}
                  </h3>
                  <p className="text-lg text-white tracking-wide xl:text-xl">
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
