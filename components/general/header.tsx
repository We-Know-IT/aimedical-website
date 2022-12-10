import { CSSProperties } from "react";
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
      className="relative py-40 px-5 md:px-40 h-5/6 bg-cover"
      style={backgroundImageStyle}>
      <div className="bg-gradient-to-r from-blue-85 absolute top-0 bottom-0 left-0 right-0"></div>
      {title && (
        <>
          <h2 className="relative font-bold text-color-on-blue text-xl">
            {title}
          </h2>
          <div className="h-1 relative bg-black my-4 w-24"></div>
        </>
      )}
      {text && (
        <p className="relative text-color-on-blue md:text-3xl text-2xl font-bold">
          {text}
        </p>
      )}
      {actionButton && (
        <button onClick={actionButton.onClick}>{actionButton.text}</button>
      )}
    </header>
  );
}
