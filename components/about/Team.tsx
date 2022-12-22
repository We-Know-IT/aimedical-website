import EmployeeCard from "./EmployeeCard";

export type Employee = {
  name: string;
  title: string;
  image: string;
  description: string;
};
const employees: Employee[] = [
  {
    name: "Christoffer Ekström",
    title: "CEO / Co-Founder",
    description: `Christoffer Ekström is one of the founders of AI Medical Technology and is the company’s 
    CEO and one of the board members. He is a serial entrepreneur and holds a Master’s degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor’s 
    degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer.`,
    image: "/images/about/employee_test.png",
  },
  {
    name: "Christoffer Ekström",
    title: "CEO / Co-Founder",
    description: `Christoffer Ekström is one of the founders of AI Medical Technology and is the company’s 
    CEO and one of the board members. He is a serial entrepreneur and holds a Master’s degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor’s 
    degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer.`,
    image: "/images/about/employee_test.png",
  },
  {
    name: "Christoffer Ekström",
    title: "CEO / Co-Founder",
    description: `Christoffer Ekström is one of the founders of AI Medical Technology and is the company’s 
    CEO and one of the board members. He is a serial entrepreneur and holds a Master’s degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor’s 
    degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer.`,
    image: "/images/about/employee_test.png",
  },
  {
    name: "Christoffer Ekström",
    title: "CEO / Co-Founder",
    description: `Christoffer Ekström is one of the founders of AI Medical Technology and is the company’s 
    CEO and one of the board members. He is a serial entrepreneur and holds a Master’s degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor’s 
    degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer.`,
    image: "/images/about/employee_test.png",
  },
  {
    name: "Christoffer Ekström",
    title: "CEO / Co-Founder",
    description: `Christoffer Ekström is one of the founders of AI Medical Technology and is the company’s 
    CEO and one of the board members. He is a serial entrepreneur and holds a Master’s degree in immersive technologies (M.Sc.) from Stockholm University and finalising a bachelor’s 
    degree in business administration (BBA) at Uppsala University. Christoffer is an experienced climber and adventurer.`,
    image: "/images/about/employee_test.png",
  },
];

export default function Team() {
  return (
    <section className="bg-background-primary py-24 xl:py-32">
      <div className="container flex  flex-col items-center justify-center space-y-12">
        <section className="flex max-w-xl flex-col items-center space-y-4">
          <h2 className="text-left text-xl font-bold leading-6 text-primary xl:text-3xl xl:leading-10">
            Meet our team
          </h2>
          <div className=" h-[2px] w-1/4 bg-primary " />
          <p className="text-center text-on-bg-primary">
            We are a cross disciplinary team of computer scientists, clinicians
            and entrepreneurs united by our passion to develop solutions that
            harness the power of AI which enable healthcare providers to provide
            easier, faster and more cost effective diagnosis.
          </p>
        </section>
        <section>
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
