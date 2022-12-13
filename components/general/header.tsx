import { CSSProperties } from "react";
import Button from "./button";
import Navbar from "./navbar";

type Props = {
  title?: string;
  text?: string | React.ReactElement;
  content?: React.ReactElement;
  imageUrl: string;
  fullHeight?: boolean;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
};

export default function Header({
  title,
  text,
  actionButton,
  imageUrl,
  fullHeight,
}: Props) {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <header
      className={
        "relative w-full bg-cover " + (fullHeight ? "h-[100vh]" : "h-[600px]")
      }
      style={backgroundImageStyle}>
      <div className="container flex h-full flex-col justify-center">
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-85"></div>
          {title && (
            <>
              <h2 className="relative text-xl font-bold text-color-on-blue">
                {title}
              </h2>
              <div className="relative my-4 h-1 w-24 rounded bg-gray-800"></div>
            </>
          )}
          {text &&
            (typeof text == "string" ? (
              <p className="relative mb-6 whitespace-pre-wrap text-2xl font-bold text-color-on-blue lg:text-3xl">
                {text}
              </p>
            ) : (
              { ...text }
            ))}

          {actionButton && (
            <Button className="z-1 relative" onClick={actionButton.onClick}>
              {actionButton.text}
            </Button>
          )}
        </>
      </div>
    </header>
  );
}
