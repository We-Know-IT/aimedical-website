import { CSSProperties } from "react";
import ActionButton from "./actionButton";

type Props = {
  title?: string;
  text?: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
};
const backgroundImageStyle: CSSProperties = {
  backgroundImage: "url(/images/header.png)",
};
export default function Header({ title, text, actionButton }: Props) {
  return (
    <header
      className="h-5/6 max-w-screen bg-cover px-6 md:px-48 bg-cover"
      style={backgroundImageStyle}>
      {/* I väntan på elias navigation har jag en dumb div här  */}
      <nav className="h-2/6"></nav>
      {
        //<div className="bg-gradient-to-r from-blue-85 to-transparent w-screen absolute top-0 bottom-0 left-0 right-0 "></div>
      }
      {title && (
        <h2 className="relative font-bold text-color-secondary text-2xl w-1/2">
          {title}
        </h2>
      )}
      <div className=" h-1 bg-black relative my-4 w-24"></div>
      {text && (
        <p className="text-color-secondary text-white text-4xl relative font-bold w-3/5">
          {text}
        </p>
      )}
      {actionButton && (
        <ActionButton onClick={actionButton.onClick}>
          {actionButton.text}
        </ActionButton>
      )}
    </header>
  );
}
