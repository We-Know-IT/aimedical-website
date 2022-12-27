import { Employee } from "../../pages/about";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: Props) {
  const [isDesciptionVisibile, setIsDiscriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDiscriptionVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isDesciptionVisibile) {
    }
  }, [isDesciptionVisibile]);

  return (
    <div className="flex flex-col items-center gap-y-4 rounded-xl pb-6 shadow-xl">
      <Image
        className="clip-path-image h-[300px] w-full rounded-t-xl object-cover"
        src={employee.image}
        width={300}
        height={300}
        alt={employee.name + " " + employee.title}
      />

      <h3 className=" text-lg font-bold text-primary">{employee.name}</h3>
      <p className="text-on-bg-primary/50">{employee.title}</p>

      <p
        className={
          "origin-top px-6 text-center text-lg text-on-bg-primary transition-all duration-300 ease-out" +
          (isDesciptionVisibile
            ? " max-h-[2000px] scale-y-100 opacity-100"
            : " max-h-0 scale-y-0 opacity-0")
        }>
        {employee.description}
      </p>
      <button onClick={toggleDescriptionVisibility}>
        <Image
          className={isDesciptionVisibile ? "rotate-180" : ""}
          src="/images/about/arrow_down.svg"
          height={24}
          width={24}
          alt="read more"
        />
      </button>
    </div>
  );
}
