import Link from "next/link";
import Typography from "../../common/Typography";
import BookDemo from "../BookDemo";

const contactInformation = {
  email: "info@aimedtech.com",
  phone: "(+46) 08 522 351 91",
  address: {
    street: "Universitetsvägen 8",
    city: "Stockholms County",
    zip: "114 18",
    country: "SE",
  },
};

export default function Footer() {

  return (
    <footer
      className=""
      id="contact">
      <div className="container">
        {/* Book a demo section */}
        <BookDemo />

        {/* Footer content */}
        <div className="bg-darkgray mb-8 flex flex-col gap-8 p-8 rounded-lg">
          {/* First and Second rows - Contact and Navigation */}
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 border-b border-gray-300 pb-8">
            {/* First row - Contact */}
            <div className="flex flex-col space-y-6 lg:w-1/2 text-[14px]">
              <Typography variant="h3" className="text-darkblue-page-active font-robotoFlex font-normal ">
                Contact
              </Typography>
              <div className="flex items-start">
                <Typography variant="p" className="text-white font-robotoFlex font-normal">
                  AI Medical Technology - {contactInformation.address.street}<br />
                  {contactInformation.address.city} {contactInformation.address.zip}, {contactInformation.address.country}
                </Typography>
              </div>
              <div className="space-y-2">
                <Typography
                  variant="p"
                  className="flex items-center text-white font-robotoFlex font-normal hover:text-white">
                  <a href={`tel:${contactInformation.phone}`}>
                    {contactInformation.phone}
                  </a>
                </Typography>
                <Typography
                  variant="p"
                  className="flex items-center text-white font-robotoFlex font-normal hover:text-white">
                  <a href={`mailto:${contactInformation.email}`}>
                    {contactInformation.email}
                  </a>
                </Typography>
              </div>
              <div>
                <Link
                  href={"https://www.linkedin.com/company/aimedicaltechnology/"}
                  className="text-white font-robotoFlex font-normal inline-flex items-center hover:text-primary">
                  LinkedIn
                </Link>
              </div>
            </div>                  

            {/* Second row - Navigation */}
            <div className="flex flex-col space-y-6 lg:w-1/2 text-[14px]">
              <Typography variant="h3" className="text-darkblue-page-active font-robotoFlex font-normal">
                Find
              </Typography>
              <nav className="flex flex-col space-y-1">
                <div className="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-32">
                  <div className="space-y-1 w-32">
                    <Link href="/dermalyser" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      Product
                    </Link>
                    <Link href="/clinical-validation" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      Clinical Studies  
                    </Link>
                    <Link href="/about" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      About us
                    </Link>
                  </div>
                  <div className="space-y-1 w-32">
                    <Link href="/pressroom" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      News
                    </Link>
                    <Link href="/faq" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      FAQ
                    </Link>
                    <Link href="/privacy-policy" className="block text-white font-robotoFlex font-normal hover:text-primary">
                      Integritetspolicy
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Bottom row - Additional info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[12px]">
            <div className="flex pb-4 md:pb-0 space-y-3 md:w-1/2">
              <Typography variant="p" className="text-darkblue-page-active font-robotoFlex font-normal text-[11px] md:text-[12px]">
                All rights reserved AI Medical Technology, 2025
              </Typography>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-32 md:w-1/2">
              <div className="w-auto flex justify-start">
                <img 
                  src="/images/footer/bsi.svg" 
                  alt="BSI Certification" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="w-auto flex justify-start">
                <img 
                  src="/images/footer/ce.svg" 
                  alt="CE Marking" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
