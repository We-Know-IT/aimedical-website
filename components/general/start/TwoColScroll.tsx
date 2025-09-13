import { LinkButton, Button } from "../Button";
import Image from "next/image";
import Typography from "../../common/Typography";
import { useRef, useEffect, useState } from "react";
type Props = {
  title?: React.ReactNode | string;
  text?: string;
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
  scrollImages?: {
    src: string;
    alt: string;
  }[];
  scrollRows?: {
    title: string;
    text: string;
  }[];
};

export default function TwoColScroll({ title, text, actionButton, list, video, scrollImages, scrollRows }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Scroll effect for color transitions and image changes
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only trigger when element is in view
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInView) {
          // Calculate scroll progress (0 to 1) - mobile optimized
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          const viewportTop = windowHeight * 0.6; // Start when 80% of viewport is above element
          const viewportBottom = windowHeight * 0.10; // End when 25% of viewport is above element
          
          // Calculate progress with more aggressive range
          const progress = Math.max(0, Math.min(1, (viewportTop - elementTop) / (viewportTop - viewportBottom)));
          
          setScrollProgress(progress);
          
          // Calculate which image should be active based on scroll progress
          if (scrollImages && scrollImages.length > 0) {
            const imageIndex = Math.floor(progress * scrollImages.length);
            setActiveImageIndex(Math.min(imageIndex, scrollImages.length - 1));
          }
        } else {
          // Reset when not in view
          setScrollProgress(0);
          setActiveImageIndex(0);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add both scroll and touchmove events for better mobile support
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('touchmove', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('touchmove', throttledHandleScroll);
    };
  }, [scrollImages]);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    
    if (video && overlay) {
      const handlePause = () => {
        video.controls = false;
        overlay.classList.remove('hidden');
      };
      
      const handlePlay = () => {
        video.controls = true;
        overlay.classList.add('hidden');
      };
      
      video.addEventListener('pause', handlePause);
      video.addEventListener('play', handlePlay);
      
      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('play', handlePlay);
      };
    }
  }, [video]);
  
  // Fallback content if no scrollRows provided
  if (!scrollRows || scrollRows.length === 0) {
    return (
      <section className="py-20 min-h-screen">
        <div className="container">
          <Typography variant="h2" className="text-center text-darkblue font-haasGrotDisplay font-bold">
            No content provided
          </Typography>
        </div>
      </section>
    );
  }

  return (
    /* Container */
    <section ref={scrollContainerRef} className="min-h-[40vh] pb-10">
      {/* Container */}
      <div className="container flex flex-col gap-4 xl:flex-row xl:gap-6">
        {/* Left side - Changing PNG */}
        <div className="bg-beige rounded-xl flex-1 flex items-center justify-center xl:sticky xl:top-20">
          {scrollImages && scrollImages.length > 0 ? (
            <div className="relative w-full h-64 xl:h-80">
              {scrollImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === activeImageIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-64 xl:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <Typography variant="p" className="text-gray-500 font-haasGrotDisplay">
                No images provided
              </Typography>
            </div>
          )}
        </div>

        {/* Right side - Triple row flexbox */}
        <div className="flex-1 space-y-4">
          {scrollRows.map((row, index) => {
            // Calculate color transition based on scroll progress
            const rowProgress = Math.max(0, Math.min(1, (scrollProgress - (index * 0.33)) / 0.33));
            const isActive = rowProgress > 0.5;
            
            return (
              <div
                key={index}
                className={`p-8 rounded-xl transition-colors duration-500 ease-in-out ${
                  isActive 
                    ? 'bg-beige-active'
                    : 'bg-background-secondary'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                      {index === 0 && (
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-500">
                        <path d="M48.4166 30.9167C48.4166 42.1867 39.27 51.3333 28 51.3333C16.73 51.3333 7.58331 42.1867 7.58331 30.9167C7.58331 19.6467 16.73 10.5 28 10.5C39.27 10.5 48.4166 19.6467 48.4166 30.9167Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isActive ? 'stroke-darkblue-active' : 'stroke-darkblue'}/>
                        <path d="M28 18.6665V30.3332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isActive ? 'stroke-darkblue-active' : 'stroke-darkblue'}/>
                        <path d="M21 4.6665H35" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className={isActive ? 'stroke-darkblue-active' : 'stroke-darkblue'}/>
                        </svg>
                      )}
                    {index === 1 && (
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-500">
                        <path d="M56 5.87102C56 4.69642 55.5429 3.59252 54.7127 2.76372C52.9991 1.04942 50.211 1.05082 48.4967 2.76372L17.0856 34.1755C16.6061 34.655 16.4031 35.3284 16.492 35.9892L0.276471 52.2047C0.0510712 52.4301 -0.0462288 52.7542 0.0209712 53.0671C0.0881712 53.38 0.307271 53.6362 0.604071 53.7517C0.758771 53.8112 2.66627 54.5224 5.24507 54.5224C7.82387 54.5224 11.0089 53.8231 13.8173 51.0959L20.531 44.3808C20.7536 44.1582 20.8502 43.839 20.7886 43.5296L20.2776 40.9725L22.4504 38.799L22.7843 38.876C23.0153 38.9299 23.2477 38.9551 23.478 38.9551C24.2781 38.9551 25.0495 38.6415 25.6319 38.0584L51.0769 12.6141L51.0776 12.6134L54.712 8.97902C55.5422 8.14882 55.9993 7.04492 55.9993 5.87032L56 5.87102ZM47.0176 14.0092L44.7986 9.12742L49.8302 4.09582C50.3202 3.60652 50.9621 3.36222 51.6061 3.36222C52.2501 3.36222 52.8906 3.60652 53.3806 4.09582C53.8545 4.56972 54.1156 5.20042 54.1156 5.87032C54.1156 6.54022 53.8538 7.17232 53.3792 7.64622L47.0169 14.0085L47.0176 14.0092ZM20.286 38.2999L18.5885 39.9967C18.3659 40.2193 18.2693 40.5385 18.3309 40.8479L18.8419 43.405L12.4957 49.7533C9.08247 53.0664 4.92727 52.8277 2.75657 52.3916L17.5623 37.5859C17.5679 37.5887 17.5749 37.5894 17.5805 37.5922C17.7499 37.6846 17.934 37.756 18.1272 37.8015L20.2867 38.2999H20.286ZM43.3748 10.5519L45.5938 15.4337L24.3005 36.727C24.0142 37.0147 23.6089 37.1323 23.2092 37.0399L18.5514 35.9647C18.5024 35.9535 18.473 35.929 18.4436 35.9045C18.4226 35.8863 18.4009 35.8674 18.382 35.8345C18.3715 35.8149 18.3554 35.7939 18.3498 35.775C18.3302 35.705 18.3253 35.6014 18.4184 35.5076L43.3741 10.5526L43.3748 10.5519Z" fill="currentColor" className={isActive ? 'fill-darkblue-active' : 'fill-darkblue'}/>
                        </svg>
                      )}
                    {index === 2 && (
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-500">
                        <path d="M27.93 51.3332C40.8166 51.3332 51.2633 40.8865 51.2633 27.9998C51.2633 15.1132 40.8166 4.6665 27.93 4.6665C15.0433 4.6665 4.59662 15.1132 4.59662 27.9998C4.59662 40.8865 15.0433 51.3332 27.93 51.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isActive ? 'stroke-darkblue-active' : 'stroke-darkblue'}/>
                        <path d="M28.0001 37.8699C33.4511 37.8699 37.8701 33.4509 37.8701 27.9999C37.8701 22.5488 33.4511 18.1299 28.0001 18.1299C22.549 18.1299 18.1301 22.5488 18.1301 27.9999C18.1301 33.4509 22.549 37.8699 28.0001 37.8699Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className={isActive ? 'stroke-darkblue-active' : 'stroke-darkblue'}/>
                        </svg>
                      )}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <Typography 
                      variant="h3" 
                      className={`font-haasGrotDisplay font-medium text-sm mb-2 ${
                        isActive 
                          ? 'text-darkblue-active'
                          : 'text-darkblue'
                      }`}
                    >
                      {row.title}
                    </Typography>
                    <Typography 
                      variant="p" 
                      className={`font-haasGrotDisplay font-light text-sm ${
                        isActive 
                          ? 'text-darkblue-active'
                          : 'text-darkblue'
                      }`}
                    >
                      {row.text}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
