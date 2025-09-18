import Image from "next/image";
import React, { CSSProperties, useState, useEffect } from "react";
import { LinkButton, Button } from "./Button";
import Typography from "../common/Typography";

type Props = {
  title?: string;
  text?: string | React.ReactElement;
  content?: React.ReactElement;
  imageUrl: string;
  imageAlt?: string;
  fullHeight?: boolean;
  actionButton?: {
    children: React.ReactElement | string;
    onClick?: () => void;
    href?: string;
  };
  imagePosition?: string;
};

const buttonStyles = "z-1 relative flex justify-center items-center w-fit font-haasGrotDisplay font-extralight text-sm px-7 py-3";

export default function Header({
  title,
  text,
  actionButton,
  imageUrl,
  imageAlt,
  fullHeight,
  imagePosition = "center",
}: Props) {
  const cyclingTexts = [
    "From doubt to diagnosis - guides clinical decision.",
    "Detect melanoma earlier, Reduce referrals, Improve clinical outcomes.",
    "Smarter, Safe, Faster skin cancer detection."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousTextIndex, setPreviousTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousTextIndex(currentTextIndex);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % cyclingTexts.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <header
      className="relative h-[70vh] max-h-[55vh] w-full pt-32 pb-12"
      id="header">
      <div className="container flex h-full justify-center">
        <div className="relative w-full overflow-hidden rounded-xl xl:container xl:max-w-none">
          <Image
            src={imageUrl}
            alt={imageAlt || "Header image"}
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
            <div className="animate-focus-in">
              {title && (
                <div className="flex flex-col items-center">
                  <Typography
                    variant="h1"
                    className="relative font-haasGrot font-extralight text-on-primary text-center">
                    {title}
                  </Typography>
                  <div className="relative mb-4 mt-2 h-1 w-full max-w-xs rounded bg-darkblue-hover"></div>
                </div>
              )}
              {/* Static Dermalyser text */}
              <div className="flex justify-center w-full mb-0">
                <Typography
                  variant="p"
                  className="text-on-primary text-[12px] lg:text-[14px] font-haasGrotDisplay font-thin tracking-wider">
                  Dermalyser
                </Typography>
              </div>
              
              {/* Cycling text */}
              <div className="relative mb-6 h-16 flex items-center justify-center w-full max-w-4xl px-8">
                <Typography
                  variant="p"
                  className={`whitespace-pre-wrap text-[16px] text-on-primary lg:text-[20px] transition-all duration-500 text-center w-full font-haasGrot font-extralight ${
                    isTransitioning 
                      ? 'opacity-0 transform translate-y-4' 
                      : 'opacity-100 transform translate-y-0'
                  }`}>
                  {cyclingTexts[currentTextIndex]}
                </Typography>
              </div>

              {actionButton && (
                <div className="flex justify-center w-full">
                  {actionButton.href ? (
                    <LinkButton
                      className={buttonStyles}
                      href={actionButton.href}
                      intent="primary">
                      {actionButton.children}
                    </LinkButton>
                  ) : (
                    <Button
                      className={buttonStyles}
                      onClick={actionButton.onClick}
                      intent="primary">
                      {actionButton.children}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
