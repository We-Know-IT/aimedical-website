import React from "react";
import Typography from "../../common/Typography";
import { useCookieConsent } from "../../../context/cookieConsent";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";

interface VideoPlaceholderProps {
  width?: string;
  className?: string;
}

export default function VideoPlaceholder({
  width = "600",
  className,
}: VideoPlaceholderProps) {
  const { setConsent } = useCookieConsent();
  return (
    <div
      className={twMerge(
        "mx-auto mb-4 flex aspect-video h-full w-full max-w-full flex-col items-center justify-center rounded-md bg-gray-100",
        className
      )}
      style={{ width }}>
      <Typography variant="p" className="w-full text-center">
        To be able to watch this video you need to allow third-party cookies.
      </Typography>
      <Button className="mt-4" onClick={() => setConsent(true)}>
        Allow third-party cookies
      </Button>
    </div>
  );
}
