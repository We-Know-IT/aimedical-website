import React, { useState } from "react";
import Typography from "../common/Typography";
import { twMerge } from "tailwind-merge";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface AccordionProps {
  title: React.ReactNode | string;
  content: React.ReactNode | string;
  className?: string;
}

export default function Accordion({
  title,
  content,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={twMerge("w-full border-b border-[#00000033]", className)}>
      <div
        className="flex w-full cursor-pointer items-center justify-between py-4"
        onClick={() => setIsOpen(!isOpen)}>
        <Typography variant="h3">{title}</Typography>
        {isOpen ? (
          <AiOutlineMinusCircle className="text-on-bg-primary" size={25} />
        ) : (
          <AiOutlinePlusCircle className="text-on-bg-primary" size={25} />
        )}
      </div>
      {isOpen && (
        <Typography variant="p" className="pb-4">
          {content}
        </Typography>
      )}
    </div>
  );
}
