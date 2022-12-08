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
    <div className="w-full bg-white px-2 py-24 flex xl:justify-evenly xl:p-0 xl:h-5/6">
      {/* Container */}
      <div className="w-full h-full flex m-auto flex-col xl:w-4/6 xl:h-5/6 xl:justify-evenly xl:items-center xl:flex-row">
        {/* flex box */}
        <div
          className="w-full pt-[100%] md:pt-[50%] flex flex-col bg-cover bg-center rounded-t-lg xl:rounded-l-lg xl:rounded-tr-none xl:w-2/5 xl:h-full xl:justify-center xl:flex-row"
          style={{ backgroundImage: 'url("/images/' + image + '")' }}></div>
        <div
          className="h-full flex items-center w-full rounded-b-lg xl:w-3/5  xl:rounded-r-lg xl:rounded-b-none xl:justify-center" /*bg-gradient-to-r from-blue-100 to-blue-50*/
          style={{
            background:
              "linear-gradient(108.85deg, #0063AF 0%, rgba(0, 99, 175, 0.5) 120%);",
          }}>
          <div className="xl:w-2/3 w-full py-8 flex flex-col px-6">
            <h2 className="text-3xl font-semibold text-white py-4">{title}</h2>
            <p className="text-lg text-white tracking-wide py-4"> {text}</p>
            <ActionButton
              onClick={actionButton && actionButton.onClick}
              className="w-full font-medium xl:w-auto">
              {actionButton && actionButton.text}
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
