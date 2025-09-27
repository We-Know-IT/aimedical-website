import Head from "next/head";
import Header from "../components/general/Header";
import Image from "next/image";
import Typography from "../components/common/Typography";
import { LinkButton } from "../components/general/Button";

const actionButton = {
  children: "Go back home",
  href: "/",
};

export default function NotFound() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
      </Head>
      <header
      className="relative h-[65vh] lg:h-[85vh] max-h-[85vh] 2xl:max-h-[85vh] w-full pt-28 pb-12"
      id="header">
      <div className="container flex h-full justify-center">
        <div className="relative w-full overflow-hidden rounded-xl xl:container xl:max-w-none">
          <Image
            src={"/images/home/header.png"}
            alt={ "Header image"}
            fill
            className="object-cover animate-zoom-slow"
            style={{ objectPosition: "center" }}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 50%, transparent 100%)'
            }}
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4 lg:p-8 text-center z-20">
            <div className="animate-focus-in p-4">

                <div className="flex flex-col items-center mb-4">
                  <Typography
                    variant="h1"
                    className="relative font-robotoFlex font-normal text-on-primary text-center mb-4">
                    404 - Page not found
                  </Typography>
                  <div className="relative mb-2 mt-2 h-0.5 w-full max-w-xs rounded bg-primary"></div>
                </div>
                <div className="flex justify-center">
                  <LinkButton href="/" intent="transparent">Go back home</LinkButton>
                </div>

              </div>
            </div>
          </div>
        </div>
    </header>
    </>
  );
}
