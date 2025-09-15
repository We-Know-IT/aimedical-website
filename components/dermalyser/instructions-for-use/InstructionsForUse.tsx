import React from "react";
import IfuDownload from "./IfuDownload";
import Typography from "../../common/Typography";
import { useCookieConsent } from "../../../context/cookieConsent";
import VideoPlaceholder from "../../general/cookie-consent/VideoPlaceholder";
import PDFDownloadButton from "./PDFDownloadButton";

interface Props {
  engIfuPdfs: string[];
  sweIfuPdfs: string[];
  engPiPdfs: string[];
  engVugPdfs: string[];
}

export default function InstructionsForUse({ engIfuPdfs, sweIfuPdfs, engPiPdfs, engVugPdfs }: Props) {
  const { cookieConsent } = useCookieConsent();
  return (
    <section className="bg-background-secondary py-10" id="ifu">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col">
          <Typography variant="h2" className="sm:text-center">
            Instructions for use
          </Typography>
          {cookieConsent ? (
            <div className="mx-auto my-6 grid w-full grid-cols-1 justify-items-center gap-6 lg:max-w-6xl lg:grid-cols-2">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="h-full w-full"
                  title="Dermalyser User Guide - Version 1"
                  src="https://player.vimeo.com/video/1113571935"
                  allowFullScreen></iframe>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="h-full w-full"
                  title="Dermalyser User Guide - Version 2"
                  src="https://player.vimeo.com/video/1113572063"
                  allowFullScreen></iframe>
              </div>
            </div>
          ) : (
            <div className="mx-auto my-6 grid w-full grid-cols-1 gap-6 lg:max-w-6xl lg:grid-cols-2">
              <VideoPlaceholder className="w-full" />
              <VideoPlaceholder className="w-full" />
            </div>
          )}

          <Typography
            variant="p"
            className="max-w-sm sm:self-center sm:text-center">
            You can view the full list of instructions on how to use
            Dermalyser in English and Swedish below.
          </Typography>
        </div>
        <IfuDownload engIfuPdfs={engIfuPdfs} sweIfuPdfs={sweIfuPdfs} />
        
        <div className="flex flex-col items-center gap-4">
          <Typography variant="h3" className="text-center">
            Additional Resources
          </Typography>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center gap-2">
              <Typography variant="p" className="font-semibold">
                Visual User Guide
              </Typography>
              <PDFDownloadButton 
                pdfFiles={engVugPdfs} 
                directory="pdfs/vug/eng"
                buttonText="Open PDF"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Typography variant="p" className="font-semibold">
                Patient Information
              </Typography>
              <PDFDownloadButton 
                pdfFiles={engPiPdfs} 
                directory="pdfs/pi/eng"
                buttonText="Open PDF"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
