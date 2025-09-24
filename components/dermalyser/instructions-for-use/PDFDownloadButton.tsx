import { useState } from "react";
import { Button } from "../../general/Button";
import { FiExternalLink } from "react-icons/fi";

interface PDFListProps {
  pdfFiles: string[];
  directory: string;
  buttonText?: string;
  className?: string;
}

// Will use the first pdf in the list as the selected pdf
const PDFDownloadButton: React.FC<PDFListProps> = ({ pdfFiles, directory, buttonText, className }) => {
  const [selectedPdf] = useState<string>(pdfFiles[0]);

  const handleOpenPDF = () => {
    // Use window.open to maintain favicon context better
    const pdfUrl = `/${directory}/${selectedPdf}`;
    const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <button
      onClick={handleOpenPDF}
      className={className || "flex items-center justify-center sm:w-fit bg-white border border-primary text-primary hover:border-darkblue hover:bg-darkblue hover:text-white rounded-full px-6 py-3 font-robotoFlex font-extralight transition-colors cursor-pointer disabled:opacity-50"}>
      {buttonText || "Open PDF"} 
    </button>
  );
};

export default PDFDownloadButton;
