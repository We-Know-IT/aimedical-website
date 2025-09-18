import Image from "next/image";
import Typography from "../common/Typography";
import { useState, useRef } from "react";

type Props = {
  title?: React.ReactNode | string;
  text?: string;
  videoPopup?: {
    buttonText: string;
    videoSrc?: string;  // For local video files
    videoUrl?: string;  // For external URLs (YouTube, Vimeo, etc.)
    videoTitle?: string;
  };
  list?: {
    title: string;
    text: string;
    img: string;
    imgAlt: string;
  }[];
  image?: {
    src: string;
    alt: string;
    quality?: number;
  };
  leftColumnClassName?: string;
  leftColumnImageClassName?: string;
};

export default function TwoColText({ title, text, videoPopup, list, image, leftColumnClassName, leftColumnImageClassName }: Props) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openVideo = () => {
    setIsVideoOpen(true);
    setShowPlayOverlay(true);
  };
  
  const closeVideo = () => {
    setIsVideoOpen(false);
    setShowPlayOverlay(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Container */}
            <div className="relative w-full h-auto">
              {videoPopup?.videoUrl ? (
                <iframe
                  src={videoPopup.videoUrl}
                  title={videoPopup?.videoTitle || "Video"}
                  className="w-full aspect-video border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={videoPopup?.videoSrc}
                    controls={!showPlayOverlay}
                    className="w-full h-auto max-h-[80vh] object-contain"
                    title={videoPopup?.videoTitle || "Video"}
                    onPlay={() => {
                      setShowPlayOverlay(false);
                      if (overlayRef.current) {
                        overlayRef.current.style.display = 'none';
                      }
                    }}
                    onPause={() => {
                      setShowPlayOverlay(true);
                      if (overlayRef.current) {
                        overlayRef.current.style.display = 'flex';
                      }
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Play Button Overlay */}
                  {showPlayOverlay && (
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
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeVideo}
        />
      )}

      {/* Container */}
      <section className="pb-10">
      {/* Container */}
      <div className="container flex flex-col items-center justify-between xl:flex-row xl:h-[400px] space-y-6 xl:space-y-0 xl:gap-6">
        <div className="flex w-full flex-col justify-center bg-beige rounded-xl lg:items-center lg:justify-evenly xl:w-1/2 xl:h-full">
          {/*  left box - static image */}
          {image ? (
            <div className={leftColumnClassName ||"w-full h-full relative"}>
              <Image
                src={"/images/" + image.src}
                alt={image.alt}
                width={600}
                height={400}
                quality={image.quality || 100}
                className={leftColumnImageClassName || "w-full h-full object-cover rounded-lg"}
              />
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
        {/* flex box */}
        <div className="flex w-full flex-col justify-between rounded-xl bg-background-secondary px-8 py-12 space-y-12 lg:items-start xl:w-1/2 xl:h-full">
          {/* right box */}
          <Typography variant="p" className="text-darkblue-page-active font-haasGrotDisplay font-thin">
            {title}
          </Typography>
          <div className="flex flex-col items-start">
            <Typography variant="p" className="mb-4 text-darkblue font-haasGrotDisplay font-extralight text-base">
              {text}
            </Typography>
            
            {/* Video Popup Button */}
            {videoPopup && (
              <button
                onClick={openVideo}
                className="flex items-center justify-center bg-primary text-white hover:bg-primary-hover active:bg-primary-active rounded-full px-6 py-3 font-haasGrotDisplay font-extralight transition-colors cursor-pointer"
              >
                {videoPopup.buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
