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
    <div className="w-full h-5/6 bg-gray-100 flex align-center">
      {/* Container */}
      <div className="w-4/6 h-5/6 flex justify-evenly items-center m-auto p-8">
        {/* flex box */}
        <div className="w-1/2 h-2/3 flex justify-center justify-self-start gap-10 flex-col">
          {/* left box */}
          <h2 className="text-blue-100 text-5xl font-semibold">{title}</h2>
          <p className="text-2xl tracking-wider">{text}</p>
          <ActionButton onClick={actionButton && actionButton.onClick}>
            {actionButton && actionButton.text}
          </ActionButton>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex justify-evenly items-center flex-col">
          {list &&
            list.map((data) => (
              <div className="w-2/3 flex justify-center" key={data.title}>
                <div
                  className="w-1/5 h-full"
                  style={{
                    backgroundImage: "url('/images/" + data.img + "')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                  }}></div>
                <div className="w-4/5">
                  <h3 className="text-2xl font-semibold text-white py-2">
                    {data.title}
                  </h3>
                  <p className="text-lg text-white tracking-wide">
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
