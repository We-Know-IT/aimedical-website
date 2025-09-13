import { useState } from "react";
import { Button } from "../../general/Button";
import { FiExternalLink } from "react-icons/fi";

interface PDFListProps {
  pdfFiles: string[];
  directory: string;
  buttonText?: string;
}

// Will use the first pdf in the list as the selected pdf
const PDFDownloadButton: React.FC<PDFListProps> = ({ pdfFiles, directory, buttonText }) => {
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
    <Button
      onClick={handleOpenPDF}
      className="flex items-center justify-center sm:w-fit">
      {buttonText || "Open PDF"} <FiExternalLink className="ml-2" size={20} />
    </Button>
  );
};

export default PDFDownloadButton;
