import { CSSProperties } from "react";
import ActionButton from "../actionButton";
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
    <div className="w-full h-5/6 bg-white">
      {/* Container */}
      <div className="w-4/6 h-5/6 flex justify-evenly items-center m-auto p-8">
        {/* flex box */}
        <div
          className="w-2/5 h-full flex justify-center flex-col  bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/' + image + '")' }}></div>
        <div className="w-3/5 h-full bg-gradient-to-r from-blue-100 to-blue-50 rounded-r-lg flex justify-center items-center">
          <div className="w-2/3">
            <h2 className="text-3xl font-semibold text-white py-4">{title}</h2>
            <p className="text-lg text-white tracking-wide py-4"> {text}</p>
            <ActionButton onClick={actionButton && actionButton.onClick}>
              {actionButton && actionButton.text}
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
