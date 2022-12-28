import { Employee } from "../../pages/about";
import EmployeeCard from "./EmployeeCard";

type Props = {
  employees: Employee[];
};

export default function Team({ employees }: Props) {
  return (
    <section className="bg-background-primary py-24 xl:py-32">
      <div className="flex  flex-col  items-center justify-center space-y-12">
        <section className="container flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
            {" "}
            <h2 className="text-left text-xl font-bold leading-6 text-primary xl:text-3xl xl:leading-10">
              Meet our team
            </h2>
            <div className=" h-[2px] w-3/4 bg-primary " />
          </div>

          <p className=" max-w-xl text-center text-lg  font-normal leading-7 text-on-bg-primary lg:max-w-2xl">
            We are a cross disciplinary team of computer scientists, clinicians
            and entrepreneurs united by our passion to develop solutions that
            harness the power of AI which enable healthcare providers to provide
            easier, faster and more cost effective diagnosis.
          </p>
        </section>
        <section className="container">
          <ul className=" grid grid-cols-1 gap-14 md:grid-cols-2 md:space-y-0 xl:grid-cols-3">
            {employees.map((e) => (
              <li key={e.name}>
                <EmployeeCard employee={e} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
