import { useState } from "react";
import Typography from "../common/Typography";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQBodyProps {
  faqData: FAQItem[];
}

export default function FAQBody({ faqData }: FAQBodyProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="pb-16">
      <div className="container">
      <div className="container bg-background-secondary rounded-xl pb-12">
        <div className="flex flex-col xl:flex-row xl:gap-12 ">
          {/* Left Column - FAQ Info */}
          <div className="xl:w-1/2">
            <div className="py-8 h-fit">
              <Typography variant="h3" className="text-darkblue-page-active font-robotoFlex font-normal mb-4 text-[14px]">
                FAQ
              </Typography>
              <Typography variant="p" className="text-darkgray font-robotoFlex font-normal text-[19px] leading-[26px] leading-relaxed">
                Here you'll find answers to the most frequently asked questions. If you can't find what you're looking for, don't hesitate to get in touch with us.
              </Typography>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="xl:w-1/2">
            <div className="bg-transparent rounded-xl lg:pt-16">
              {faqData.map((item, index) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-0 py-4 text-left flex items-center justify-between transition-all duration-200 rounded-lg"
                  >
                    <Typography variant="h3" className="text-darkgray font-robotoFlex font-normal text-lg pr-4">
                      {item.question}
                    </Typography>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full border-2 border-darkgray flex items-center justify-center relative">
                        {/* Horizontal line (always visible) */}
                        <div className="w-3 h-0.5 bg-darkgray"></div>
                        {/* Vertical line that rotates to become horizontal (minus) */}
                        <div className={`absolute w-0.5 h-3 bg-darkgray transition-transform duration-200 ${
                          openItems.includes(item.id) ? 'rotate-90' : ''
                        }`}></div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-3">
                        <Typography variant="p" className="text-darkblue font-robotoFlex font-normal leading-relaxed">
                          {item.answer}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  
                  {/* Separating line between questions */}
                  {index < faqData.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

