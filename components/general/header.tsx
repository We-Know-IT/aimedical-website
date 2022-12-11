import { CSSProperties } from "react";
import ActionButton from "./actionButton";
import Navbar from "./navbar";

type Props = {
  title?: string;
  text?: string;
  imageUrl: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
};

export default function Header({ title, text, actionButton, imageUrl }: Props) {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <header
      className="relative h-[70vh] bg-cover w-full"
      style={backgroundImageStyle}>
      <div className="md:container md:mx-auto flex flex-col justify-center h-full px-5">
        <div className="bg-gradient-to-r from-blue-85 absolute top-0 bottom-0 left-0 right-0"></div>
        {title && (
          <>
            <h2 className="relative font-bold text-color-on-blue text-xl">
              {title}
            </h2>
            <div className="h-1 relative my-4 w-24 rounded bg-gray-800"></div>
          </>
        )}
        {text && (
          <p className="relative text-color-on-blue md:text-3xl text-2xl font-bold">
            {text}
          </p>
        )}
        {actionButton && (
          <ActionButton onClick={actionButton.onClick}>
            {actionButton.text}
          </ActionButton>
        )}
      </div>
    </header>
  );
}
