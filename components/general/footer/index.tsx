import Link from "next/link";
import Typography from "../../common/Typography";
import BookDemo from "../BookDemo";

const contactInformation = {
  email: "support@aimedtech.com",
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
        <div className="bg-background-secondary mb-8 flex flex-col gap-8 p-12 rounded-lg">
          {/* First row - Contact */}
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 border-b border-gray-300 pb-8">
            <Typography variant="h3" className="text-darkblue-page-active font-haasGrotDisplay font-normal md:w-1/2">
              Contact
            </Typography>
             <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:w-1/2">
               <div className="space-y-0 md:w-1/2">
                 <Typography
                   variant="p"
                   className="flex items-center text-primary underline font-haasGrotDisplay font-extralight hover:text-darkblue">
                   <a href={`tel:${contactInformation.phone}`}>
                     {contactInformation.phone}
                   </a>
                 </Typography>
                 <Typography
                   variant="p"
                   className="flex items-center text-primary underline font-haasGrotDisplay font-extralight hover:text-darkblue">
                   <a href={`mailto:${contactInformation.email}`}>
                     {contactInformation.email}
                   </a>
                 </Typography>
               </div>
               <div className="flex items-start md:w-1/2">
                 <Typography variant="p" className="text-darkblue font-haasGrotDisplay font-extralight">
                   {contactInformation.address.street}<br />
                   {contactInformation.address.city} {contactInformation.address.zip}, {contactInformation.address.country}
                 </Typography>
               </div>
             </div>
          </div>

          {/* Second row - Navigation */}
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 border-b border-gray-300 pb-8">
            <Typography variant="h3" className="text-darkblue-page-active font-haasGrotDisplay font-normal md:w-1/2">
              Explore website
            </Typography>
            <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:w-1/2">
              <div className="space-y-1 md:w-1/2">
                <Link href="/dermalyser" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Product
                </Link>
                <Link href="/clinical-validation" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Clinical Studies  
                </Link>
                <Link href="/about" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  About us
                </Link>
                <Link href="/pressroom" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  News
                </Link>
              </div>
              <div className="space-y-1 md:w-1/2">
                <Link href="/privacy-policy" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Integritetspolicy
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/aimedicaltechnology/"}
                  className="text-darkblue font-haasGrotDisplay font-extralight inline-flex items-center hover:text-primary">
                  LinkedIn
                </Link>
              </div>
            </nav>
          </div>

          {/* Bottom row - Additional info */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
            <div className="space-y-3 md:w-1/2">
               <Typography variant="p" className="text-darkblue-page-active font-haasGrotDisplay font-normal">
              All rights reserved AI Medical Technology, 2025
              </Typography>

            </div>
            
            <div className="space-y-3 md:w-1/2">
            <Typography variant="p" className="text-darkblue font-haasGrotDisplay font-extralight">
            Trusted by doctors, built on clinical evidence.
            </Typography>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
