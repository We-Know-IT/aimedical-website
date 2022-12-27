import { CSSProperties, useEffect } from "react";
import Button from "./button";

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
    backgroundImage: `url("/images/blur.jpg")`,
  };
  useEffect(() => {
    const src = imageUrl;
    const header = document.getElementById("header");
    if (header != null) {
      var image = new Image();
      image.addEventListener("load", function () {
        header.style.backgroundImage = "url(" + src + ")";
      });
      image.src = src;
    }
  });

  return (
    <header
      className={
        "relative w-full bg-cover " + (fullHeight ? "h-[100vh]" : "h-[600px]")
      }
      style={backgroundImageStyle}
      id="header">
      <div className="container flex h-full flex-col justify-center">
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary/[0.85]"></div>
          {title && (
            <>
              <h2 className="relative animate-focus-in text-xl font-bold text-on-primary">
                {title}
              </h2>
              <div className="relative my-4 h-1 w-24 rounded bg-gray-800"></div>
            </>
          )}
          {text &&
            (typeof text == "string" ? (
              <p className="relative mb-6 max-w-xl animate-focus-in whitespace-pre-wrap text-2xl font-bold text-on-primary lg:text-3xl">
                {text}
              </p>
            ) : (
              { ...text }
            ))}

          {actionButton && (
            <Button
              className="z-1 relative active:bg-background-accent active:text-on-bg-accent"
              onClick={actionButton.onClick}>
              {actionButton.text}
            </Button>
          )}
        </>
      </div>
    </header>
  );
}
