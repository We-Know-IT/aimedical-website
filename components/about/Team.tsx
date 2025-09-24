import { Employee } from "../../pages/about";
import Typography from "../common/Typography";
import EmployeeCard from "./EmployeeCard";
import { useState, useEffect } from "react";

type Props = {
  employees: Employee[];
  title: string;
};

export default function Team({ employees, title }: Props) {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Always show all employees during SSR and before mount
  const displayedEmployees = mounted && isMobile && !showAllMembers ? employees.slice(0, 2) : employees;

  return (
    <section className="container mt-6 mb-24 bg-background-primary">
      <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-8">
        <div className="flex w-full flex-col items-start space-y-4">
          <Typography variant="h3" className="sm:text-start font-robotoFlex font-normal text-[20px] lg:text-xl text-primary">
            {title}
          </Typography>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:space-y-0 xl:grid-cols-4">
            {/* First 2 employees - always visible on mobile */}
            {employees.slice(0, mounted && isMobile ? 2 : employees.length).map((e) => (
              <li key={e.name} className="h-full">
                <EmployeeCard employee={e} />
              </li>
            ))}
            
            {/* Additional employees - animated entrance */}
            {mounted && isMobile && employees.slice(2).map((e, index) => (
              <li 
                key={e.name} 
                className={`h-full transition-all duration-500 ease-in-out transform ${
                  showAllMembers
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4 absolute invisible'
                }`}
                style={{
                  transitionDelay: showAllMembers ? `${index * 100}ms` : '0ms'
                }}
              >
                <EmployeeCard employee={e} />
              </li>
            ))}
          </ul>
          
          {/* View full team button - mobile only */}
          {mounted && isMobile && !showAllMembers && employees.length > 2 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllMembers(true)}
                className="bg-white text-primary w-full px-6 py-3 border border-primary rounded-full font-robotoFlex font-light hover:bg-primary-hover transition-colors">
                View full team
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
