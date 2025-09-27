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

const buttonStyles = "z-1 relative flex justify-center items-center w-fit font-robotoFlex text-sm";

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
    "From doubt to diagnosis -\nguides clinical decision",
    "Detect melanoma earlier, \nreduce referrals, improve\nclinical outcomes",
    "Smarter, safe, faster\nskin cancer detection"
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
        }, 100);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <header
      className="relative h-[65vh] lg:h-[85vh] max-h-[85vh] 2xl:max-h-[85vh] w-full pt-28 pb-12"
      id="header">
      <div className="container flex h-full justify-center">
        <div className="relative w-full overflow-hidden rounded-xl xl:container xl:max-w-none">
          <Image
            src={imageUrl}
            alt={imageAlt || "Header image"}
            fill
            className="object-cover animate-zoom-slow"
            style={{ objectPosition: imagePosition }}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 50%, transparent 100%)'
            }}
          />
          <div className="relative flex h-full flex-col items-bottom lg:items-start justify-center lg:justify-end p-4 lg:p-8 text-center lg:text-left z-20">
            <div className="animate-focus-in">
              {title && (
                <div className="flex flex-col items-center lg:items-start">
                  <Typography
                    variant="h1"
                    className="relative font-robotoFlex font-normal text-on-primary text-left">
                    {title}
                  </Typography>
                  <div className="relative mb-4 mt-2 h-1 w-full max-w-xs rounded bg-darkblue-hover"></div>
                </div>
              )}

              {/* Cycling text */}
              <div className="relative mb-4 flex items-end lg:items-end justify-center lg:justify-start w-full max-w-4xl px-0 lg:px-0 min-h-[120px] lg:min-h-[140px]">
                <Typography
                  variant="p"
                  className={`whitespace-pre-wrap text-[24px] leading-[26px] text-on-primary lg:text-[36px] lg:leading-[42px] transition-all duration-1000 text-center lg:text-left w-full font-robotoFlex font-normal ${
                    isTransitioning 
                      ? 'opacity-0 transform -translate-y-8' 
                      : 'opacity-100 transform translate-y-0'
                  }`}>
                  {cyclingTexts[currentTextIndex]}
                </Typography>
              </div>

              {actionButton && (
                <div className="flex justify-center lg:justify-start w-full mb-6 md:mb-8">
                  {actionButton.href ? (
                    <LinkButton
                      className={buttonStyles}
                      href={actionButton.href}
                      intent="transparent">
                      {actionButton.children}
                    </LinkButton>
                  ) : (
                    <Button
                      className={buttonStyles}
                      onClick={actionButton.onClick}
                      intent="transparent"
                      size="small">
                      
                      {actionButton.children}

                    </Button>
                    
                  )}
                </div>
              )}
                             {/* Three dots indicator */}
                             <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                {cyclingTexts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                      index === currentTextIndex ? 'bg-cyan' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
