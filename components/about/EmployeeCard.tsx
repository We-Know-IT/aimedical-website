import { Employee } from "../../pages/about";
import Image from "next/image";
import { useState } from "react";
import Typography from "../common/Typography";
import LinkedIn from "../icons/common/LinkedIn";

type Props = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: Props) {
  const [isDesciptionVisibile, setIsDiscriptionVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDiscriptionVisible((prev) => !prev);
  };

  return (
    <div className="bg-beige-dark flex flex-col items-center justify-center gap-y-4 rounded-xl min-h-[340px] relative">
      {/* LinkedIn icon at top left */}
      <div className="absolute top-8 left-5 z-10">
        <a 
          href={employee.linkedInLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <LinkedIn w={24} h={24} className="text-primary hover:text-primary-hover transition-colors cursor-pointer sm:w-5 sm:h-5" />
        </a>
      </div>
      
      <div className="flex justify-center w-full pt-16">
        <div className="aspect-square h-[180px] w-[180px]">
          {!imageError ? (
            <Image
              className="h-full w-full rounded-full object-cover"
              src={employee.image}
              width={600}
              height={600}
              quality={100}
              alt={employee.name + " " + employee.title}
              onError={() => setImageError(true)}
              unoptimized={true}
              priority={false}
            />
          ) : (
            <div className="h-full w-full rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                {employee.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex h-full flex-col items-start justify-between px-6 w-full">
        <div className="flex flex-col items-start justify-center space-y-0 w-full min-h-[60px]">
          <h3 className="font-robotoFlex font-normal text-left text-[14px] text-darkblue">
            {employee.name}
          </h3>
          <p className="font-robotoFlex text-left text-[14px] text-darkblue leading-tight">
            {employee.title}
          </p>
        </div>
        <Typography
          variant="p"
          className={
            "font-robotoFlex origin-top transition-all duration-500 ease-in-out overflow-hidden " +
            (isDesciptionVisibile
              ? " max-h-[500px] scale-y-100 pt-4 opacity-100"
              : " max-h-0 scale-y-95 pt-0 opacity-0")
          }>
          {employee.description}
        </Typography>
        
        {/* Divider line */}
        <div className="w-full border-t border-gray-300 my-1"></div>
        
         <button onClick={toggleDescriptionVisibility} className="pt-4 pb-6 hover:text-primary-hover transition-colors flex items-center justify-between w-full">
           <Typography variant="p" className="font-robotoFlex text-darkgray hover:text-primary-hover text-[14px]">Read more about {employee.name.split(' ')[0]}</Typography>
           <Image
             src="/images/about/arrow-circle-down.svg"
             alt="Read more"
             width={20}
             height={20}
             className={`transition-transform duration-300 ${isDesciptionVisibile ? 'rotate-180' : ''}`}
           />
         </button>
      </div>
    </div>
  );
}
