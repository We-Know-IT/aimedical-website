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
      className="relative h-5/6 bg-cover px-6 md:px-48"
      style={backgroundImageStyle}>
      {/* I väntan på elias navigation har jag en dumb div här  */}
      <nav className="h-2/6"></nav>
      <div className="bg-gradient-to-r from-blue-85 to-transparent w-screen absolute top-0 bottom-0 left-0 right-0 "></div>
      {title && (
        <h2 className="relative font-bold text-color-secondary text-2xl">
          {title}
        </h2>
      )}
      {title && <div className="h-1 bg-black relative my-4 w-24"></div>}
      {text && (
        <p className="text-color-secondary text-4xl relative font-bold">
          {text}
        </p>
      )}
      {actionButton && (
        <button onClick={actionButton.onClick}>{actionButton.text}</button>
      )}
    </header>
  );
}
