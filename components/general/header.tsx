import { CSSProperties } from "react";

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
      className="relative h-5/6 bg-cover px-5 md:px-40"
      style={backgroundImageStyle}>
      {/* I väntan på elias navigation har jag en dumb div här  */}
      <nav className="h-2/6"></nav>
      <div className="bg-gradient-to-r from-blue-85 to- w-screen absolute top-0 bottom-0 left-0 right-0 "></div>
      {title && (
        <h2 className="relative font-bold text-color-on-blue text-xl">
          {title}
        </h2>
      )}
      {title && <div className="h-1 bg-black relative my-4 w-24"></div>}
      {text && (
        <p className="text-color-on-blue md:text-3xl text-2xl relative font-bold">
          {text}
        </p>
      )}
      {actionButton && (
        <button onClick={actionButton.onClick}>{actionButton.text}</button>
      )}
    </header>
  );
}
