import { Employee } from "../../pages/about";
import Typography from "../common/Typography";
import EmployeeCard from "./EmployeeCard";

type Props = {
  employees: Employee[];
  title: string;
  text?: string;
};

export default function Team({ employees, title, text }: Props) {
  return (
    <section className="container mt-6 mb-24 bg-background-primary">
      <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-12">
        <div className="flex w-full max-w-2xl flex-col items-center space-y-4">
          <Typography variant="h2" className="w-full sm:text-center">
            {title}
          </Typography>
          {text && <Typography variant="p">{text}</Typography>}
        </div>
        <div>
          <ul className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:space-y-0 xl:grid-cols-4">
            {employees.map((e) => (
              <li key={e.name} className="h-full">
                <EmployeeCard employee={e} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
