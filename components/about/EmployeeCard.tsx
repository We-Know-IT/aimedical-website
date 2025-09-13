import { Employee } from "../../pages/about";
import Image from "next/image";
import { useState } from "react";
import Typography from "../common/Typography";

type Props = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: Props) {
  const [isDesciptionVisibile, setIsDiscriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDiscriptionVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl shadow-xl">
      <div className="clip-path-image aspect-square h-[200px] w-full bg-primary/[2%] pt-10">
        <Image
          className="h-full rounded-t-xl  object-contain"
          src={employee.image}
          width={600}
          height={600}
          quality={100}
          alt={employee.name + " " + employee.title}
          style={{ objectPosition: "center 0%" }}
        />
      </div>

      <div className="flex h-full flex-col items-center justify-between px-6">
        <div className="flex h-[140px] flex-col items-center justify-between">
          <a
            href={employee.linkedInLink}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/images/about/linkedin_logo.png"
              width={42}
              height={42}
              alt="linked in link"
            />
          </a>

          <div className="mx-auto h-[2px] w-1/4 bg-primary " />

          <h3 className=" text-center text-[16px] font-bold text-primary">
            {employee.name}
          </h3>
          <p className="text-center text-[16px] text-on-bg-primary">
            {employee.title}
          </p>
        </div>
        <Typography
          variant="p"
          className={
            " origin-top transition-all duration-300 ease-out " +
            (isDesciptionVisibile
              ? " max-h-[2000px] scale-y-100 pt-4 opacity-100"
              : " max-h-0 scale-y-0 opacity-0")
          }>
          {employee.description}
        </Typography>
        <button onClick={toggleDescriptionVisibility} className="p-6">
          <Image
            className={isDesciptionVisibile ? "rotate-180" : ""}
            src="/images/about/arrow_down.svg"
            height={24}
            width={24}
            alt="read more"
          />
        </button>
      </div>
    </div>
  );
}
