import Link from "next/link";
import { CSSProperties, useEffect } from "react";
import Button from "./Button_t";

type Props = {
  title?: string;
  text?: string | React.ReactElement;
  content?: React.ReactElement;
  imageUrl: string;
  fullHeight?: boolean;
  actionButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
};

const buttonStyles = "z-1 relative";

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
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary/[0.85]"></div>
        <div className="animate-focus-in">
          {title && (
            <div className="w-fit">
              <h2 className="relative w-fit text-xl font-bold text-on-primary">
                {title}
              </h2>
              <div className="relative my-4 h-1 w-3/4 rounded bg-gray-800"></div>
            </div>
          )}
          {text &&
            (typeof text == "string" ? (
              <p className="relative mb-6 whitespace-pre-wrap text-lg font-bold text-on-primary sm:text-xl lg:w-1/2 lg:text-2xl">
                {text}
              </p>
            ) : (
              { ...text }
            ))}

          {actionButton &&
            (actionButton.href ? (
              <Link href={actionButton.href}>
                <Button className={buttonStyles} onClick={actionButton.onClick}>
                  {actionButton.text}
                </Button>
              </Link>
            ) : (
              <Button className={buttonStyles} onClick={actionButton.onClick}>
                {actionButton.text}
              </Button>
            ))}
        </div>
      </div>
    </header>
  );
}
