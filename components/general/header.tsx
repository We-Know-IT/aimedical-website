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
        "relative bg-cover w-full " + (fullHeight ? "h-[100vh]" : "h-[600px]")
      }
      style={backgroundImageStyle}>
      <div className="container flex flex-col justify-center h-full">
        <>
          <div className="bg-gradient-to-r from-blue-85 absolute top-0 bottom-0 left-0 right-0"></div>
          {title && (
            <>
              <h2 className="relative font-bold text-color-on-blue text-xl">
                {title}
              </h2>
              <div className="h-1 relative my-4 w-24 rounded bg-gray-800"></div>
            </>
          )}
          {text &&
            (typeof text == "string" ? (
              <p className="relative text-color-on-blue text-2xl lg:text-3xl font-bold whitespace-pre-wrap mb-6">
                {text}
              </p>
            ) : (
              { ...text }
            ))}

          {actionButton && (
            <Button className="relative z-1" onClick={actionButton.onClick}>
              {actionButton.text}
            </Button>
          )}
        </>
      </div>
    </header>
  );
}
