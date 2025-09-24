import { LinkButton, Button } from "../Button";
import Image from "next/image";
import Typography from "../../common/Typography";
import { useRef, useEffect } from "react";
type Props = {
  title?: React.ReactNode | string;
  titleClassName?: string;
  text?: string;
  textClassName?: string;
  actionButton?: {
    children: React.ReactNode | string;
    onClick?: () => void;
    href?: string;
  };
  list?: {
    title: string;
    text: string;
    img: string;
    imgAlt: string;
  }[];
  video?: {
    src: string;
    poster?: string;
    title?: string;
    controls?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
  };
};

export default function TwoColText({ title, titleClassName, text, textClassName, actionButton, list, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    
    if (video && overlay) {
      // Initial setup to ensure consistent sizing
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      
      const handlePause = () => {
        video.controls = false;
        overlay.classList.remove('hidden');
        // Ensure video maintains its size
        video.style.height = '100%';
        video.style.objectFit = 'cover';
      };
      
      const handlePlay = () => {
        video.controls = true;
        overlay.classList.add('hidden');
        // Ensure video maintains its size
        video.style.height = '100%';
        video.style.objectFit = 'cover';
      };
      
      video.addEventListener('pause', handlePause);
      video.addEventListener('play', handlePlay);
      
      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('play', handlePlay);
      };
    }
  }, [video]);
  
  return (
    /* Container */
    <section className="pb-10">
      {/* Container */}
      <div className="container flex flex-col items-center justify-between xl:flex-row xl:h-[440px] space-y-6 xl:space-y-0 gap-6">
        {/* flex box */}
        <div className="flex w-full flex-col justify-between rounded-xl bg-background-secondary px-8 py-12 space-y-12 lg:space-y-0 lg:items-start xl:w-1/2 xl:h-full order-2 xl:order-1">
          {/* left box */}
          {title && (
            <Typography variant="p" className={titleClassName || "text-darkblue-page-active font-robotoFlex font-normal"}>
              {title}
            </Typography>
          )}
          <div className="flex flex-col items-start">
            <Typography variant="p" className={textClassName || "mb-4 text-darkblue font-robotoFlex font-normal xl:text-lg"}>
              {text}
            </Typography>
            {actionButton && (actionButton.href || actionButton.onClick) &&
              (actionButton.href ? (
                <LinkButton
                  href={actionButton.href}
                  size="small"
                  className="flex items-center justify-center">
                  {actionButton.children}
                </LinkButton>
              ) : (
                <Button
                  onClick={actionButton.onClick}
                  size="small"
                  className="flex items-center justify-center">
                  {actionButton.children}
                </Button>
              ))}
          </div>
        </div>
        <div className="flex w-full flex-col justify-center rounded-xl lg:items-center lg:justify-evenly xl:w-1/2 xl:h-full order-1 xl:order-2">
          {/*  right box */}
          {video ? (
            <div className="w-full h-80 sm:h-96 lg:h-full relative">
              <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                title={video.title}
                controls={false}
                autoPlay={video.autoPlay}
                muted={true}
                loop={video.loop}
                playsInline
                className="w-full h-full object-cover rounded-lg absolute inset-0"
              >
                Your browser does not support the video tag.
              </video>
              {/* Custom play button overlay */}
              <div ref={overlayRef} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                <button
                  onClick={async (e) => {
                    if (videoRef.current && overlayRef.current) {
                      try {
                        // Ensure video is muted for autoplay
                        videoRef.current.muted = true;
                        await videoRef.current.play();
                        // Event listener will handle showing controls and hiding overlay
                      } catch (error) {
                        // Fallback: try to play without await
                        videoRef.current.play().catch(() => {});
                      }
                    }
                  }}
                  className="w-20 h-20 backdrop-blur-md bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-200 shadow-lg border border-white border-opacity-20"
                >
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : list ? (
            list.map((data) => (
              <div
                className="flex w-full justify-center space-x-2 mb-6 last:mb-0"
                key={data.title}>
                <div className="flex h-full w-[36px] flex-shrink-0 sm:w-[48px]">
                  <Image
                    src={"/images/" + data.img}
                    alt={data.imgAlt}
                    width={36}
                    height={36}
                    className=""
                  />
                </div>
                <div className="flex max-w-[300px] flex-col">
                  <Typography
                    variant="h3"
                    className="font-bold text-on-primary">
                    {data.title}
                  </Typography>
                  <Typography variant="p" className="text-on-primary">
                    {data.text}
                  </Typography>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
}
